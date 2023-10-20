import React, { useState, useEffect } from 'react';
import { Input, Collapse } from '@chakra-ui/react';

function Todo_input({ addTask }) {
    const [inputValue, setInputValue] = useState('');
    const [show, setShow] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
            addTask(inputValue.trim());
            setInputValue(''); // réinitialise l'input
        }
    };

    useEffect(() => {
        setShow(true);
    }, []);


    return (
        <div className='input_container'>
            <Collapse in={show} animateOpacity style={{ transitionDuration: "1s" }}>
            <Input 
                bg='beige'
                color='black'
                h={50}
                w='50%'
                marginTop={3}
                value={inputValue} 
                onChange={handleInputChange}
                onKeyDown={handleKeyDown} // This will submit the task when the input loses focus
                textAlign="center"
            />
            </Collapse>
        </div>
    );
}

export default Todo_input;
