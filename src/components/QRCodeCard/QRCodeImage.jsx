import styles from './QRCodeImage.module.scss';

export function QRCodeImage() {
	return (
		<div className={styles.container}>
			<div className={styles.qrcode} s></div>
		</div>
	);
}
