import React, { useRef, useState } from "react";
import "./index.scss";
import { useDetectOutsideClick } from "./DetectOutsideClick";
import expandIcon from './expand.png'

const dropDownConfig = [
    {
        item: 'Admin Role',
        text: 'Give full access to the job and candidates',
        value: 'admin'
    },
    {
        item: 'Edit Access',
        text: 'Give access to edit the job and view the candidates',
        value: 'edit'
    },
    {
        item: 'View Access',
        text: 'Give access to only view the job and add comments',
        value: 'view'
    }
];

const DropDown = ({handleSelected, currentAccess}) => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    const [accessType, setAccessType] = useState(currentAccess || 'View Access');


    const handleItemSelected = (accesssValue) => {
        setAccessType(accesssValue)
        handleSelected(accesssValue);
        setIsActive(false)
    }

    return (
        <div className='user-dropdown'>
            <div className="menu-container">
                <button onClick={onClick} className="menu-trigger">
                <span>
                    {accessType}
                    <img src={expandIcon} alt='expand'/>
                </span>
                </button>
                <nav
                    ref={dropdownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}
                >
                    <ul>
                        {
                            dropDownConfig.map((eachItem, i)=>(
                                <li key={i} onClick={() => handleItemSelected(eachItem.item)}>
                                    <span className='item-heading'>{eachItem.item}</span>
                                    <div className='item-sub-heading'>{eachItem.text}</div>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default DropDown;