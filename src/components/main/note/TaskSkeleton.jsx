import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import {Container} from '@material-ui/core'
import styles from './TaskSkeleton.module.css'

export default function TaskSkeleton() {
    return (
      <Container className={styles.container}>
        <Skeleton animation="wave" variant="rect" width="100%" height={126} />
      </Container>
    );
  }
