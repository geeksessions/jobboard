import React from 'react';
import moment from 'moment';

class JobCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }
  }

  getLinks = (id, links) => {
    if(links.length !== 0) {
      let link = links.map((link, index) => {
        return (
          <li key={id + "-link-" + index }><a className="jobcard__link" target="_blank" href={link}>{link}</a></li>
        )
      });

      return (
        <div>
          <h4>Relavant links:</h4>
          <ul className="jobcard__links">
            {link}
          </ul>
        </div>
      );
    }

    return null;
  }

  getClasses = (active, links) => {
    let classes = "";

    if (active) {
      classes += "jobcard--active ";
    }

    if (links.length === 0) {
      classes += "jobcard--no-links"
    }

    return classes;
  } 

  clickHandler = () => {
    this.setState({active: !this.state.active});
  }

  render() {
    let job = this.props.job.doc;
  //  let moment = require('moment');
    moment().format();

    let day = moment.unix(job.date).fromNow();

    return (
      <article className={"jobcard " + this.getClasses(this.state.active, job.links)} onClick={this.clickHandler}>
        <header className="jobcard__header">
          <address className="jobcard__author">
            {job.poster}
          </address>
          <small>
            <time dateTime={job.date}>{day}</time>
            <a href={"#" + job._id} className="jobcard__anchor">permalink</a>              
          </small>            
        </header>
        <div className="jobcard__content">
          <p className="jobcard__text">{job.raw}</p>
          <footer className="jobcard__footer">
            {this.getLinks(job._id, job.links)}
          </footer>
          <div className="jobcard__overlay">
            <p className="jobcard__overlay-text">
              Click to view more
            </p>
          </div>
        </div>
      </article>
    )
  }
}


export default JobCard
