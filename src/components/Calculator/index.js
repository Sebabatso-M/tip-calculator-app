import { Wrapper, ButtonsWrapper } from './Calculator.styles';
import { Label } from '../Label';
import { ValueInput, CustomPercInput } from '../ValueInput';
import { TipButton } from '../Buttons';
import { DollarIcon, PersonIcon } from '../../assests';
import { tipsPercentages } from '../../content/content';
import { useEffect, useState, useContext } from 'react';
import { CalculatorContext } from '../../App';

export const Calculator = () => {
    const [tipRate, setTipRate] = useState(0);
    const [bill, setBill] = useState(0);
    const [numberOfPeople, setNumberOfPeople] = useState(0);

    const { setTotalPerPerson, setTipAmountPerPerson, resetValues } =
        useContext(CalculatorContext);

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
                type='text'
                url={DollarIcon}
                placeholderText='0'
            />
            <Label mb={'21'}>Select Tip %</Label>
            <TipButtons setTipRate={setTipRate} />
            <Label>Number of People</Label>
            <ValueInput
                setFunction={setNumberOfPeople}
                type='text'
                url={PersonIcon}
                placeholderText='0'
            />
        </Wrapper>
    );
};

const TipButtons = ({ setTipRate }) => {
    const [switchInput, setSwitchInput] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <>
            <ButtonsWrapper>
                {tipsPercentages.map((tip, index) => {
                    return (
                        <TipButton
                            key={tip.id}
                            handleSwitchInput={{ switchInput, setSwitchInput }}
                            setTipRate={setTipRate}
                            isActive={activeIndex === index}
                            setHighlight={() => setActiveIndex(index)}
                            resetHighlight={() => setActiveIndex(-1)}
                        >
                            {tip.perc}
                        </TipButton>
                    );
                })}

                <CustomPercInput
                    handleSwitchInput={{ switchInput, setSwitchInput }}
                    setFunction={setTipRate}
                    resetHighlight={() => setActiveIndex(-1)}
                />
            </ButtonsWrapper>
        </>
    );
};
