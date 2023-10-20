import {
    List, ListItem, Button, Checkbox, Editable,
    EditablePreview, EditableInput, Flex,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
import './Common.css';

function Liste({ tasks, deleteTask }) {
    const [show, setShow] = useState(() => tasks.map(() => false));
    const [checkedTasks, setCheckedTasks] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(tasks.map(() => true));
        }, 1000); //apparition après 1 seconde

        return () => clearTimeout(timer);
    }, [tasks]);

    const handleCheck = (index) => {
        const updatedCheckedTasks = [...checkedTasks];
        if (updatedCheckedTasks.includes(index)) {
            const pos = updatedCheckedTasks.indexOf(index);
            updatedCheckedTasks.splice(pos, 1);
        } else {
            updatedCheckedTasks.push(index);
        }
        setCheckedTasks(updatedCheckedTasks);
    };

    return (
        <div className='liste'>
            <List marginBottom={5} marginTop={5} spacing={3}>
                {tasks.map((task, index) => (
                    <div className={index % 2 === 0 ? "slideFromLeft" : "slideFromRight"} key={index}>
                        <ListItem display='flex' alignItems='center' justifyContent='center'>
                            <Checkbox
                                size='lg'
                                colorScheme='blue'
                                isChecked={checkedTasks.includes(index)}
                                onChange={() => handleCheck(index)}
                            />
                            <Editable defaultValue={task} marginLeft={5} display={'inline-block'}>
                                <EditablePreview />
                                <EditableInput />
                            </Editable>
                            <Button
                                padding={1}
                                paddingInline={3}
                                marginLeft={5}
                                size="xs"
                                onClick={() => deleteTask(index)}
                            >
                                <Flex align="center" justify="center">
                                    <DeleteIcon />
                                </Flex>
                            </Button>
                        </ListItem>
                    </div>
                ))}
            </List>
        </div>
    );
}

export default Liste;
