import React,{useState,useEffect,useRef} from 'react'
import {Container,Tooltip,IconButton,Button, StylesProvider,Paper, TextField} from '@material-ui/core'
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AlarmAddIcon from '@material-ui/icons/AlarmAdd';
import styles from './main.module.css'
import {addTask} from '../../../Actions/action'
import {connect} from 'react-redux'


function Todo() {
    const [pinClick,setPinCLicked] = useState(false)
    const [input,setInput] = useState("")
    const textareaRef = useRef(null);
    useEffect(() => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [input]);

    const handleAddClick = () =>{
        addTask(input)
        console.log(input)
        setInput("")
        setPinCLicked(false)
    }
    const handleAlarmClick =()=>{ 
        console.log("Alarm")
    }
    const handlePinClick =()=>{
        console.log("Pin")
        setPinCLicked(()=>!pinClick)
    }
    return(
        <Container className={styles.container}>
        <Paper elevation={15} className={styles.paper}>
        <textarea  ref={textareaRef} value={input} onChange={(e) => setInput(e.target.value)}   className={styles.input} type="text" placeholder="Add note..."></textarea>
        <div className={styles.footarea}>
        <Tooltip title="Add">
            <IconButton onClick={handleAddClick} aria-label="add">
                <AddBoxIcon />
            </IconButton>
        </Tooltip>
        <Tooltip title="Add alarm">
            <IconButton  onClick={handleAlarmClick} aria-label="alarm">
              <AlarmAddIcon />
            </IconButton>
        </Tooltip>
        <Tooltip title="Pin">
            <IconButton  onClick={handlePinClick} aria-label="pin">
            {pinClick ?  (<TurnedInIcon/>) : (<TurnedInNotIcon />)}
            </IconButton>
        </Tooltip>
        </div>
        </Paper>
        </Container>
    );
}

const mapDispatchToProps = dispatch => {
    return{
        addTask : (task) => dispatch(addTask(task))
    }
}



export default connect(null,mapDispatchToProps)(Todo)