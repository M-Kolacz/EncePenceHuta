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
            <Typography variant='body1'>Od 01.2024r ok. 750zł z dotacją UMK i dofinansowaniem ZUS.</Typography>
        </>
    );
};
