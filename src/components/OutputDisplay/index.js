import {
    Wrapper,
    OutputValueWrapper,
    OutputWrapper,
    FirstDisplayTitlesWrapper,
    SecondDisplayTitlesWrapper,
    Icon,
} from './OutputDisplay.styles';
import { ResetButton } from '../Buttons';

export const OutputDisplay = ({ displayValues, setResetValues }) => {
    const { totalPerPerson, tipAmountPerPerson } = displayValues;

    return (
        <>
            <Wrapper>
                <OutputWrapper>
                    <div>
                        <FirstDisplayTitlesWrapper>
                            Tip Amount
                        </FirstDisplayTitlesWrapper>
                        <SecondDisplayTitlesWrapper>
                            / person
                        </SecondDisplayTitlesWrapper>
                    </div>
                    <Value>{tipAmountPerPerson.toFixed(1)}</Value>
                </OutputWrapper>

                <OutputWrapper>
                    <div>
                        <FirstDisplayTitlesWrapper>
                            totalPerPerson
                        </FirstDisplayTitlesWrapper>
                        <SecondDisplayTitlesWrapper>
                            / person
                        </SecondDisplayTitlesWrapper>
                    </div>
                    <Value>{totalPerPerson.toFixed(1)}</Value>
                </OutputWrapper>

                <ResetButton setResetValues={setResetValues} />
            </Wrapper>
        </>
    );
};

const Value = ({ children }) => {
    return (
        <OutputValueWrapper>
            <Icon />
            {children}
        </OutputValueWrapper>
    );
};
