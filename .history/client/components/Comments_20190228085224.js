import React, { Component } from 'react'

export default class Comments extends Component {

  renderComm(comment,i){
    return(
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  }

  render() {
    return (
      <div className="comment">
          {this.props.postComments.map(this.renderComm)}
          <form ref="commentForm" className="comment-form">
            <input type="text" ref="author" placeholder="author"/>
            <input type="text" ref="comment" placeholder="comment"/>
            <input type="submit" hidden/>
          </form>
      </div>
    )
  }
}
