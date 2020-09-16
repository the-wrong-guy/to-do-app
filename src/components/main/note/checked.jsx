import React,{useState} from 'react'
import {Tooltip,IconButton} from '@material-ui/core'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'

const Check = ({checked,onClick})=>{

    return(
        <>
        <Tooltip title={checked?("Task completed"):("Task Not completed")}>
        <IconButton onClick={onClick} aria-label={checked?("Task completed"):("Task Not completed")}>
            {checked?(<DoneOutlineIcon style={{color:"green"}}/>):(<CheckBoxOutlineBlankIcon/>)}
        </IconButton>
        </Tooltip>
        </>
    );
}

export default Check