import { FC } from 'react';
import axios from 'axios';

import { Text, Wrapper, Button } from './styles';

type BookCardProps = {
    name: string,
    author: string,
    link: string,
    id: string,
    reload: boolean,
    setReload(state: boolean): void,
}

export const BookCard: FC<BookCardProps> = ({ name, author, link, id, reload, setReload }) => {
    const handleRemoveButton = ( id: string ) => {
        try {
            axios.delete(`https://localhost:5001/api/books/${id}`)
                .then(() => setReload(!reload))
        } catch (err) {
            console.log(err.response.data.msg);
        }
    };
   
    return (
        <Wrapper>
            <Text>📖 {name} - {author}</Text>
            <Button onClick={() => handleRemoveButton(id)}>remove</Button>
        </Wrapper>
    )
}