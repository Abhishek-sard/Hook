import { useState } from "react";


export default function StateStructure(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    function handleFirstNameChange(e){
        setFirstName(e.target.value);
        setFullName(e.target.value + ' ' + lastName);
    }

    function handleLastNameChange(e){
        setLastName(e.target.value);
        setFullName(firstName + ' ' + e.target.value);
    }

    return(
        <>
        <h2>Lets check you in</h2>
        <label>
            first name: {' '}
            <input value={firstName} onChange={handleFirstNameChange} />
        </label>

        <label>
            last name: {' '}
            <input value={lastName} onChange={handleLastNameChange} />
        </label>
        <p>Your ticket will be issued to: <b>{fullName}</b></p>
        </>
    );
}