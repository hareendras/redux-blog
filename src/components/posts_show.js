import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions";

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params; // match property is passed by react router. parms will have all the parameters of the url
    this.props.fetchPost(id);
  }
  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }
  render() {
    const { post } = this.props;
    console.log("POST", post);
    if (!post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to="/">Back To Index </Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// ownProps is the props object that is geoing to this component. (this.props in component)
function mapStateToProps({ posts }, ownProps) {
  console.log("post in mapState", posts);
  return { post: posts[ownProps.match.params.id] }; //Grab the particular post from posts piece of state and set that as post property of this component
}

export default connect(
  mapStateToProps /*state*/,
  { fetchPost, deletePost } /*actions*/
)(PostShow);
