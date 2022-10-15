import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import ConeNumberForm from './ConeNumberForm';
import '../style/Timer.css';

// DONE: make stop button
// DOING: add comments
// DONE: text-to-speech
// DONE: make it an eye-candy
//      -----RELEASE-----
// TO DO: ask the user about interval
// TO DO: ask the user about cones
// TO DO: phone responsive
// TO DO: create cool README


const Timer = () => {
    // the number of the next cone
    const [numberToGo, setNumberToGo] = useState(0);
    // boolean that shows if the timer is on or off
    const [isGenerating, setIsGeneratining] = useState(false);
    // assign the value of react hook to speak
    const {speak} = useSpeechSynthesis();

    useEffect(() => {
        let timer = null;
        if(isGenerating) {
            // we initialize the first and last cones as well as a random cone
            let min = 1;
            let max = 4;
            let randomNumber = 0;
            // we initialize two arrays with the number of cones.
            let array =  [1, 2, 3, 4];
            let swapV = [1, 2, 3, 4];

            timer = setInterval(() => {
                // helps us prevent continuous numbers (e.g. 1-1, 2-2)
                while(!swapV.includes(randomNumber)) {
                    randomNumber = Math.round((Math.random() * (max-min)) + min);
                }
                // we filter the randomNumber from swap array so next time we won't generate the same number
                swapV = array.filter(value => {
                    return(value!==randomNumber)
                });
                setNumberToGo(randomNumber);
                // we speak each number
                speak({ text: randomNumber });
            }, 2000);
        } else {
            // here we stop the timer
            setNumberToGo(0);
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [isGenerating]);

    return(
        <div className='components'>
            <ConeNumberForm numberToGo={numberToGo} />
            <Button
                className='button_size'
                size='large'
                style={{ backgroundColor: '#9fffe0', color: 'black', marginRight: '8vw', marginTop: '-4vh' }}
                variant='contained' onClick={() => setIsGeneratining(true)}
            >Start</Button>
            <Button
                className='button_size'
                size='large'
                style={{ backgroundColor: '#9fffe0', color: 'black', marginLeft: '8vw', marginTop: '-4vh' }}
                variant='contained' onClick={() => setIsGeneratining(false)}
            >Stop</Button>
        </div>
    );
};

export default Timer;