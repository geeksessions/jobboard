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

const setupDataListening = (link, dispatch) => {
  return link.on('change', (changeObj) => {
    DB.db.allDocs({include_docs: true}).then((response) => {
      dispatch({type: 'DATA_CHANGE', data: response.rows})
    })
  })
}

var link = myDB.sync(remoteDB, {
  live: true,
  retry: true
})

const DB = {
  PouchDB,
  name: 'meow',
  db: myDB,
  remote: remoteDB,
  attachStore: (store) => {
    setupDataListening(link, store.dispatch)
    // TODO
    // DB.db.allDocs({include_docs: true}).then((response) => {
    //   store.dispatch({type: 'DATA_CHANGE', data: response.rows})
    // })
  },
  link
}

export default DB
