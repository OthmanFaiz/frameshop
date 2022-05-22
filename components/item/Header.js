import Image from 'next/image';
import classes from './Header.module.css';

export default function Header() {
	return (
		<div className={classes.card}>
			<div className={classes.header}>
				<Image src='/images/test.jpg' alt='' width={396} height={300}></Image>
			</div>

			<div className={classes.card_body}>
				<div className={classes.card_info}>
					<h1 className={classes.card_title}>milk chocolate cookie</h1>
					<p className={classes.card_description}>12 piece of sexy cookies</p>
					<button className={classes.card_price}>7.000 KWD</button>
				</div>

				<div className={classes.card_details}>
					<div className={classes.card_details_group}>
						<h5>extra piece</h5>
						<button>extra dose</button>
					</div>
					<div className={classes.card_details_group}>
						<h5>extra sauce</h5>
						<button>kinder sauce</button>
						<button>pussy sauce</button>
						<button>vigina sauce</button>
					</div>
					<div className={classes.card_details_group}>
						<h5>leave your message</h5>
						<textarea>textarea</textarea>
					</div>
				</div>
			</div>
			<div className={classes.footer}>
				<div className={`${classes.card_count} ${classes.flex} `}>
					<Image src='/images/svg/minus.svg' alt='' width={12} height={12} />
					<div className={classes.card_count_draw}>
						<p className={classes.card_counting}>0</p>
					</div>
					<Image
						onClick={() => addToCart(item)}
						src='/images/svg/plus.svg'
						alt=''
						width={12}
						height={12}
					/>
				</div>
				<div>footer</div>
			</div>
		</div>
	);
}
