import { useState, useEffect, FC } from 'react';
import axios from 'axios';

import { Wrapper } from './styles';

type Book = {
    id: string,
    name: string,
    author: string,
    link: string,
}

export const BooksRead: FC = () => {
    const [ books, setBooks ] = useState<Book[]>([]);

    useEffect(() => {
        try {
            axios.get('https://localhost:5001/api/books')
                .then(res => setBooks(res.data))
        } catch (err) {
            console.log(err.response.data.msg);
        }
    }, [])

    return (
        <Wrapper>
            <ul>
                {/* {
                    books.length && books.map((book) => (<li key={book.Id}>{book.Link}</li>))
                } */}
            </ul>
        </Wrapper>
    )
}

