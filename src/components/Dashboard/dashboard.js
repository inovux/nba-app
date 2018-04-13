import React, { Component } from 'react';
import FormField from '../widgets/FormFields/formFields';
import styles from './dashboard.css';

class Dashboard extends Component {

  state = {
    postError: '',
    loading: false,
    formData: {
      author: {
        element: 'input',
        value: '',
        config: {
          name: 'author_input',
          type: 'author',
          placeholder: 'Enter your name'
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      title: {
        element: 'input',
        value: '',
        config: {
          name: 'title_input',
          type: 'title',
          placeholder: 'Enter the title'
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
    }
  }

  updateForm = (element) => {

    const newFormdata = {
      ...this.state.formData
    }

    const newElement = {
      ...newFormdata[element.id]
    }

    newElement.value = element.event.target.value;

    if(element.blur) {
      let validData = this.validate(newElement);
      newElement.valid = validData[0];
      newElement.validationMessage = validData[1];
    }

    newElement.touched = element.blur;
    newFormdata[element.id] = newElement;

    this.setState({
      formData: newFormdata
    });

  }

  validate = (element) => {

    let error = [true, ''];

    if(element.validation.required) {

      const valid = element.value.trim() !== '';
      const message = `${!valid ? 'This field is required' : ''}`;
      error = !valid ? [valid, message] : error;

    }

    return error;

  }

  submitButton = () => (
    this.state.loading ?
      'loading...'
    :
      <div>
        <button type="submit"> Add Post </button>
      </div>
  )

  submitForm = (event) => {

    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for(let key in this.state.formData) {

      dataToSubmit[key] = this.state.formData[key].value;

    }

    for(let key in this.state.formData) {

      formIsValid = this.state.formData[key].valid && formIsValid;

    }

    if(formIsValid) {

    } else {
      this.setState({
        postError: 'Something went wrong'
      });
    }

  }

  showError = () => (
    this.state.postError !== '' ?
      <div className={styles.error}>{this.state.postError}</div>
    : ''
  )

  render() {
    return (

      <div className={styles.postContainer}>
        <form onSubmit={this.submitForm}>
          <h2>Add Post</h2>

          <FormField
            id="author"
            formData={this.state.formData.author}
            change={(element) => this.updateForm(element)}
          />

          <FormField
            id="title"
            formData={this.state.formData.title}
            change={(element) => this.updateForm(element)}
          />

          {this.submitButton()}
          {this.showError()}
        </form>
      </div>

    );
  }

}

export default Dashboard;
