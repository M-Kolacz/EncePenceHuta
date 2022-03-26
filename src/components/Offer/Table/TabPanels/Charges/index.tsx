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
                Opłata za żłobek w 2022 roku wynosi 1195 zł (kwotę pomniejszamy o dotację z Urzędu Miasta Krakowa i
                ewentualnie dofinansowanie do opieki w złobku w wysokości 400zł.)
            </Typography>
            <Typography variant='h3' component='h2' className={classes.Title}>
                Wysokość dotacji UMK (1,70zł do każdej godziny pobytu dziecka)
            </Typography>
            <ul>
                {charges.map((charge) => (
                    <li key={charge.month} style={{ listStyleImage: 'url(images/png/star1.png)', padding: '10px 0' }}>
                        <Typography variant='h5' style={{ fontSize: '30px' }}>
                            {charge.month}
                        </Typography>
                        <ul style={{ padding: '10px 0' }}>
                            <li style={{ listStyleImage: 'initial', padding: '5px 0' }}>
                                <Typography variant='body1'>{charge.main}</Typography>
                            </li>
                            <li style={{ listStyleImage: 'initial', padding: '5px 0' }}>
                                <Typography variant='body1'>{charge.secondary}</Typography>
                            </li>
                        </ul>
                    </li>
                ))}
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
