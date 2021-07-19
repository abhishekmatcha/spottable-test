import React, { useState } from 'react';
import DropDown from '../Dropdown';
import UserCard from '../UserCard';
import MainWrapper from '../MainWrapper';
import './access.scss';
import { DEFULT_USER_CONFIG } from './constants';

const AccessAddition = () => {
    const [userData, setUserData] = useState(DEFULT_USER_CONFIG);
    const [newUserName, setNewUserName] = useState('');
    const [newUserAccess, setNewUserAccess] = useState('View Access');
    const [filteredData, setFilteredData] = useState([]);
    const [applyFilters, setApplyFilter] = useState(false)

    const handleSelected = (accessType) => {
        setNewUserAccess(accessType)
    }

    const handleUserAddition = () => {
        setApplyFilter(false);
        const newUserData = [
            ...userData,
            {
                id: new Date(), //TODO: we can add any random number for Id
                name: newUserName,
                accessType: newUserAccess,
                role: '',
                email: newUserName //TODO: For now just added the name itself here we can change if needed
            }
        ];

        setUserData(newUserData);
        setNewUserName('');
    }

    const handleUserDeletion = (id) => {
        const newArray = userData.filter((item) => item.id !== id)

        setApplyFilter(false);
        setUserData(newArray);
        setNewUserName('');
    }

    const handleOnChange = (e) => {
        const searchString = e.target.value;
        setNewUserName(searchString);
        
        setApplyFilter(true);

        //TODO: we can use Debounce technique to reduce the filter calls and then update the data.
        const filteredCharacters = userData.filter((eachData) => {
            return eachData.name.toLowerCase().includes(searchString.toLowerCase()) || eachData.email.toLowerCase().includes(searchString.toLowerCase());
        })

        setFilteredData(filteredCharacters);
    }

    return (
        <MainWrapper>
            <div className='access-wrapper'>
                <input
                    className='input'
                    type="text"
                    // onKeyUp={event => event.key == enter} //TODO: We can also add things on Key up also if needed and can keep add functionality
                    value={newUserName}
                    onChange={handleOnChange}
                    placeholder="Add by name or email"
                />
                <DropDown handleSelected={handleSelected} />
                <button className='add-btn' onClick={handleUserAddition}>Add People</button>
            </div>
            <div className='user-data-render'>
                {
                    userData.length ? [applyFilters ? [...filteredData] : [...userData]][0].map(({ id, name, role, email, accessType }) => (
                        <UserCard key={id} id={id} name={name} emailId={email} role={role} accessType={accessType} handleAccess={handleSelected} handleDelete={handleUserDeletion} />
                    )) : null
                }
            </div>
        </MainWrapper>
    )
}

export default AccessAddition;
