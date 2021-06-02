import { useState, useEffect } from 'react';
import axios from 'axios';

import { Wrapper } from './styles';

type Book = {
    id: string,
    name: string,
    author: string,
    link: string,
}

export const BooksRead = () => {
    const [ books, setBooks ] = useState([]);

    useEffect(() => {
        try {
            axios.get('https://localhost:5001/api/books')
                .then(res => setBooks(res.data))
        } catch (err) {
            console.log(err.response.data.msg);
        }
    }, [])
console.log(books)
    return (
        <Wrapper>
            <ul>
                {
                    books.length && books.map((book, index) => (<li key={index}>{book.Link}</li>))
                }
            </ul>
        </Wrapper>
    )
}

