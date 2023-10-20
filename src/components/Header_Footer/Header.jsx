import React, { useEffect, useState } from 'react';
import { Center, Collapse, Text } from '@chakra-ui/react';

function Header() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div className='header_container'>
            <Collapse in={show} animateOpacity style={{ transitionDuration: "1s" }}>
                <Center h='150px'>
                    
                    <Text fontSize='6xl'> Todo List </Text>
                </Center>
            </Collapse>
        </div>
    );
}

export default Header;
