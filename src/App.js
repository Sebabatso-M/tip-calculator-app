import './css/normalize.css';
import styled from 'styled-components';
import { GlobalStyle } from './Globalstyles';
import { Title, Calculator, OutputDisplay } from './components';
import { toRem, breakpoint } from './Utils';

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
    --curve: ${toRem(22)};

    background: var(--white);
    border-radius: var(--curve) var(--curve) 0 0;

    padding-bottom: ${toRem(50)};

    ${breakpoint({
        size: 'tablet',
        content: `
        margin:0 auto;
        width: 88%;
        max-width: ${toRem(677)};

        border-radius: var(--curve);
        margin-bottom: var(--spacing-size);
    `,
    })}

    ${breakpoint({
        size: 'laptop_s',
        content: `
            display: flex;
            max-width: ${toRem(889)};
            padding: var(--m-mb);
            max-height: ${toRem(548)};
        `,
    })}
`;

export default App;
