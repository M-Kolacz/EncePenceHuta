import { Link, Typography } from '@material-ui/core';

import useStyles from '../TabPanelsStyles';

export interface InviteProps {}

export const Invite: React.FC<InviteProps> = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant='h3' className={classes.Title}>
                Zapisy na rok 2020/2021
            </Typography>
            <Typography variant='body1'>
                Przyjmujemy dzieci przez cały rok (w zależności do ilości miejsc). W celu zapisu dziecka do naszego
                żłobka prosimy o wypełnienie i przesłanie do nas poniższych dokumentów:
            </Typography>

            <ul>
                <li>
                    <Typography variant='body1'>
                        <Link href='/' color='secondary'>
                            Pobierz kartę zgłoszenia dziecka
                        </Link>
                    </Typography>
                </li>
            </ul>
        </>
    );
};
