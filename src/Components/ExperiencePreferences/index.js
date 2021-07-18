import React, { useState } from 'react'
import Tabs from '../Tabs/Tabs';
import Radiobutton from '../RadioButton';
import { Tab_CONFIG } from './constants';
import MainWrapper from '../MainWrapper';
import './index.scss';

const ExperiencePreferences = () => {
  const [tabData, setTabData] = useState(Tab_CONFIG);
  const [activeTab, setActiveTab] = useState(Tab_CONFIG[0].tabLabel);

  const handleItemsSelected = (e) => {
    const newData = tabData.map((eachData) => {
      if (eachData.tabLabel === activeTab) {
        eachData.selectedValue = e.target.value;
      }

      return eachData
    });

    setTabData(newData)
  }

  const getActiveItem = () => {
    const tabsData = tabData.find((eachItem) => eachItem.tabLabel === activeTab);
    const fields = tabsData.tabData.find((eachData)=> eachData.value === tabsData.selectedValue);
    return fields?.text || '' 
  }

  const handleTabClick = (selectedTab) => {
    setActiveTab(selectedTab);
  }

  return (
    <div className='experience-preferences-wrapper'>
      <MainWrapper
        heading={'EXPERIENCE PREFERENCES'}
        subHeading={'Select preferences you are looking for in a candidate'}
        cardHeading={'Previous job positions/levels held'}>
        <Tabs onTabClick={handleTabClick}>
          {
            tabData.map((eachConfig, i) => (
              <div key={i} label={eachConfig.tabLabel}>
                <Radiobutton config={eachConfig.tabData} onChange={handleItemsSelected} selectedValue={eachConfig.selectedValue} />
              </div>
            ))
          }
        </Tabs>
      </MainWrapper>
      <div className='text'>
        <b>Active Tab: </b>{activeTab} &emsp;&emsp;&emsp;&emsp; <b>Active Field: </b>{getActiveItem()}
      </div>
    </div>
  )
}

export default ExperiencePreferences;
