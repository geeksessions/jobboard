import PouchDB from 'pouchdb'

const remoteDB = new PouchDB("http://localhost:5984/jobboard");

const myDB = PouchDB('jobboard')

// function Job () {
//   return {
//     id: 1,
//     raw: 'hcueihfgeuorhfioerhfier',
//     poster: "miguelcoquet",
//     links: []
//   }
// }

// function Poster () {
//   return {
//     id: "miguelcoquet",
//   }
// }

var link = myDB.sync(remoteDB, {
  live: true,
  retry: true
});

const DB = {
  PouchDB,
  name: 'meow',
  db: myDB,
  remote: remoteDB,
  link
}

export default DB
