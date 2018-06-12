import React from 'react';
import { connect } from 'react-redux';

import JobCard from '../Components/JobCard';

class Home extends React.Component {

  renderJobList = () => {
    let jobs = this.props.jobs;

    if (jobs.length === 0) {
      return (<p> No data to Show ... bitches.  </p>)
    }

    return jobs.map((job, i) => {
      return <JobCard job={job} key={i} />
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
        <div className="clearfix p2">
          {this.renderJobList()}
        </div>
      </div>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs
  }
}

const ConnectedHome = connect(mapStateToProps)(Home)

export default ConnectedHome
