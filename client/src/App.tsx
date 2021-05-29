import styled from 'styled-components';

import { Form } from './Components/Form';

export default function App() {
  return (
      <AppContainer>
        <Form />
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
