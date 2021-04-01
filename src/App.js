import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import ContactItem from './components/ContactItem';
import Loader from './components/Loader';
import { operations, selectors } from './redux/contacts';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div className="App">
        <Container>
          <ContactForm title="Phonebook" />
          <ContactList title="Contacts">
            <div className="filter_container">
              <Filter />
              {this.props.isLoading && <Loader />}
            </div>
            <ContactItem />
          </ContactList>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: selectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
