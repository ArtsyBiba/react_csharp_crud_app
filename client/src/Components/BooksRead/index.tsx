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
    const [ reload, setReload ] = useState(true);

    useEffect(() => {
        try {
            axios.get('https://localhost:5001/api/books')
                .then(res => setBooks(res.data))
        } catch (err) {
            console.log(err.response.data.msg);
        }
    }, [reload]);

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
                            reload={reload} 
                            setReload={setReload}
                        />)
                    )
                }
            </ul>
        </Wrapper>
    )
}

