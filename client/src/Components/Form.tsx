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
            <HeaderWrapper>
                <Subheader onClick={() => {}}>Add a Book</Subheader>
                <Subheader onClick={() => {}}>What I've Read</Subheader>
                <Subheader onClick={() => {}}>Books To Read</Subheader>
            </HeaderWrapper>
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
    height: 90vh;
    width: 100%;
    margin: auto;
    margin-top: 0.5em;
`;

const HeaderWrapper = styled.div`
    display: flex;
    height: 8vh;
    align-content: center;
    justify-content: space-around;
`; 

const Subheader = styled.div`
    display: flex;
    font-weight: 600;
    font-size: 1em;
    justify-content: center;
    align-items: center;
    line-height: 8vh;
    text-transform: uppercase;
    width: 33%;
    cursor: pointer;

    &:hover {
        border-bottom: 4px solid rgba(245,60,47,0.85);
        transition: all 0.3s ease 0s;
    }
`;