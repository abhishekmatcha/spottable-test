export const RADIO_CONFIG_INDIVIDUAL = [
    {
        value: 'all',
        text: 'Analyst'
    },
    {
        disabled: false,
        value: 'important',
        text: 'Senior Analyst'
    },
    {
        value: 'none',
        text: 'Principal'
    },
    {
        value: 'no',
        text: 'CXO/Founder Level'
    }
];

export const RADIO_CONFIG_LEAD = [
    {
        value: 'all',
        text: 'Group of 3 people'
    },
    {
        disabled: false,
        value: 'important',
        text: 'An Organization'
    },
    {
        value: 'none',
        text: 'Individual'
    },
    {
        value: 'no',
        text: 'CXO/Founder Level'
    }
];

export const Tab_CONFIG = [
    {
        tabLabel: 'Individual Contributor',
        tabData: [...RADIO_CONFIG_INDIVIDUAL],
        selectedValue: ''
    },
    {
        tabLabel: 'PeopleLead',
        tabData: [...RADIO_CONFIG_LEAD],
        selectedValue: ''
    }
]