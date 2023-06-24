import { useEffect } from 'react';
import { toDecimal } from '../../Utils/functions';
import { TipButtonWrapper, ResetButtonWrapper } from './Buttons.styles';

export const TipButton = ({ setTipRate, children, handleSwitchInput }) => {
    useEffect(() => {});
    const { switchInput, setSwitchInput } = handleSwitchInput;
    return (
        <TipButtonWrapper
            onClick={(e) => {
                setTipRate(toDecimal(e.target.innerHTML));
                if (switchInput === true) {
                    setSwitchInput(false);
                }
            }}
        >
            {children}
        </TipButtonWrapper>
    );
};

export const ResetButton = ({ setResetValues }) => {
    return (
        <ResetButtonWrapper onClick={() => setResetValues(true)}>
            Reset
        </ResetButtonWrapper>
    );
};
