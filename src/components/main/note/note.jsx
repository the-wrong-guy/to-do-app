import React,{useRef,useState,useEffect} from 'react'
import {Paper,IconButton, Typography,Tooltip,Container,Popover} from '@material-ui/core'
import {MoreVert as MoreVertIcon,Delete as DeleteIcon,Bookmark as BookmarkIcon,BookmarkBorder as BookNotMarkIcon,AlarmOn as AlarmOnIcon,Edit as EditIcon} from '@material-ui/icons';
import styles from './note.module.css'
import moment from 'moment'
import { removeTask } from '../../../Actions/action';
import {connect} from 'react-redux'


const Tasks =({task,removeTask})=>{

    const handleRemove = task =>{
        removeTask(task)
    }

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
  

    return( 
        <Container className={styles.container}>
            <Paper className={styles.paper}>
                <div>
                    <p className={styles.note}>{task.task}</p>
                </div>
                <div className={styles.options}>
                    <div>
                            <Tooltip title="Delete">
                            <IconButton onClick={()=>handleRemove(task)} aria-label="delete">
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
                        
                            {task.pinClick ?(
                                <Tooltip title="Pinned">
                                    <IconButton aria-label="Pinned">
                                        <BookmarkIcon />
                                    </IconButton>
                                </Tooltip>):
                                (<Tooltip title="Unpinned">
                                    <IconButton aria-label="UnPinned">
                                        <BookNotMarkIcon/>
                                    </IconButton>
                                </Tooltip>)
                            }
                    </div>
                    
                    <div style={{display:"flex"}}>
                        <p>{moment(task.date.toDate()).calendar()}</p>
                        <IconButton  variant="contained"
                        color="primary"
                        onClick={handleClick} >
                         <MoreVertIcon/>
                        </IconButton>
                        <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "left"
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right"
                        }}
                      >
                      <Tooltip title="Delete">
                      <IconButton onClick={()=>handleRemove(task)} aria-label="delete">
                      <DeleteIcon />
                      </IconButton>
                      </Tooltip>
                      <Tooltip title="Alarm">
                      <IconButton aria-label="Alarm">
                      <AlarmOnIcon />
                      </IconButton>
                      </Tooltip>
                      </Popover>
                        
                    </div>
                </div>
            </Paper>
        </Container>
    );
}

const mapDispatchToProps = dispatch =>{
    return{
        removeTask : task => dispatch(removeTask(task))
    }
}



export default connect(null,mapDispatchToProps)(Tasks);

