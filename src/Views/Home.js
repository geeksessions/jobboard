import React from 'react';
import { connect } from 'react-redux';

import JobCard from '../Components/JobCard';
import DataSort from '../Components/DataSort';

class Home extends React.Component {

  renderJobList = () => {
    let jobs = this.props.jobs;
    let results = [];

    if (jobs.length === 0) {
      return (<p> No data to Show... bitches.  </p>)
    }


    // Checking what sort option is selected, Need a better way to do this
    else {
      results = this.sortJobs(jobs);
    }
    
    return results.map((job, i) => {
      return <JobCard job={job} key={i} />
    })
  }

  sortJobs = (jobs) => {
    let results = [];
    let sort = this.props.sort;
    
    switch(sort) {
      case '1':
        results = jobs.sort((a, b) => {
          return a.doc.date - b.doc.date;
        }).reverse();
        break;
      
      case '2':
        results = jobs.sort((a, b) => {
          return a.doc.date - b.doc.date;
        });
        break;
      
      case '3':
        results = jobs.sort(function (a, b) {
          let posterA = a.doc.poster.toUpperCase();
          let posterB = b.doc.poster.toUpperCase();

          if (posterA < posterB) {
            return -1;
          }

          if (posterA > posterB) {
            return 1;
          }
          return 0;
        });
        break;

      case '4':
        results = jobs.sort(function (a, b) {
          let posterA = a.doc.poster.toUpperCase();
          let posterB = b.doc.poster.toUpperCase();

          if (posterA < posterB) {
            return 1;
          }

          if (posterA > posterB) {
            return -1;
          }
          return 0;
        });
    }

    return results;
  }

  
  
  render() {
    return (
      <div className="home">
        <aside className="home__sidebar">
          <div>
            <img className="home__logo" alt="geeksessions" src="./images/geeksessions.jpg" />
            <h1 className="home__title">Job board!</h1>
            <h5 className="home__subtitle">Maybe your next job is listed here :D</h5>
            <p>
                This information on this page was retrieved by our hardworking <i>bot</i> from the #jobboard channel on GeekSessions slack.
            </p>
            <p>
                Every time an admin pins a job offer on that channel, that offer sent here for your viewing pleasure!
            </p>
          </div>
          <footer className="home__footer">
            <h5 className="home__footer-title">
              You can find us on: 
            </h5>
            <ul className="home__social">
              <li className="home__social-item">
                <a href="https://www.facebook.com/GeekSessionsFaro/" target="_blank" className="home__social-link">
                  <img src="./images/facebook.png" alt="Geeksessions on Facebook"/>
                </a>
                </li>
              <li className="home__social-item">
                <a href="http://gsslackin.herokuapp.com" target="_blank" className="home__social-link">
                  <img src="./images/slack.png" alt="Geeksessions on Slack" />
                </a>
              </li>
            </ul>
          </footer>
        </aside>
        <div className="home__list">

          <header className="home__list-header">
            {/*
                    <label htmlFor="filterInput">Filter:</label>
                    <input type="text" name="filterInput" id="filterInput" className="home__filter"
                        placeholder="Position, technology or company" /> 
                */}
            <DataSort />
          </header>
          {this.renderJobList()}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
    sort: state.sort
  }
}

const ConnectedHome = connect(mapStateToProps)(Home)

export default ConnectedHome
