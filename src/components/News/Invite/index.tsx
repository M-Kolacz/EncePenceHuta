import { Grid, Typography, Link } from '@material-ui/core';

import useStyles from './InviteStyles';

export interface InviteProps {}

export const Invite: React.FC<InviteProps> = () => {
    const classes = useStyles();
    return (
        <Grid item xs={10} md={8} className={classes.InviteTitle}>
            <Typography variant='h3' style={{ textAlign: 'center' }}>
                Zapisy na rok 2020/2021
            </Typography>
            <Typography variant='body1'>
                Zapisy na rok 2020/2021 zostały już rozpoczęte. Nasz żłobek znajduje się na Osiedlu Centrum E14 lokal 3.
                Zadzwoń i zapytaj o miejsce pod nr tel. 739 048 513
            </Typography>
            <Typography variant='body1'>
                Zapraszamy na nasz{' '}
                <Link href='https://www.facebook.com/encepencehuta' color='secondary'>
                    fanpage
                </Link>
                .
            </Typography>
        </Grid>
    );
};
