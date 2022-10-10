import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

// DONE: make stop button
// TO DO: ask the user about interval
// TO DO: ask the user about cones
// TO DO: text-to-speech
// TO DO: create cool README


const StartButton = () => {
    const [numberToGo, setNumberToGo] = useState(0);
    const [isGenerating, setIsGeneratining] = useState(false);

    useEffect(() => {
        let timer = null;

        if(isGenerating) {
            let min = 1;
            let max = 4;
            let randomNumber = 0;
            let array =  [1, 2, 3, 4];
            let swapV = [1, 2, 3, 4];
            timer = setInterval(() => {
                while(!swapV.includes(randomNumber)) {
                    randomNumber = Math.round((Math.random() * (max-min)) + min);
                }
                swapV = array.filter(val => {
                    return(val!==randomNumber)
                });
                setNumberToGo(randomNumber);
            }, 1000);
        } else {
            setNumberToGo(0);
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [isGenerating]);

    // function getRandomNumber() {
    //     let min = 1;
    //     let max = 4;
    //     let randomNumber = 0;
    //     let array =  [1, 2, 3, 4];
    //     let swapV = [1, 2, 3, 4];
    //     timer = setInterval(() => {
    //         while(!swapV.includes(randomNumber)) {
    //             randomNumber = Math.round((Math.random() * (max-min)) + min);
    //         }
    //         swapV = array.filter(val => {
    //             return(val!==randomNumber)
    //         });
    //         setNumberToGo(randomNumber);
    //     }, 1000);
    //     return () => clearInterval(timer);
    // };

    return(
        <>
            <p>{numberToGo}</p>
            <Button variant="contained" onClick={() => setIsGeneratining(true)}>Start</Button>
            <Button variant="contained" onClick={() => setIsGeneratining(false)}>Stop</Button>
        </>
    );
};

export { StartButton };