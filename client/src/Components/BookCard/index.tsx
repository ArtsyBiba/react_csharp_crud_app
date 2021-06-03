import { FC } from 'react';

import { Text, Wrapper, Button } from './styles';

type BookCardProps = {
    name: string,
    author: string,
    link: string,
}

export const BookCard: FC<BookCardProps> = ({ name, author, link }) => {
    
    return (
        <Wrapper>
            <Text>📖 {name} - {author}</Text>
            <Button>remove</Button>
        </Wrapper>
    )
}