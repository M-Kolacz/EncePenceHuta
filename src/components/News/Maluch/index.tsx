import { NewsImage, NewsParagraph, NewsTemplate } from '../NewsTemplate';

import useStyles from './MaluchStyles';

export interface MaluchProps {}

export const Maluch: React.FC<MaluchProps> = () => {
    const classes = useStyles();
    return (
        <NewsTemplate title='Program MALUCH+'>
            <NewsImage src='images/jpg/maluch.jpg' alt='Logo programu Maluch+' className={classes.Image} />
            <NewsParagraph>
                Miesięczne dofinansowanie na funkcjonowanie jednego miejsca opieki z Programu Maluch + 2021 wynosi 80 zł.
            </NewsParagraph>
        </NewsTemplate>
    );
};
