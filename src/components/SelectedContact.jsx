import { useState, useEffect } from 'react';
import ContactList from './ContactList'

export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState({});
    useEffect(() => {
        async function fetchingFunction() {
            try {
                if ({setSelectedContactId}) {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const result = await response.json()
                console.log(result);
                setContact(result);
            } else {
                ContactList();
            }
            } catch (error) {
                console.error(error);
            }
        }
        fetchingFunction();
    }, [])
    return (
        <div>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <button onClick = {() => {setSelectedContactId(null)}}>Back to List</button>
        </div>
    )
}

