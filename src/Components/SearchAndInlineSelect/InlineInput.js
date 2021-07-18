import React from 'react';
import MainWrapper from '../MainWrapper';
import TagsInput from './TagsInput';
import { DEFAULT_TAGS } from './constants';
import './searchInline.scss';

const InlineInput = () => {
    const selectedTags = tags => {
        console.log(tags);
        //TODO: Handle your search logic here
    };

    return (
        <MainWrapper cardHeading={'School/College/University'}>
            <TagsInput selectedTags={selectedTags}  tags={DEFAULT_TAGS}/>
        </MainWrapper>
    )
}

export default InlineInput;
