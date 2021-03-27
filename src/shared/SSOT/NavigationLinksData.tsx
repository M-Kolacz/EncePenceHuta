import AddAlertIcon from '@material-ui/icons/AddAlert';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const NavigationLinks = [
    {
        title: 'Aktualności',
        path: '/aktualnosci.html',
        icon: <AddAlertIcon />,
    },
    {
        title: 'Oferta',
        path: '/oferta.html',
        icon: <AssignmentIndIcon />,
    },
    {
        title: 'Kontakt',
        path: '/kontakt.html',
        icon: <ContactMailIcon />,
    },
];

export default NavigationLinks;
