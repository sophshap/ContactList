import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList';
import ContactRow from './components/ContactRow';
import SelectedContact from './components/SelectedContact';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  console.log(selectedContactId);
  return (
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}  />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}

// create a state variable to store the id of selected contact
// const [selectedContact, setSelectedContact] = useState(???)

