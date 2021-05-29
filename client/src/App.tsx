import styled from 'styled-components';

import { Form } from './Components/Form';

export default function App() {
  return (
      <AppContainer>
        <Dashboard>
          <Form />
        </Dashboard>
      </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #fdf8f9;
`;

const Dashboard = styled.div`
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 70%;
    background-color: white;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,0.1);
    border-radius: 4px;
`;
