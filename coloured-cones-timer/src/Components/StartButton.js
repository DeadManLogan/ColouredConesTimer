import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

// TO DO: make stop button
// TO DO: ask the user about interval
// TO DO: ask the user about cones

const StartButton = () => {
    const [numberToGo, setNumberToGo] = useState();

    const getRandomNumber = () => {
        console.log('initialize')
        let min = 1;
        let max = 4;
        let randomNumber = 0;
        let array = [1, 2, 3, 4];
        let swapV = [1, 2, 3, 4];
        setInterval(() => {
            while(!swapV.includes(randomNumber)) {
                randomNumber = Math.round((Math.random() * (max-min)) + min);
            }
            swapV = array.filter(val => {
                return(val!==randomNumber)
            });
            console.log(randomNumber)
            // let test = randomNumber;
            // while(randomNumber === test) {
            //     randomNumber = Math.round((Math.random() * (max-min)) + min);
            // }
            setNumberToGo(randomNumber);
        }, 1000);
    };

    const stopGettingNumbers = () => {
        clearInterval();
    };

    return(
        <>
            <p>{numberToGo}</p>
            <Button variant="contained" onClick={getRandomNumber}>Start</Button>
            <Button variant="contained" onClick={stopGettingNumbers}>Stop</Button>
        </>
    );
};

export { StartButton };