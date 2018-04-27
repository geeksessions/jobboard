import PouchDB from 'pouchdb'

const remoteDB = new PouchDB("http://localhost:5984/jobboard");

var myDB = PouchDB('jobboard')

function Job () {
  return {
    id: 1,
    raw: 'hcueihfgeuorhfioerhfier',
    Poster: "miguelcoquet",
    links: []
  }
}

function Poster () {
  return {
    id: "miguelcoquet",
  }
}

const DB = {
  PouchDB,
  name: 'meow',
  db: myDB,
  remote: remoteDB,
  init: () => {
    return myDB.sync(remoteDB, {live: true});
  }
}

export default DB
