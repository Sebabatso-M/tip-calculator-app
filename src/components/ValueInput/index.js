import { Input, Icon, Wrapper, CustomInputWrapper } from './ValueInput.styles';

export const ValueInput = ({ type, url, placeholderText }) => {
    return (
        <Wrapper>
            <Input
                type={type}
                placeholder={placeholderText ? placeholderText : ''}
            />
            <Icon icon={url} />
        </Wrapper>
    );
};

export const CustomInput = ({ type, placeholderText }) => {
    return (
        <CustomInputWrapper
            type={type}
            placeholder={placeholderText ? placeholderText : ''}
        />
    );
};
