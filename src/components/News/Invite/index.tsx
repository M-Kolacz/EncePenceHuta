import { Link } from '@material-ui/core';

import { NewsTemplate, NewsParagraph } from '../NewsTemplate';

export interface InviteProps {}

export const Invite: React.FC<InviteProps> = () => {
    return (
        <NewsTemplate title='Zapisy na rok 2020/2021'>
            <NewsParagraph>
                Zapisy na rok 2020/2021 zostały już rozpoczęte. Nasz żłobek znajduje się na Osiedlu Centrum E14 lokal 3.
                Zadzwoń i zapytaj o miejsce pod nr tel. 739 048 513
            </NewsParagraph>
            <NewsParagraph>
                Zapraszamy na nasz{' '}
                <Link href='https://www.facebook.com/encepencehuta' color='secondary'>
                    fanpage
                </Link>
                .
            </NewsParagraph>
        </NewsTemplate>
    );
};
