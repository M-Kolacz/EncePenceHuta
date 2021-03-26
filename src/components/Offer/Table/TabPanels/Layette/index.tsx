import { Typography } from '@material-ui/core';

import useStyles from '../TabPanelsStyles';

export interface LayetteProps {}

export const Layette: React.FC<LayetteProps> = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant='h3' component='h2' className={classes.Title}>
                W skład wyprawki wchodzi
            </Typography>
            <ul>
                <li>
                    <Typography variant='body1'>środki higieny osobistej - pampersy, chusteczki nawilżające</Typography>
                </li>
                <li>
                    <Typography variant='body1'>
                        kubek / butelka - jeżeli dziecko jeszcze nie pije z normalnego kubka
                    </Typography>
                </li>
                <li>
                    <Typography variant='body1'>
                        obuwie na zmianę na rzepę lub zatrzask jeżeli dziecko już chodzi bądź skarpetki antypoślizgowe
                    </Typography>
                </li>
                <li>
                    <Typography variant='body1'>ubranka na zmianę</Typography>
                </li>
                <li>
                    <Typography variant='body1'>komplet pościeli, kocyk / kołderkę, poduszkę, prześcieradło</Typography>
                </li>
                <li>
                    <Typography variant='body1'>smoczek - jeżeli dziecko używa</Typography>
                </li>
            </ul>
            <Typography variant='body1'>Wszystkie rzeczy dziecka powinny być podpisane.</Typography>
        </>
    );
};
