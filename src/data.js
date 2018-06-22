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
    pullJobsAndPushToRedux(myDB, dispatch)
  })
}

var link = myDB.sync(remoteDB, {
  live: true,
  retry: true
})

const pullJobsAndPushToRedux = (db, dispatch) => {
  db.allDocs({include_docs: true}).then((response) => {

    // const results = response.rows.sort((a, b) => {
    //   return a.doc.date - b.doc.date;
    // }).reverse();

    dispatch({ type: 'DATA_CHANGE', payload: response.rows})
  })
}

const DB = {
  PouchDB,
  name: 'meow',
  db: myDB,
  remote: remoteDB,
  attachStore: (store) => {
    setupDataListening(link, store.dispatch)
    pullJobsAndPushToRedux(myDB, store.dispatch)
  },
  link
}

export default DB
