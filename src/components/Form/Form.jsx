import { Component, createRef } from 'react';
export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  formRef = createRef();

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
    this.formRef.current.reset();
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} ref={this.formRef}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          onChange={this.handleInputChange}
          pattern="^[a-zA-Z\u0430-\u044F\u0410-\u042F]+(([' -][a-zA-Z\u0430-\u044F\u0410-\u042F ])?[a-zA-Z\u0430-\u044F\u0410-\u042F]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          onChange={this.handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
