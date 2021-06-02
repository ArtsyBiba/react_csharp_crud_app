import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';

import { FormWrapper, InputBox, InputTitle, InputContent, Input, Label, Underline, Button } from './styles';

type Book = {
    name: string,
    author: string,
    link: string,
}

export const Form = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Book>();
    
    const onSubmit: SubmitHandler<Book> = (data) => {
        try {
            axios.post('https://localhost:5001/api/books', data)
            reset();
        } catch (err) {
            console.log(err.response.data.msg);
        }
    };

    return (
            <FormWrapper onSubmit={handleSubmit(onSubmit)}> 
                <InputBox>
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
                    <InputContent>
                        <Input {...register('link', { required: true })} type='text'/>
                        <Label htmlFor='link'>Link - goodreads, amazon, etc.</Label>
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