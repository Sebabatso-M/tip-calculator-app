import { Input, Icon, Wrapper, CustomInputWrapper } from './ValueInput.styles';
import { useEffect, useRef, useContext } from 'react';
import { toDecimal } from '../../Utils/functions';
import { CalculatorContext } from '../../App';

export const ValueInput = ({ url, placeholderText, setFunction }) => {
    const { setResetValues, resetValues } = useContext(CalculatorContext);
    useEffect(() => {
        if (resetValues) {
            inputRef.current.value = '';
        }
    }, [resetValues]);
    const inputRef = useRef();

    return (
        <Wrapper>
            <Input
                ref={inputRef}
                type='number'
                placeholder={placeholderText ? placeholderText : ''}
                onChange={() => {
                    setFunction(parseInt(inputRef.current.value));
                    setResetValues(false);
                }}
                min='1'
            />
            <Icon icon={url} />
        </Wrapper>
    );
};

export const CustomPercInput = ({
    setFunction,
    handleSwitchInput,
    resetHighlight,
}) => {
    const { setResetValues, resetValues } = useContext(CalculatorContext);
    const inputRef = useRef();
    const { switchInput, setSwitchInput } = handleSwitchInput;
    useEffect(() => {
        if (switchInput === false || resetValues === true) {
            inputRef.current.value = '';
        }
    }, [switchInput, resetValues]);

    function handleChange() {
        setSwitchInput(true);
        resetHighlight();
        setResetValues(false);
        setFunction(toDecimal(inputRef.current.value));
    }

    return (
        <CustomInputWrapper
            active={switchInput}
            removeOutline={resetValues}
            type='number'
            ref={inputRef}
            onChange={handleChange}
            placeholder='Custom'
        />
    );
};
