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
    return (
      <div className="home">
        <aside className="home__sidebar">
          <img className="home__logo" alt="geeksessions"  src="./images/geeksessions.jpg" />
          <h1 className="home__title">GeekSessions Job board!</h1>
          <h5 className="home__subtitle">Maybe your next job is listed here :D</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maiores beatae commodi ratione id harum excepturi perspiciatis blanditiis repudiandae aliquid!</p>
        </aside>
        <div className="home__list">
          <header className="home__list-header">
            <label htmlFor="filterInput">Filter:</label>
            <input type="text" name="filterInput" id="filterInput" className="home__filter"
              placeholder="Position, technology or company" />
          </header>
          {this.renderJobList()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs
  }
}

const ConnectedHome = connect(mapStateToProps)(Home)

export default ConnectedHome
