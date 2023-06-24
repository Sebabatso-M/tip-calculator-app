import './css/normalize.css';
import styled from 'styled-components';
import { GlobalStyle } from './Globalstyles';
import { Title, Calculator, OutputDisplay } from './components';
import { toRem, breakpoint } from './Utils';

import { useEffect, useState } from 'react';

function App() {
    const [totalPerPerson, setTotalPerPerson] = useState(0);
    const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
    const [resetValues, setResetValues] = useState(true);

    return (
        <>
            <Title />

            <Wrapper>
                <Calculator
                    setFunctions={{
                        setTotalPerPerson,
                        setTipAmountPerPerson,
                        setResetValues,
                    }}
                    resetValues={resetValues}
                />
                <OutputDisplay
                    displayValues={{ totalPerPerson, tipAmountPerPerson }}
                    setResetValues={setResetValues}
                />
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
            max-width: ${toRem(900)};
            padding: var(--m-mb);
            max-height: ${toRem(548)};
        `,
    })}
`;

export default App;
