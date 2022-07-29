import classes from './MainBody.module.css';
import Image from 'next/image';

export default function MainBody() {
	return (
		<>
			<section className={classes.Layout}>
				<div className={classes.topLayout}>
					<div className={classes.topLayout_box}>
						<div className={classes.topLayout_box_img}>
							<Image
								src={'/images/svg/arrow-upright.svg'}
								alt=''
								width={25}
								height={25}
							/>
						</div>
						<div className={classes.topLayout_box_texts}>
							<h4 className={classes.topLayout_box_price}>700.00 KWD</h4>
							<p className={classes.topLayout_box_desc}>Today Revenue</p>
						</div>
					</div>
					<div className={classes.topLayout_box}>
						<div className={classes.topLayout_box_img2}>
							<Image
								src={'/images/svg/printer.svg'}
								alt=''
								width={25}
								height={25}
							/>
						</div>
						<div className={classes.topLayout_box_texts}>
							<h4 className={classes.topLayout_box_price}>700.00kwd</h4>
							<p className={classes.topLayout_box_desc}>Today Revenue</p>
						</div>
					</div>
					<div className={classes.topLayout_box}>
						<div className={classes.topLayout_box_img3}>
							<Image
								src={'/images/svg/customers.svg'}
								alt=''
								width={25}
								height={25}
							/>
						</div>
						<div className={classes.topLayout_box_texts}>
							<h4 className={classes.topLayout_box_price}>700.00kwd</h4>
							<p className={classes.topLayout_box_desc}>Today Revenue</p>
						</div>
					</div>
					<div className={classes.topLayout_box}>
						<div className={classes.topLayout_box_img4}>
							<Image
								src={'/images/svg/zigzagi-arrow.svg'}
								alt=''
								width={25}
								height={25}
							/>
						</div>
						<div className={classes.topLayout_box_texts}>
							<h4 className={classes.topLayout_box_price}>700.00kwd</h4>
							<p className={classes.topLayout_box_desc}>Today Revenue</p>
						</div>
					</div>
				</div>
				{/* main layout section */}
				<div className={classes.MainLayout}>
					<div className={classes.MainLayout_graph}>
						<h1>hello shityy world</h1>
					</div>
					<div className={classes.customerInfo}>
						<h1>hello motherfuckers</h1>
					</div>
				</div>

				<div className={classes.LowerLayout}>
					<div className={classes.LowerLayout_card}>
						<h1>hello creepy</h1>
					</div>
					<div className={classes.LowerLayout_card}>
						<h1>screw u</h1>
					</div>
					<div className={classes.LowerLayout_card}>
						<h1>zusammengehorigkeitengefuhle</h1>
					</div>
				</div>
			</section>
		</>
	);
}
