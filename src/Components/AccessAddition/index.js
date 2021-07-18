import React, { useState } from 'react';
import DropDown from '../Dropdown';
import UserCard from '../UserCard';
import MainWrapper from '../MainWrapper';
import './access.scss';

const DefaultUserConfig = [
    {
        id: 1,
        name: 'Matcha Sesha Abhishek',
        role: 'Front end',
        email: 'seshaabhishek@gmail.com',
        accessType: 'Admin Role'
    },
    {
        id: 2,
        name: 'Sesha Abhishek',
        role: 'Back end',
        email: 'seshaabhishek@gmail.com',
        accessType: 'View Access'
    }
]

const AccessAddition = (accessType) => {
    const [userData, setUserData] = useState(DefaultUserConfig);
    const [newUserName, setNewUserName] = useState('');
    const [newUserAccess, setNewUserAccess] = useState('view')

    const handleSelected = (accessType) => {
        console.log('------Selected Access======', accessType);
        //TODO: Update the access type from here
    }

    const handleUserAddition = () => {
        const newUserData = [
            ...userData,
            {
                id: new Date(),//TODO: we can add any random number
                name: newUserName,
                accessType: newUserAccess
            }
        ];

        setUserData(newUserData);
        setNewUserName('');
    }

    const handleUserDeletion = (id) => {
        const newArray = userData.filter((item) => item.id !== id)

        setUserData(newArray);
        setNewUserName('');
    }

    const handleOnChange = (e) => {
        const searchString = e.target.value;
        setNewUserName(searchString);

        //TODO: As a technique to reduce the filter calls and then update the data.
        const filteredCharacters = DefaultUserConfig.filter((eachData) => {
            return eachData.name.toLowerCase().includes(searchString.toLowerCase()) || eachData.email.toLowerCase().includes(searchString.toLowerCase());
        })
        setUserData(filteredCharacters);
    }



    return (
        <MainWrapper>
            <div className='access-wrapper'>
                <input
                    className='input'
                    type="text"
                    // onKeyUp={event => event.key == enter} 
                    value={newUserName}
                    onChange={handleOnChange}
                    placeholder="Add by name or email"
                />
                <DropDown handleSelected={handleSelected} />
                <button className='add-btn' onClick={handleUserAddition}>Add People</button>
            </div>
            <div className='user-data-render'>
                {
                    userData.length ? userData.map(({ id, name, role, email, accessType }) => (
                        <UserCard key={id} id={id} name={name} emailId={email} role={role} accessType={accessType} handleAccess={handleSelected} handleDelete={handleUserDeletion} />
                    )) : null
                }
            </div>
        </MainWrapper>
    )
}

export default AccessAddition;
