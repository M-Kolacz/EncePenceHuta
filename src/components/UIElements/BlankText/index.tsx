import { Typography, TypographyProps } from '@material-ui/core';

import useStyles from './BlankTextStyles';

export interface BlankTextProps extends Pick<TypographyProps, 'variant' | 'display'> {}

const BlankText: React.FC<BlankTextProps> = ({ children, ...props }) => {
    const classes = useStyles();
    return (
        <Typography {...props} aria-hidden={true} className={classes.BlankText}>
            {children}
        </Typography>
    );
};

export default BlankText;
