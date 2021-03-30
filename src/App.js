import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import ContactItem from './components/ContactItem';
import contactsOperations from './redux/contacts/contact-operations';
import API from '../src/Api';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos();
    API.fetch();
    API.fetch2().then(data => console.log(data));
  }
  render() {
    return (
      <div className="App">
        <Container>
          <ContactForm title="Phonebook" />
          <ContactList title="Contacts">
            <Filter />
            <ContactItem />
          </ContactList>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
