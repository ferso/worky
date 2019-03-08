from NarutoChars import NarutoChars

# Run ------
Naruto = NarutoChars()
Naruto.setDb()
Naruto.getAllChars('https://naruto.fandom.com/wiki/Special:ExportRDF/Category:Characters?xmlmime=rdf')
Naruto.report()
