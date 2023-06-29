import { useEffect } from 'react';
import { toDecimal } from '../../Utils/functions';
import { TipButtonWrapper, ResetButtonWrapper } from './Buttons.styles';
import { CalculatorContext } from '../../App';
import { useContext } from 'react';

export const TipButton = ({
    setTipRate,
    children,
    handleSwitchInput,
    isActive,
    setHighlight,
    resetHighlight,
}) => {
    const { resetValues } = useContext(CalculatorContext);
    useEffect(() => {
        if (resetValues) {
            resetHighlight();
        }
    }, [resetValues]);
    const { switchInput, setSwitchInput } = handleSwitchInput;
    return (
        <TipButtonWrapper
            active={isActive}
            removeActive={resetValues}
            onClick={(e) => {
                setTipRate(toDecimal(e.target.innerHTML));
                if (switchInput === true) {
                    setSwitchInput(false);
                }
                setHighlight();
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
