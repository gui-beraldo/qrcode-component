import styles from './App.module.scss';
import { QRCodeCard } from './components/QRCodeCard';

function App() {
	return (
		<div className={styles.container}>
			<QRCodeCard />
		</div>
	);
}

export default App;
