import React, { Component } from 'react';

import { PhoneBook } from './phoneBook/PhoneBook';
import { ContactsList } from './contactsList/ContactsList';
import { nanoid } from 'nanoid';
import { SearchFilter } from './searchFilter/SearchFilter';
import { Section } from './section/Section';
import styles from './App.module.css'

export const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  addNewContact = ({ name, number }) => {
    const { contacts } = this.state;

    if (contacts.find(cont => cont.name === name)){
      alert(`${name} is already in contacts`)
    } else {
      this.setState({
        contacts: [...contacts, { name, number, id: nanoid() }],
      });
    }
  };

  searchByName = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  viewContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(cont => cont.name.toLowerCase().includes(filter));
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(cont => cont.id !== id),
    }));
  };

  render() {
    const { wrapper } = styles
    return (
      <div className={wrapper}>
        <h1 style={{ textAlign: 'center' }}>React homework 2 phonebook</h1>
        <Section title='Phonebook'>
          <PhoneBook newContact={this.addNewContact} />
        </Section>
          
        <Section title='Contacts'>
          <SearchFilter searchByName={this.searchByName} />
          <ContactsList
            contacts={this.viewContacts()}
            deleteItem={this.deleteContact}
          />
        </Section>       
      </div>
    );
  }
}
