import pytest
from NarutoChars import NarutoChars

database = 'test_worky'

def test_Db():
    Naruto = NarutoChars()
    Naruto.setDb(database)
    assert  Naruto.Mongo.admin.command('ismaster')['ismaster']  == True

def test_getCharAndSaveToDb():
    Naruto = NarutoChars()
    Naruto.setDb(database)
    Naruto.getCharPageData('https://naruto.fandom.com/wiki/Neji_Hyūga','Neji_Hyūga')
    assert len(Naruto.characters) == 1

def test_getErrorsChar():
    Naruto = NarutoChars()
    Naruto.setDb(database)
    Naruto.getCharPageData('https://naruto.fandom.com/wiki/Neji_Hyūga','Neji_Hyūga')
    assert len(Naruto.errors) == 0
