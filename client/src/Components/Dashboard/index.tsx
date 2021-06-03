import { useState, FC } from 'react';
import { Form } from '../Form';
import { BooksRead } from '../BooksRead';
import { DashboardContainer, HeaderWrapper, Subheader } from './styles';

export const Dashboard: FC = () => {
    const [ selectedHeader, setSelectedHeader ] = useState('form');

    return (
        <DashboardContainer>
            <HeaderWrapper>
                <Subheader onClick={() => setSelectedHeader('form')}>Add a Book</Subheader>
                <Subheader onClick={() => setSelectedHeader('booksRead')}>What I've Read</Subheader>
                <Subheader onClick={() => setSelectedHeader('booksToRead')}>Books To Read</Subheader>
            </HeaderWrapper>
            {selectedHeader === 'form' && <Form />}
            {selectedHeader === 'booksRead' && <BooksRead />}
            {selectedHeader === 'booksToRead' && null}
        </DashboardContainer>
    )
}

