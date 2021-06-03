import { FC } from 'react';

import { Text, Wrapper, Button } from './styles';

type BookCardProps = {
    name: string,
    author: string,
    link: string,
    id: string,
    handleRemoveButton(key: string): void,
}

export const BookCard: FC<BookCardProps> = ({ name, author, link, id, handleRemoveButton }) => {
    return (
        <Wrapper>
            <Text>📖 {name} - {author}</Text>
            <Button onClick={() => handleRemoveButton(id)}>remove</Button>
        </Wrapper>
    )
}