import { TipButtonWrapper, ResetButtonWrapper } from './Buttons.styles';

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

export const ResetButton = () => {
    return <ResetButtonWrapper>Reset</ResetButtonWrapper>;
};
