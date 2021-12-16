import './css/normalize.css';
import styled from 'styled-components';
import { GlobalStyle } from './Globalstyles';
import { Title, Calculator, OutputDisplay } from './components';
import { toRem } from './Utils';

function App() {
    return (
        <>
            <Title />

            <Wrapper>
                <Calculator />
                <OutputDisplay />
                <GlobalStyle />
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    --curve: ${toRem(18)};

    background: var(--white);
    border-radius: var(--curve) var(--curve) 0 0;

    padding-bottom: ${toRem(50)};
`;

export default App;
