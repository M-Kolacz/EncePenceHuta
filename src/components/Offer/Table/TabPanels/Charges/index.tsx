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
            <Typography variant='body1'>
                0 zł z uwzględnieniem dotacji UMK i dofinansowaniem ZUS 1500zł bez limitu godzin.
            </Typography>
        </>
    );
};
