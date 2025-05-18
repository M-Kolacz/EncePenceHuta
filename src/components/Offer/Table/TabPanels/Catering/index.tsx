import { Typography } from '@material-ui/core';
import useStyles from '../TabPanelsStyles';

export interface CateringProps {}

export const Catering: React.FC<CateringProps> = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant='h3' component='h2' className={classes.Title}>
                Stawka żywieniowa 19,00 zł/dzień w tym 4 posiłki:
            </Typography>
            <ul>
                <li>
                    <Typography variant='body1'>Śniadanie 2,50 zł</Typography>
                </li>
                <li>
                    <Typography variant='body1'>2-gie Śniadanie 1,50 zł</Typography>
                </li>
                <li>
                    <Typography variant='body1'>Obiad (Zupa + Drugie danie) 13,00 zł</Typography>
                </li>
                <li>
                    <Typography variant='body1'>Podwieczorek 2,00 zł</Typography>
                </li>
            </ul>
            <Typography variant='body1'>
                Catering będzie dostarczany przez firmę „Be Healthy” - zdrowa kuchnia dla dzieci.
            </Typography>
        </>
    );
};
