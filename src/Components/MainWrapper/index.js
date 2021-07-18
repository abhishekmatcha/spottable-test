import React from 'react';
import './index.scss';

const MainWrapper = ({heading, subHeading, cardHeading, children}) => {
    return (
        <div className='main-wrapper'>
            {heading && <div className='main-heading'>{heading}</div>}
            {subHeading && <div className='sub-heading'>{subHeading}</div>}
            <div className={`card-wrapper ${(heading || subHeading) ? 'add-margin' : ''}`}>
                {cardHeading && <div className='card-heading'>{cardHeading}</div>}
                {children}
            </div>
        </div>
    )
}

export default MainWrapper;
