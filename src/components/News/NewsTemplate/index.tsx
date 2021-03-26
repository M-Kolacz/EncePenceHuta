/* eslint-disable jsx-a11y/alt-text */
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import { Grid, Typography, TypographyProps } from '@material-ui/core';

import Hr from 'components/UIElements/Hr';

import useStyles from './NewsTemplateStyles';

export interface NewsTemplateProps {
    title: string;
}

export interface NewsParagraphProps extends TypographyProps {}

export const NewsTemplate: React.FC<NewsTemplateProps> = ({ title, children }) => {
    const classes = useStyles();
    return (
        <Grid item xs={10} md={8} className={classes.ContainerTitle} component='article'>
            <Typography variant='h3' className={classes.Title} component='h2'>
                {title}
            </Typography>
            {children}
            <Hr />
        </Grid>
    );
};

export const NewsParagraph: React.FC<NewsParagraphProps> = ({ children, ...props }) => {
    return (
        <Typography variant='body1' {...props}>
            {children}
        </Typography>
    );
};

export interface NewsImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {}

export const NewsImage: React.FC<NewsImageProps> = ({ className, ...props }) => {
    const classes = useStyles();
    return <img {...props} className={`${classes.Image} ${className}`} />;
};
