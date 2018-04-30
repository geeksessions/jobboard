import React, { Component } from 'react'
import DB from '../data'


export default class Home extends Component {

  constructor(props) {
    super(props)
    this.setupDataListening()
    this.updateData()

    this.state = {
      jobs: []
    }
  }

  setupDataListening = () => {
    return DB.link.on("change",this.updateData)
  }

  updateData = () => {
    return DB.db.allDocs({include_docs: true}).then((response) => {
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
          <img alt="" className="circle" src="http://placekitten.com/g/200/200" />
          
          <div className="h3">Hi i'm a job cat, boo!</div>
          I'm here to help you get your next job inside the GeekSessions Community.
        
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