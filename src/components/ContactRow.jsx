import React from "react";
import { useState, useEffect } from 'react';

export default function ContactRow({ setSelectedContactid, contact }) {
    return (
        <tr
        onClick = {() => {
            setSelectedContactid(contact.id);
        }}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );
}