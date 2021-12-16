import { TipButtonWrapper } from './Buttons.styles';

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
