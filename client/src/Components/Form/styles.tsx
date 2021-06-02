import styled from 'styled-components';

export const FormWrapper = styled.form`
    align-self: center;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
`;

export const InputBox = styled.dl`
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    padding: 15px 0 0 0;
`;

export const InputTitle = styled.dt`
    position: absolute;
    top: 15px;
    left: 0;
    width: 100px;
    height: 30px;
    color: #666;
    font-weight: bold;
    line-height: 30px;
`;

export const InputContent = styled.dd`
    position: relative;
    margin-left: 0;
    width: 100%;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    line-height: 30px;
    font-size: 14px;
    border: 0;
    background: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    border-radius: 0;
    -webkit-appearance: none;
    
    &:focus,&:valid{
        &~label{
            color: $accent-color;
            transform: translateY(-20px);
            font-size:0.825em;
            cursor:default;
        }
    }
    
    &:focus{
        &~.underline{
            width: 100%;
        }
    }
`;

export const Label = styled.label`
    position: absolute;
    top:0;
    left:0;
    height: 30px;
    line-height: 30px;
    color:#ccc;
    cursor:text;
    transition: all 200ms ease-out;
    z-index:10;
`;

export const Underline = styled.span`
    content:'';
    display: block;
    position: absolute;
    bottom:-1px;
    left:0;
    width: 0;
    height: 2px;
    background: $accent-color;
    transition: all 200ms ease-out;
`;

export const Button = styled.button`
    background-color: #4db8d6;

    color: white;
    padding: 0.5rem 1.5rem;
    border: 1px solid rgba(0, 0, 0, 0.75);
    border-radius: 20px;
    max-width: 250px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 250ms;
    margin: 1.5rem 0.5rem 0.5rem 0.5rem;
    align-self: center;

    &:hover {
        background-color: grey;
    }
`;
