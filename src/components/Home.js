import React, { Component, Fragment } from 'react'
import Post from '../components/Post'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'

export default class Home extends Component {
  showLoading() {
    return (
      <div className="flex w-100 h-100 items-center justify-center pt7">
        <div>Loading ...</div>
      </div>
    )
  }

  showError(reason) {
    return (
      <div className="flex w-100 h-100 items-center justify-center pt7">
        <div>An unexpected error occured.</div>
      </div>
    )
  }

  showList(data, refetch) {

    return (
      <Fragment>
        <h1>Feed</h1>
        {data.oportunities &&
          data.oportunities.map(O => (
            <Post
              key={O.id}
              post={O}
              refresh={() => refetch()}
              isDraft={!O.isPublished}
            />
          ))}
        {this.props.children}
      </Fragment>
    )
  }
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ data, loading, error, refetch }) => {
          if (loading) {
            return this.showLoading()
          }

          if (error) {
            return this.showError(error)
          }

          return this.showList(data, refetch)
        }}
      </Query>
    )
  }
}

export const FEED_QUERY = gql`
query {
  oportunities( where: {id_not: null } ) {
    id
    raw
    poster {
      id
      name
    }
  }
}
`
