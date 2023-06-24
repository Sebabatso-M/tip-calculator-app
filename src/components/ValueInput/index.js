import { Input, Icon, Wrapper, CustomInputWrapper } from './ValueInput.styles';
import { useEffect, useRef } from 'react';
import { toDecimal } from '../../Utils/functions';

export const ValueInput = ({
    url,
    placeholderText,
    setFunction,
    setResetValues,
    resetValues,
}) => {
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
    setResetValues,
    resetValues,
}) => {
    const inputRef = useRef();
    const { switchInput, setSwitchInput } = handleSwitchInput;
    useEffect(() => {
        if (switchInput === false || resetValues === true) {
            inputRef.current.value = '';
        }
    }, [switchInput, resetValues]);

    function handleChange() {
        setSwitchInput(true);
        setResetValues(false);
        setFunction(toDecimal(inputRef.current.value));
    }

    return (
        <CustomInputWrapper
            type='number'
            ref={inputRef}
            onChange={handleChange}
            placeholder='Custom'
        />
    );
};
