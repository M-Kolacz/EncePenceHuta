import { Invite } from './Invite';
import { Charges } from './Charges';
import { Layette } from './Layette';
import { Catering } from './Catering';

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
