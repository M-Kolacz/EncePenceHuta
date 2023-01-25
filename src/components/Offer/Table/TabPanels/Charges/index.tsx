import { Typography } from '@material-ui/core';
import { charges } from '../../../../../shared/SSOT/ChargesData';
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
                Ok. 420/450 zł z uwzględnieniem dotacji UMK i dofinansowaniem ZUS 400zł bez limitu godzin.
            </Typography>
        </>
    );
};
