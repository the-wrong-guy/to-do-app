import React from 'react';
import {Card,Container,makeStyles} from '@material-ui/core'
import styles from './pinnedBar.module.css'

// const useStyles = makeStyles({
//     title : {
//         display : "flex",
//         alignItems : "center"
//     }
// })  
const Unpinnned = () =>{
    // const classes = useStyles()
    return(
        <div>
            <Container className={styles.container}>
                <Card elevation={0} className={styles.Unpinnedtitle}>
                    Unpinnned Tasks
                </Card>
            </Container>
        </div>
    )
}

export default Unpinnned