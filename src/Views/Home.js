import React, { Component } from 'react'
import DB from '../data'


export default class Home extends Component {

  constructor(props) {
    super(props)
    this.setupDataListening()

    this.state = {
      jobs: [{id:"miguel"},{id:"jorge"}]
    }
  }

  setupDataListening = () => {
    DB.db.changes({
      since: 'now',
      include_docs: true
    }).then(this.updateData)
  }

  updateData = () => {
    DB.db.allDocs({include_docs: true}).then((response) => {
      this.setState({
        jobs: response.rows
      })
    })
  }

  renderJobList = () => {
    if (this.state.jobs.length === 0) {
      return (<p> No data to Show ... bitches.  </p>)
    }

    return this.state.jobs.map((job, i) => {
      return <div key={i} className="border-bottom p1"> {job.id} </div>
    })
  }

  render() {
    return (<div className="clearfix p2">
      <div className="col col-4 p2 bg-white border rounded" >
        <div>
          <img className="circle" src="http://placekitten.com/g/200/200" />
          <p>
            <h3>Hi i'm a job cat!</h3>
            I'm here to help you get your next job inside the GeekSessions Community.
          </p>
        </div>
        <div>
          <input className="input col col-10" placeholder="Try searching for a position, a technology or a company..."/>
        </div>
      </div>
      <div className="col col-8 p2" >
        <div>
          {
            this.renderJobList()
          }
        </div>
      </div>
    </div>)
  }
} 