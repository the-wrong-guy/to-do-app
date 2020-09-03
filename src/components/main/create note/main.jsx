import React,{useState,useEffect,useRef} from 'react'
import {Container,Tooltip,IconButton,Button, StylesProvider,Paper, TextField} from '@material-ui/core'
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AlarmAddIcon from '@material-ui/icons/AlarmAdd';
import styles from './main.module.css'
function Todo() {

    const [input,setInput] = useState("")
    const textareaRef = useRef(null);
    useEffect(() => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [input]);


    return(
        <Container className={styles.container}>
        <Paper elevation={15} className={styles.paper}>
        <textarea  ref={textareaRef} value={input} onChange={(e) => setInput(e.target.value)}   className={styles.input} type="text" placeholder="Add note..."></textarea>
        <div className={styles.footarea}>
        <Tooltip title="Add">
            <IconButton aria-label="delete">
                <AddBoxIcon />
            </IconButton>
        </Tooltip>
        <Tooltip title="Add alarm">
            <IconButton aria-label="delete">
              <AlarmAddIcon />
            </IconButton>
        </Tooltip>
        <Tooltip title="Pin">
            <IconButton aria-label="delete">
              <TurnedInNotIcon />
            </IconButton>
        </Tooltip>
        </div>
        </Paper>
        </Container>
    );
}

export default Todo