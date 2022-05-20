import classes from './Payment.module.css';
import Image from 'next/image';

export default function Payment() {
	return (
		<>
			<div className={classes.title}>
				<h1 className={classes.info}>Payment</h1>

				<div className={`${classes.flex} ${classes.flex__col}`}>
					<div className={classes.section}>
						<h3>subtitle</h3>
						<h3>20.000 KWD</h3>
					</div>
					<div className={classes.section}>
						<h3>Delivery</h3>
						<h3>1.000 KWD</h3>
					</div>
					<div className={classes.section}>
						<h1>Total Amount</h1>
						<h1>25.000 KWD</h1>
					</div>
				</div>
			</div>
		</>
	);
}
