import axios from 'axios';
import styled from 'styled-components';

import { useForm, SubmitHandler } from 'react-hook-form';

type Book = {
    name: string,
    author: string,
}

export const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Book>();
    
    const onSubmit: SubmitHandler<Book> = (data) => {
        try {
            axios.post('https://localhost:5001/api/books', data);
        } catch (err) {
            console.log(err.response.data.msg);
        }
    };

    return (
        <Dashboard>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='name'>Book Name</label>
                    <input {...register('name', { required: true })} type='text'/>
                    {
                        errors.name && <div className='error'>Enter the book name</div>
                    }
                </div>
                <div>
                    <label htmlFor='author'>Author</label>
                    <input {...register('author', { required: true })} type='text'/>
                    {
                        errors.author && <div className='error'>Enter the author name</div>
                    }
                </div>
                <button type='submit'>Add Book</button>
            </form>
        </Dashboard>
    )
}

const Dashboard = styled.div`
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 80%;
    background-color: white;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,0.1);
    border-radius: 4px;
`;