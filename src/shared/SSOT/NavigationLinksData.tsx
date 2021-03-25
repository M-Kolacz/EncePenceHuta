import AddAlertIcon from '@material-ui/icons/AddAlert';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const NavigationLinks = [
    {
        title: 'Aktualności',
        path: '/aktualnosci',
        icon: <AddAlertIcon />,
    },
    {
        title: 'Oferta',
        path: '/oferta',
        icon: <AssignmentIndIcon />,
    },
    {
        title: 'Kontakt',
        path: '/kontakt',
        icon: <ContactMailIcon />,
    },
];

export default NavigationLinks;
