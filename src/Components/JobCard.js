import React from 'react';

class JobCard extends React.Component {
  getLinks = (links) => {
    
    let link = links.map((link) => {
      return (
        <li><a target="_blank" href={link}>{link}</a></li>
      )
    });

    return link;
  }

  render() {
    let job = this.props.job.doc;
    return (
        <div className="">
          <p>{job.raw}</p>
          <footer>{job.poster}</footer>
          <ul className="links">
          {this.getLinks(job.links)}
          </ul>
        </div>
    )
  }
}


export default JobCard
