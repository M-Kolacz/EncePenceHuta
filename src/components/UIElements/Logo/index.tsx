import { Box, Typography } from '@material-ui/core';

import useStyles from './LogoStyles';

export interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
    const classes = useStyles();
    return (
        <Box className={classes.LogoContainer}>
            <a href='/' className={classes.LogoLink}>
                <Box>
                    <img src='images/svg/rainbow.svg' alt='Rainbow' className={classes.LogoImg} />
                    <Typography variant='h3' className={classes.LogoTitle} component='h1'>
                        Ence Pence
                    </Typography>
                    <Typography variant='h4' component='h2'>
                        Żłobek Nowa Huta
                    </Typography>
                </Box>
            </a>
        </Box>
    );
};

export default Logo;
