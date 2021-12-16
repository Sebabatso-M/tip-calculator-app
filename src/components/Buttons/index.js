import { TipButtonWrapper, CustomButtonWrapper } from './Buttons.styles';

export const TipButton = ({ children }) => {
    return (
        <TipButtonWrapper
            onClick={() => {
                this.classList.toggle('selected');
            }}
        >
            {children}
        </TipButtonWrapper>
    );
};

export const CustomButton = () => {
    return <CustomButtonWrapper>Custom</CustomButtonWrapper>;
};
