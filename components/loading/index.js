import React from 'react';
import Styles from './styles.module.css'; 

function Loading() {
    return (
        <div className={Styles.loadingWrapper }>
            <div className={Styles.loading}>
            </div>
        </div>
    );
};

export default Loading;