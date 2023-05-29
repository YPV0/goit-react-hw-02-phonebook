import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const duplicate = this.state.contacts.find(
      contact => contact.name === name
    );

    if (!name.trim() || !number.trim()) {
      alert('Both fields are required.');
      return;
    }

    if (duplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase()) ||
        contact.number.includes(this.state.filter)
    );

    return (
      <section>
        <div>
          <h1>Phonebook</h1>
          <Form onAddContact={this.addContact}></Form>
        </div>
        <div>
          <Filter onFilterChange={this.handleFilterChange}></Filter>
          <Contacts
            contacts={filteredContacts}
            onRemoveContact={this.removeContact}
          ></Contacts>
        </div>
      </section>
    );
  }
}
