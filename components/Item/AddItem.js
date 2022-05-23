import Image from 'next/image';
import classes from './AddItem.module.css';
import { useState } from 'react';

export default function AddItem({ showAddItemModal, item, addToCart }) {
    const [cart, setCart] = useState({...item, quantity: 1});

    const handelCartAdd = () => {
        setCart({...cart, quantity: cart.quantity + 1});
    }

    const handelCartremove = () => {
        if (cart.quantity > 1) {
            setCart({...cart, quantity: cart.quantity - 1});
        }
    }
    return (
        <div className={classes.card}>
            <Image onClick={() => showAddItemModal(false, null)} src='/images/svg/x.svg' alt='' width={32} height={32} />
            <h1>{cart._id}</h1>
            <div className={`${classes.card_count} ${classes.flex} `}>
                <Image
                    onClick={handelCartremove}
                    src='/images/svg/minus.svg'
                    alt=''
                    width={12}
                    height={12}
                />
                <div className={classes.card_count_draw}>
                    <p className={classes.card_counting}>
                        {cart.quantity}
                    </p>
                </div>
                <Image
                    onClick={handelCartAdd}
                    src='/images/svg/plus.svg'
                    alt=''
                    width={12}
                    height={12}
                />
            </div>
            <div className={classes.add} onClick={() => addToCart(cart)}>
                Add to cart
            </div>
        </div>
    )
}