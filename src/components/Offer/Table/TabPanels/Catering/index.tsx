import { Typography } from '@material-ui/core';

import useStyles from '../TabPanelsStyles';

export interface CateringProps {}

export const Catering: React.FC<CateringProps> = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant='h3' component='h2' className={classes.Title}>
                Wyżywienie
            </Typography>
            <Typography variant='body1'>
                Catering będzie dostarczany przez firmę „Zdrowy Catering”, która ma doświadczenie w dostarczaniu pysznych i zdrowych posiłków do żłobków i przedszkoli. 
            </Typography>
        </>
    );
};
