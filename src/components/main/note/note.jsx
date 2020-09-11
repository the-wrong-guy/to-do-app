import React,{useRef,useState,useEffect} from 'react'
import {Paper,IconButton, Typography,Tooltip,Container} from '@material-ui/core'
import {Delete as DeleteIcon,Bookmark as BookmarkIcon,BookmarkBorder as BookNotMarkIcon,AlarmOn as AlarmOnIcon,Edit as EditIcon} from '@material-ui/icons';
import styles from './note.module.css'

const Tasks =({task})=>{
    return(
        <Container className={styles.container}>
            <Paper className={styles.paper}>
                <div>
                    <p className={styles.note}>{task.task}</p>
                </div>
                <div>
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                    <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Edit">
                    <IconButton aria-label="edit">
                    <EditIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Alarm">
                    <IconButton aria-label="Alarm">
                    <AlarmOnIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Pinned">
                    <IconButton aria-label="Pinned">
                    <BookmarkIcon />
                    </IconButton>
                </Tooltip>
                </div>
            </Paper>
        </Container>
    );
}

export default Tasks;

