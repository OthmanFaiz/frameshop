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

    const img = '/images/testbig.jpg'

    const imageStyle = {
        width: '100%',
        height: '300px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${img})`
    }

    return (
        <div className={`${classes.card} ${classes.flex} ${classes.flex_column}`}>
            <div style={imageStyle}>
                <Image onClick={() => showAddItemModal(false, null)} src='/images/svg/x.svg' alt='' width={32} height={32} />
            </div>

            <div>
                <div>
                    <div>{cart.name}</div>
                    <div>{cart.description}</div>
                    <div className={classes.card_price}>{cart.price.toFixed(2)} KWD</div>
                </div>
            </div>

            <div className={`${classes.card_count} ${classes.flex}`}>
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
                <div className={classes.AddItem}>Add to Cart</div><div className={classes.cart}><Image src='/images/svg/shopping-cart-10941.svg' alt='' width={24} height={24} /></div>
            </div>
        </div>
    )
}