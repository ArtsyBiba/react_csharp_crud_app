import styled from 'styled-components';

export const Text = styled.div`
    height: 30px;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: start;
`;

export const Button = styled.button`
    background-color: red;

    color: white;
    border: 1px solid rgba(0, 0, 0, 0.75);
    border-radius: 20px;
    max-width: 250px;
    font-size: 0.8rem;
    cursor: pointer;
    transition: background-color 250ms;
    align-self: flex-start;
    margin-left: 10px;
    margin-top: 2   px;

    &:hover {
        background-color: grey;
    }
`;