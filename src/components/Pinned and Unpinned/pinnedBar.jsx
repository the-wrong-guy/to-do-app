import React from 'react';
import {Container,Card} from '@material-ui/core'
import styles from './pinnedBar.module.css'

const Pinnned = () => {
    return(
        <Container className={styles.container}>
            <Card elevation={0} className={styles.Pinnedtitle}>
                Pinnned Tasks
            </Card>
        </Container>
    )
}

export default Pinnned