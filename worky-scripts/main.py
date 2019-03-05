
from pymongo import MongoClient
from bs4     import BeautifulSoup
import json
import requests
import time
import urllib
from datetime import datetime


class NarutoChars:
    def __init__(self):
        self.Mongo      = MongoClient('localhost', 27017)
        self.db         = self.Mongo['worky']
        self.collection = self.db['characters']
        self.index      = 1
        # set characters report
        self.characters = []
        self.errors     = []
        self.inserted   = []
        self.updated    = []
        #start process timer
        self.startTime  = time.time()

    def save(self,data):
        now        = datetime.utcnow()
        query      = {'name':data['name']};
        document = self.collection.find_one(query)
        if  not document:
            data['createdAt'] = now;
            data['updatedAt'] = now;
            self.collection.insert_one(data)
            self.inserted.append(data)
        else:
            data['updatedAt'] = now;
            result = self.collection.update_one(query,{ "$set": data })
            self.updated.append(data)

    def getAllChars(self, uri):
        #set init uri
        self.uri        = uri
        # get list of characters using rdf uri
        response = requests.get(self.uri)
        # turns the raw response into html formated object
        soup = BeautifulSoup(response.text, 'lxml')
        #get the list of characters from the wiki page
        subjects  = soup.find_all('swivt:subject')
        # define nodes
        self.nodes = subjects;
        # Parse all characters links
        for s in subjects :
            ## get the url from each char
            isdefBy = s.find('swivt:page')
            key     = s.find('swivt:wikipagesortkey')
            uri     = isdefBy['rdf:resource'];
            name    = key.text;
            #get html raw of each character page
            self.getCharPageData(uri,name)

    def removeGarbageFromDocument(self):
        [s.extract() for s in self.soup('script')]
        [s.extract() for s in self.soup('footer')]
        [s.extract() for s in self.soup('noscript')]

    def getCharPageData(self,uri,name):
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.0 Safari/537.36'}
        response   = requests.get(uri,headers=headers)
        self.nodes = [response]
        if (response):
            #get the html parsed of each character page
            self.soup = BeautifulSoup(response.text, 'html.parser')
            # remove all garbage tags from the document
            self.removeGarbageFromDocument()
            #prepare the object for character data
            self.charData = {}
            #define the segments of the content
            self.charData['name']    = name
            self.charData['link']    = urllib.parse.unquote(uri)
            self.charData['img']     = self.getCharThubmnail()
            self.charData['content'] = self.getCharContent()

            print(self.index ,':', self.charData['link']  )
            print('=============================================================')
            self.index = self.index + 1
            #save to mongo
            self.save(self.charData)
            #set data for report
            self.characters.append(self.charData)
        else:
            errors.apppedn({'name':name})

    def getCharThubmnail(self):
        td   = self.soup.find("td",  class_="imagecell")
        if( td == None ):
            img = ''
        else:
            img  = td.findChildren('img')
            img  = img[0]['data-src']
        return img

    def getCharContent(self):
        #set nodes data
        nodes = []
        #get segments from content
        segments = self.soup.find_all('h2', {'class':''})
        # segments[-1]
        #iterate for each h2 segment
        for segment in segments:
            node = {}
            headline    = segment.text.strip()
            content     = self.geContentSegment(segment)
            node['title']   = headline
            node['content'] = content
            nodes.append(node)
        return nodes;

    def geContentSegment(self,segment):
        html = []
        nodes = segment.findNextSiblings()
        for node in nodes:
            if(node.name != 'h2'):
                html.append(str(node))
            else:
              return "".join(html)

    def report(self):
        self.endTime = time.time()
        timer = round((self.endTime - self.startTime),2)
        print('Finished in ', ("--- %s seconds ---" % (timer)) )
        print("total nodes [%s] " % len(self.nodes))
        print('total records saved in database  [%s]'  % len(self.characters ))
        print('total records inserted in database  [%s]'  % len(self.inserted ))
        print('total records updated  in database  [%s]'  % len(self.updated ))
        print('total errors nodes  [%s]'  % len(self.errors ))


# Run ------
Naruto = NarutoChars()
Naruto.getAllChars('https://naruto.fandom.com/wiki/Special:ExportRDF/Category:Characters?xmlmime=rdf')
# Naruto.getCharPageData('https://naruto.fandom.com/wiki/Zetsu','Zetsu')
Naruto.report()
