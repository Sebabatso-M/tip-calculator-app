import { Wrapper, ButtonsWrapper } from './Calculator.styles';
import { Label } from '../Label';
import { ValueInput } from '../ValueInput';
import { TipButton, CustomButton } from '../Buttons';
import { DollarIcon, PersonIcon } from '../../assests';
import { tipsPercentages } from '../../content/content';

export const Calculator = () => {
    return (
        <Wrapper>
            <Label>Bill</Label>
            <ValueInput type='text' url={DollarIcon} placeholderText='0' />
            <Label>Select Tip %</Label>
            <TipButtons />
            <Label>Number of People</Label>
            <ValueInput type='text' url={PersonIcon} placeholderText='0' />
        </Wrapper>
    );
};

const TipButtons = () => {
    return (
        <>
            <ButtonsWrapper>
                {tipsPercentages.map((tip) => {
                    return <TipButton key={tip.id}>{tip.perc}</TipButton>;
                })}

                <CustomButton />
            </ButtonsWrapper>
        </>
    );
};
