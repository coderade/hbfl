import React from 'react'
import styles from './index.less'
import assets from '../../../../util/assets'

class Hero extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.hero}>
                    <div className={styles.mainball}>
                        <img
                            src={assets.mkrs_logo}
                            alt='main ball'
                        />
                    </div>
                    <div className={styles.title}>
                        Mario Kart Race Simulator
                    </div>
                    <div className={styles.tagline}>
                        The ONLY place on the web to follow the Mario Kart Race Simulator
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero
