import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
  renderField(field) {
    // filed is passed by Redux form
    // console.log("FIELD", field);
    const { meta } = field;
    const className = `form-group ${
      meta.touched && field.meta.error ? "has-danger" : ""
    }`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} // get all properties of field.input object and spread them as properties in this input
          //onChange={filed.input.onChange} etc
        />

        <div className="text-help">
          {meta.touched
            ? meta.error
            : "" /*field.meta.error will contain the error we set in validate function*/}
        </div>
      </div>
    );
  }
  onSubmit(values) {
    this.props.createPost(values);
  }
  render() {
    console.log(this.props);
    if (typeof this.props.handleSubmit == "undefined")
      return <div>props null</div>;
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={
            this.renderField
          } /*component property is used to define how this field looks like */
        />
        <Field
          label="Categories"
          name="categories" // the name of the state field which is handled by this field
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = "Enter a Title";
  }
  if (!values.categories) {
    errors.categories = "Enter a Category";
  }
  if (!values.content) {
    errors.content = "Enter Content";
  }
  return errors;
}

export default reduxForm({
  validate, // es 6; same as validate: validate
  form: "PostsNewForm" // name of the Form
})(connect(null, { createPost })(PostsNew)); //reduxForm is like Connect helper
