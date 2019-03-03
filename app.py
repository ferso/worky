import rdflib

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
