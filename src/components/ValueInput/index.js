import { Input, Icon, Wrapper } from './ValueInput.styles';

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
