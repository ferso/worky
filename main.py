import rdflib
from bs4 import BeautifulSoup
import requests



def testF():
    graph = rdflib.Graph()
    graph.open("store", create=True)
    result = graph.parse("https://naruto.fandom.com/wiki/Special:ExportRDF/Category:Characters?xmlmime=rdf")
    print("graph has %s statements." % len(graph))

    for subj, pred, obj in graph:
        print (subj, obj)
        # print(pred, obj.__class__)
        # print(type(obj), obj.__subclasses__())
        print("==================================")


    s = graph.serialize(format='application/rdf+xml')

    predicates = graph.predicates(subject=None, object=None)

    # for predicate in predicates:
        # print (predicate)

def testM():
    response = requests.get('https://naruto.fandom.com/wiki/Special:ExportRDF/Category:Characters?xmlmime=rdf')
    soup = BeautifulSoup(response.text, 'lxml')

    subjects = soup.find_all('swivt:subject')
    for s in subjects:
        isdefBy = s.find_all('rdfs:isdefinedby')
        print(s, '\n\n')
        print(isdefBy[0]['rdf:resource'], '\n*************')
        idbContents = requests.get(isdefBy[0]['rdf:resource'])
        print(idbContents.text)
        break

testM()