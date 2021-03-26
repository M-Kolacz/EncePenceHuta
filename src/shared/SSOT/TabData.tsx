import { Bookmark, Payment, LocalMall, Restaurant, ContactPhone } from '@material-ui/icons';

export default [
    {
        label: 'Zapisy',
        icon: <Bookmark />,
        id: `scrollable-force-tab-0`,
        'aria-controls': `scrollable-force-tabpanel-0`,
    },
    {
        label: 'Opłaty',
        icon: <Payment />,
        id: `scrollable-force-tab-1`,
        'aria-controls': `scrollable-force-tabpanel-1`,
    },
    {
        label: 'Wyprawka',
        icon: <LocalMall />,
        id: `scrollable-force-tab-2`,
        'aria-controls': `scrollable-force-tabpanel-2`,
    },
    {
        label: 'Wyżywienie',
        icon: <Restaurant />,
        id: `scrollable-force-tab-3`,
        'aria-controls': `scrollable-force-tabpanel-3`,
    },
];
