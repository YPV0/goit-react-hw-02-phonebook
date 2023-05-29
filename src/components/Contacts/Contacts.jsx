import { Component } from 'react';

export class Contacts extends Component {
  render() {
    const { contacts, onRemoveContact } = this.props;

    return (
      <div>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => onRemoveContact(contact.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
