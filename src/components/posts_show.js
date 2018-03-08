import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params; // match property is passed by react router. parms will have all the parameters of the url
    this.props.fetchPost(id);
  }
  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// ownProps is the props object that is geoing to this component. (this.props in component)
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }; //Grab the particular post from post piece of state and set that as post property of this component
}

export default connect(mapStateToProps /*state*/, { fetchPost } /*actions*/)(
  PostShow
);
