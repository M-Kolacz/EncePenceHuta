import { Catering } from './Catering';
import { Charges } from './Charges';
import { Invite } from './Invite';
import { Layette } from './Layette';

export default [
    {
        children: <Invite />,
        id: 'invite',
    },
    {
        children: <Charges />,
        id: 'charges',
    },
    {
        children: <Layette />,
        id: 'layette',
    },
    {
        children: <Catering />,
        id: 'catering',
    },
];
