import { Typography } from '@material-ui/core';

import useStyles from '../TabPanelsStyles';

export interface ChargesProps {}

export const Charges: React.FC<ChargesProps> = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant='h3' component='h2' className={classes.Title}>
                Abonament
            </Typography>
            <ul>
                <li>
                    <Typography variant='body1'> do 10 godzin dziennie - ok. 500 zł</Typography>
                </li>
                <li>
                    <Typography variant='body1'> do 5 godzin dziennie - ok. 400 zł</Typography>
                </li>
            </ul>
            <Typography variant='h3' component='h2' className={classes.Title}>
                Dane do przelewu
            </Typography>
            <Typography variant='body1'>
                Nr rachunku : <b>23 1090 2590 0000 0001 4380 5090</b>
            </Typography>
        </>
    );
};
