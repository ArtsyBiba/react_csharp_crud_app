import { useState, useEffect, FC } from 'react';
import axios from 'axios';

import { Wrapper } from './styles';
import { BookCard } from '../BookCard';

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
    }, []);

    const handleRemoveButton = ( id: string ) => {
        try {
            axios.delete(`https://localhost:5001/api/books/${id}`)
        } catch (err) {
            console.log(err.response.data.msg);
        }
    };

    return (
        <Wrapper>
            <ul>
                {
                    books.length && books.map((book) => 
                        (<BookCard 
                            key={book.Id} 
                            id={book.Id}
                            name={book.Name} 
                            author={book.Author} 
                            link={book.Link}
                            handleRemoveButton={handleRemoveButton} 
                        />)
                    )
                }
            </ul>
        </Wrapper>
    )
}

