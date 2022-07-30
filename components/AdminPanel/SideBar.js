import classes from './Main.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function SideBar({ changePage }) {
    return (
        <section className={classes.nav}>
        <ul className={classes.nav_list}>
                <li className={classes.nav_list_link} onClick={() => changePage("DashBoard")}>
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
                <li className={classes.nav_list_link} onClick={() => changePage("Customers")}>
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
                <li className={classes.nav_list_link} onClick={() => changePage("Stuff")}>
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
                <li className={classes.nav_list_link} onClick={() => changePage("Menu")}>
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
                <li className={classes.nav_list_link} onClick={() => changePage("Orders")}>
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
                <li className={classes.nav_list_link} onClick={() => changePage("Analysis")}>
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
                <li className={classes.nav_list_link} onClick={() => changePage("Settings")}>
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
        </ul>
    </section>
    )
}