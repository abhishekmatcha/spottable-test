import React from 'react';
import ReactDOM from 'react-dom';
import ExperiencePreferences from './Components/ExperiencePreferences';
import InlineInput from './Components/SearchAndInlineSelect/InlineInput';
import AccessAddition from './Components/AccessAddition';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ExperiencePreferences />
    <InlineInput />
    <AccessAddition />
  </React.StrictMode>,
  document.getElementById('root')
);
