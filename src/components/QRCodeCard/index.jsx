import styles from './QRCodeCard.module.scss';
import { QRCodeImage } from './QRCodeImage';

export function QRCodeCard() {
	return (
		<div className={styles.container}>
			<QRCodeImage />
			<h2 className={styles.title}>
				Know more about me
			</h2>
			<p className={styles.subtitle}>
				Scan the QR Code and let`s get in touch
			</p>
		</div>
	);
}
