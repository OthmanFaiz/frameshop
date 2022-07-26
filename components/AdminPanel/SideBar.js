import classes from './Main.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function SideBar() {
    return (
        <section className={classes.nav}>
        <ul className={classes.nav_list}>
            <Link href='/DashBoard'>
                <li className={classes.nav_list_link}>
                <div className={classes.nav_list_link_icon}>
                    <Image
                        src={'/images/svg/admin/dashboard.svg'}
                        alt=''
                        width={16}
                        height={16}
                    />
                </div>
                    DashBoard
                </li>
            </Link>
            <Link href='/Customers'>
                <li className={classes.nav_list_link}>
                <div className={classes.nav_list_link_icon}>
                    <Image
                        src={'/images/svg/admin/customers.svg'}
                        alt=''
                        width={16}
                        height={16}
                    />
                </div>
                    Customers
                </li>
            </Link>
            <Link href='/Stuff'>
                <li className={classes.nav_list_link}>
                <div className={classes.nav_list_link_icon}>
                    <Image
                        src={'/images/svg/admin/stuff.svg'}
                        alt=''
                        width={16}
                        height={16}
                    />
                </div>
                    Stuff
                </li>
            </Link>
            <Link href='/Menu'>
                <li className={classes.nav_list_link}>
                    <div className={classes.nav_list_link_icon}>
                    <Image
                        src={'/images/svg/admin/menu.svg'}
                        alt=''
                        width={16}
                        height={16}
                    />
                    </div>
                    Menu
                </li>
            </Link>
            <Link href='/Orders'>
                <li className={classes.nav_list_link}>
                <div className={classes.nav_list_link_icon}>
                <Image
                    src={'/images/svg/admin/orders.svg'}
                    alt=''
                    width={16}
                    height={16}
                />
                </div>
                    Orders
                </li>
            </Link>
            <Link href='/Analysis'>
                <li className={classes.nav_list_link}>
                <div className={classes.nav_list_link_icon}>
                <Image
                    src={'/images/svg/admin/analysis.svg'}
                    alt=''
                    width={16}
                    height={16}
                />
                </div>
                    Analysis
                </li>
            </Link>
            <Link href='/Settings'>
                <li className={classes.nav_list_link}>
                <div className={classes.nav_list_link_icon}>
                <Image
                    src={'/images/svg/admin/settings.svg'}
                    alt=''
                    width={16}
                    height={16}
                />
                </div>
                    Settings
                </li>
            </Link>
        </ul>
    </section>
    )
}