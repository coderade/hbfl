import React from 'react'
import styles from './index.less'

class Footer extends React.Component {
  render () {
    return (
      <footer className={styles.footer}>
          &copy; <a href='https://coderade.github.io/'>MKRS</a> &amp; Valdeci Gomes 2018
      </footer>
    )
  }
}

export default Footer
