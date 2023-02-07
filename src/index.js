import React from 'react'
import styles from './styles.module.css'

import Spinner from "./Spinner";

export const Spine = ({}) => {
  return (
    <div className={styles.pos}>
      <Spinner />
    </div>
  );
}