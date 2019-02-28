import React, { Component } from 'react'
import Photo from './Photo'
import Comments from './Comments'

export default class Single extends Component {
  render() {
    const i = this.props.posts.findIndex((post)=> post.code === this.props.params.postId);
    const post = this.props.posts[i];
    const postId = this.props.params.postId;
    const postComments = this.props.comments[postId] || [];
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments i={i} post={post} {...this.props}/>
      </div>
    )
  }
}
