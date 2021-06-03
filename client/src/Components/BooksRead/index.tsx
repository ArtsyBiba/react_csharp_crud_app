import { useState, useEffect, FC } from 'react';
import axios from 'axios';

import { Wrapper } from './styles';

type Book = {
    Id: string,
    Name: string,
    Author: string,
    Link: string,
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
                {
                    books.length && books.map((book) => (<li key={book.Id}>{book.Name}</li>))
                }
            </ul>
        </Wrapper>
    )
}

