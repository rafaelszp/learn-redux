import React, { Component } from 'react'
import Photo from './Photo'
import Comments from './Comments'

export default class Single extends Component {
  render() {
    let i = this.props.posts.findIndex((post)=> post.code === this.props.params.postId);
    let post = this.props.posts[i];
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
      </div>
    )
  }
}
