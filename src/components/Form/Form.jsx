import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { FormContainer, InputField, SubmitButton } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  formRef = createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
    this.formRef.current.reset();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit} ref={this.formRef}>
        <h1>Phonebook</h1>
        <p>Name</p>
        <InputField
          type="text"
          name="name"
          onChange={this.handleChange}
          pattern="^[a-zA-Z\u0430-\u044F\u0410-\u042F]+(([' -][a-zA-Z\u0430-\u044F\u0410-\u042F ])?[a-zA-Z\u0430-\u044F\u0410-\u042F]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p>Number</p>
        <InputField
          type="tel"
          name="number"
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <SubmitButton type="submit">Add contact</SubmitButton>
      </FormContainer>
    );
  }
}
Form.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
