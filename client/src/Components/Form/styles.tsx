import styled from 'styled-components';

export const FormWrapper = styled.form`
    align-self: center;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
`;

export const InputBox = styled.dl`
    overflow: hidden;
    position: relative;
    padding: 15px 0 0 100px;
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