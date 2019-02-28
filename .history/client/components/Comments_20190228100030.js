import React, { Component } from 'react'

export default class Comments extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  renderComm(comment,i){
    return(
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null,this.props.params.postId,i)}>&times;</button>
        </p>
      </div>
    )
  }

  handleSubmit(e){
    e.preventDefault();// wont refresh :D because def behavior is to refresh the page, this is annoying
    const { postId} = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId,author,comment);    
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <div className="comments">
          {this.props.postComments.map(this.renderComm)}
          <form onSubmit={this.handleSubmit} ref="commentForm" className="comment-form">
            <input type="text" ref="author" placeholder="author"/>
            <input type="text" ref="comment" placeholder="comment"/>
            <input type="submit" hidden/>
          </form>
      </div>
    )
  }
}
