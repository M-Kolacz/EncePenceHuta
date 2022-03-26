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
                    <Typography variant='body1'>
                        Uniwersalne ubranko na zmianę: 
                        Mamo powinnaś zostawić w żłobku dwa komplety ubranka dla dziecka, na wypadek gdyby ubrudziło się.
                    </Typography>
                </li>
                <li>
                    <Typography variant='body1'>
                        Buciki: 
                        Jeśli Twój maluch już chodzi, potrzebne mu będą także buciki na zmianę. Zwróć uwagę, aby ich podeszwa 
                        nie była śliska, co zmniejszy ryzyko bolesnych upadków. Jeśli chcesz aby dziecko chodziło jedynie w skarpetkach dla Nas nie ma żadnego problemu.
                    </Typography>
                </li>
                <li>
                    <Typography variant='body1'>
                        Poduszka i kołderka: 
                        Pamiętaj o poduszce, kołderce lub kocyku, poszewkach na nie oraz prześcieradełku (najlepiej z gumką).
                    </Typography>
                </li>
                <li>
                    <Typography variant='body1'>
                        Pieluchy: 
                        Rodzice powinni dostarczyć do żłobka zapas pieluch dla dziecka oraz chusteczki nawilżające.
                    </Typography>
                </li>
                <li>
                    <Typography variant='body1'>
                        Przybory do mycia zębów: 
                        Zaopatrz maluszka także w zestaw do mycia zębów: szczoteczkę, pastę.
                    </Typography>
                </li>
                <li>
                    <Typography variant='body1'>
                        2 butelki: 
                        Zostaw w żłobku podpisane dwie butelki, jedną na mleko (jeśli dziecko pije mleko), 
                        drugą do picia np. herbaty. Jeśli dziecko nie pije już z butelki, możesz kupić dla niego kubeczek np. niekapek.
                    </Typography>
                </li>
                <li>
                    <Typography variant='body1'>
                        Smoczek: 
                        Smoczek w żłobku pomaga uspokoić i uśpić dziecko. Dotyczy to zwłaszcza młodszych maluchów.
                    </Typography>
                </li>
                <li>
                    <Typography variant='body1'>
                        Przytulanka: 
                        Możesz zostawić w żłobku ulubioną przytulankę dziecka.
                    </Typography>
                </li>
            </ul>
            <Typography variant='body1'>Wszystkie rzeczy dziecka powinny być podpisane.</Typography>
        </>
    );
};
