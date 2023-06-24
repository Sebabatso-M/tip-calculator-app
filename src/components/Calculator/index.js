import { Wrapper, ButtonsWrapper } from './Calculator.styles';
import { Label } from '../Label';
import { ValueInput, CustomPercInput } from '../ValueInput';
import { TipButton } from '../Buttons';
import { DollarIcon, PersonIcon } from '../../assests';
import { tipsPercentages } from '../../content/content';
import { useEffect, useState } from 'react';

export const Calculator = ({ setFunctions, resetValues }) => {
    const [tipRate, setTipRate] = useState(0);
    const [bill, setBill] = useState(0);
    const [numberOfPeople, setNumberOfPeople] = useState(0);

    const { setTotalPerPerson, setTipAmountPerPerson, setResetValues } =
        setFunctions;

    function resetAllValues() {
        setTipAmountPerPerson(0);
        setTotalPerPerson(0);
        setTipRate(0);
        setNumberOfPeople(0);
        setBill(0);
    }

    useEffect(() => {
        if (resetValues) {
            resetAllValues();
        } else {
            const tip = bill * tipRate;
            if (bill !== 0 && tip !== 0 && numberOfPeople !== 0) {
                setTipAmountPerPerson(tip / numberOfPeople);
                setTotalPerPerson((bill + tip) / numberOfPeople);
            }
        }
    }, [bill, tipRate, numberOfPeople, resetValues]);

    return (
        <Wrapper>
            <Label>Bill</Label>
            <ValueInput
                setFunction={setBill}
                setResetValues={setResetValues}
                resetValues={resetValues}
                type='text'
                url={DollarIcon}
                placeholderText='0'
            />
            <Label mb={'21'}>Select Tip %</Label>
            <TipButtons
                setTipRate={setTipRate}
                setResetValues={setResetValues}
                resetValues={resetValues}
            />
            <Label>Number of People</Label>
            <ValueInput
                setFunction={setNumberOfPeople}
                setResetValues={setResetValues}
                resetValues={resetValues}
                type='text'
                url={PersonIcon}
                placeholderText='0'
            />
        </Wrapper>
    );
};

const TipButtons = ({ setTipRate, setResetValues, resetValues }) => {
    const [switchInput, setSwitchInput] = useState(false);
    return (
        <>
            <ButtonsWrapper>
                {tipsPercentages.map((tip) => {
                    return (
                        <TipButton
                            key={tip.id}
                            handleSwitchInput={{ switchInput, setSwitchInput }}
                            setTipRate={setTipRate}
                        >
                            {tip.perc}
                        </TipButton>
                    );
                })}

                <CustomPercInput
                    handleSwitchInput={{ switchInput, setSwitchInput }}
                    setFunction={setTipRate}
                    setResetValues={setResetValues}
                    resetValues={resetValues}
                />
            </ButtonsWrapper>
        </>
    );
};
