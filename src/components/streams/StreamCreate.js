import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

  //to better understand object, remove destructuring and console log formProps
  renderInput({ input, label, meta }) {
    //console.log(formProps);

    // return <input onChange={formProps.input.onChange} value={formProps.input.value}/>
    // return <input {...formProps.input} />
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} /> {/* destructured formProps argument */}
        <div>{meta.error}</div>
      </div>
    )
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description"/>
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'StreamCreate',
  validate: validate
})(StreamCreate);
