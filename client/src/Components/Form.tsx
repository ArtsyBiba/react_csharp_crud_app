import { useForm } from '../hooks/useForm';

export const Form = () => {
    const initialState = {
        name: "",
        author: "",
        category: "",
        link: "",
        year: "",
    };
    
    const addBookCallback = async () => {
        // to be updated with a server call
        console.log(values);
    };

    const { onChange, onSubmit, values } = useForm(
        addBookCallback,
        initialState
    );

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    name='name'
                    id='name'
                    type='text'
                    placeholder='Book Name'
                    onChange={onChange}
                    required
                />
                <input
                    name='author'
                    id='author'
                    type='text'
                    placeholder='Author'
                    onChange={onChange}
                    required
                />
                <input
                    name='category'
                    id='category'
                    type='text'
                    placeholder='Category'
                    onChange={onChange}
                    required
                />
                <input
                    name='link'
                    id='link'
                    type='text'
                    placeholder='Link'
                    onChange={onChange}
                    required
                />
                <input
                    name='year'
                    id='year'
                    type='text'
                    placeholder='Year Read'
                    onChange={onChange}
                    required
                />
                <button type='submit'>Add Book</button>
            </div>
        </form>
    )
}