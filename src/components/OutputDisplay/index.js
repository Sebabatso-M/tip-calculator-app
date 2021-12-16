import {
    Wrapper,
    OutputValueWrapper,
    OutputWrapper,
    FirstDisplayTitlesWrapper,
    SecondDisplayTitlesWrapper,
    Icon,
} from './OutputDisplay.styles';
import { ResetButton } from '../Buttons';

export const OutputDisplay = () => {
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
                    <Value>0.00</Value>
                </OutputWrapper>

                <OutputWrapper>
                    <div>
                        <FirstDisplayTitlesWrapper>
                            Total
                        </FirstDisplayTitlesWrapper>
                        <SecondDisplayTitlesWrapper>
                            / person
                        </SecondDisplayTitlesWrapper>
                    </div>
                    <Value>0.00</Value>
                </OutputWrapper>

                <ResetButton />
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
