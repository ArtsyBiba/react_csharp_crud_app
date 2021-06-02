import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';

import { FormWrapper, InputBox, InputTitle, InputContent, Input, Label, Underline, Button } from './styles';

type Book = {
    name: string,
    author: string,
    category: string,
    link: string,
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
            <FormWrapper onSubmit={handleSubmit(onSubmit)}> 
                <InputBox>
                    <InputTitle>Book Name</InputTitle>
                    <InputContent>
                        <Input {...register('name', { required: true })} type='text'/>
                        <Label htmlFor='name'>Book's title</Label>
                        <Underline></Underline>
                    </InputContent>
                    {
                        errors.name && <div className='error'>Enter book name</div>
                    }
                </InputBox>
                <InputBox>
                    <InputTitle>Author</InputTitle>
                    <InputContent>
                        <Input {...register('author', { required: true })} type='text'/>
                        <Label htmlFor='author'>Author's name</Label>
                        <Underline></Underline>
                    </InputContent>
                    {
                        errors.author && <div className='error'>Enter author name</div>
                    }
                </InputBox>
                <InputBox>
                    <InputTitle>Link</InputTitle>
                    <InputContent>
                        <Input {...register('link', { required: true })} type='text'/>
                        <Label htmlFor='link'>Goodreads, amazon, etc.</Label>
                        <Underline></Underline>
                    </InputContent>
                    {
                        errors.link && <div className='error'>Provide a link</div>
                    }
                </InputBox>
                <Button type='submit'>Add Book</Button>
            </FormWrapper>
    )
}