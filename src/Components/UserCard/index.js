import React from 'react'
import DropDown from '../Dropdown';
import deleteIcon from './delete.png';
import './index.scss';

const UserCard = ({ id, name, emailId, role, accessType, handleAccess, handleDelete }) => {

    const getInitials = (string) => {
        let names = string.split(' '),
            initials = names[0].substring(0, 1).toUpperCase();

        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
    };


    return (
        <div className='user-wrapper'>
            <div className='initials'>{getInitials(name)}</div>
            <div className='user-data'>
                <div className='heading'>{name}</div>
                <div className='user-sub-heading'>
                    <div className='role'>{role}</div>
                    <div className='mail-id'>{emailId}</div>
                </div>
            </div>
            <DropDown handleSelected={handleAccess} currentAccess={accessType}/>
            <img src={deleteIcon} alt='delete' onClick={() => handleDelete(id)} />
        </div>
    )
}

export default UserCard
