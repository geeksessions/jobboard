import React from 'react';

class JobCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }
  }

  getLinks = (links) => {
    
    if(links.length) {
      let link = links.map((link) => {
        return (
          <li><a className="jobcard__link" target="_blank" href={link}>{link}</a></li>
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

  clickHandler = () => {
    this.setState({active: !this.state.active});
  }

  render() {
    let job = this.props.job.doc;
    return (
      <article className={this.state.active ? "jobcard jobcard--active" : "jobcard"} onClick={this.clickHandler}>
        <a href={"#" + job._id} className="jobcard_anchor">
          <header>
            <author className="jobcard__author">
              {job.poster}
            </author>
          </header>
          <div className="jobcard__content">
            <p className="jobcard__text">{job.raw}</p>
            <footer>
              {this.getLinks(job.links)}
            </footer>
            <div className="jobcard__overlay">
              <p className="jobcard__overlay-text">
                Click to view more
              </p>
            </div>
          </div>
        </a>
        </article>
    )
  }
}


export default JobCard
