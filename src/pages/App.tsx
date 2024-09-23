import styles from './App.module.scss';
import WebApp from '@twa-dev/sdk';

const App = () => {
    alert(WebApp.initData);
    return (
        <div className={styles.app}>App</div>
    );
};

export default App;