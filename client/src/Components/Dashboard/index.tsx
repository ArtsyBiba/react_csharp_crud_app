import { Form } from '../Form';
import { DashboardContainer, HeaderWrapper, Subheader } from './styles';

export const Dashboard = () => {

    return (
        <DashboardContainer>
            <HeaderWrapper>
                <Subheader onClick={() => {}}>Add a Book</Subheader>
                <Subheader onClick={() => {}}>What I've Read</Subheader>
                <Subheader onClick={() => {}}>Books To Read</Subheader>
            </HeaderWrapper>
            <Form />
        </DashboardContainer>
    )
}

