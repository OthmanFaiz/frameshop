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
                <div className={classes.add_margin}>
                <Image onClick={() => showAddItemModal(false, null)} src='/images/svg/x.svg' alt='' width={32} height={32} />
                </div>
            </div>

            <div className={`${classes.extra} ${classes.flex} ${classes.flex_column}`}>
                <div className={`${classes.extra} ${classes.flex} ${classes.flex_column}`}>
                    <div className={classes.extra_name}>{cart.name}</div>
                    <div className={`${classes.extra} ${classes.flex} ${classes.extra_combain}`}>
                        <div className={classes.extra_description}>{cart.description}</div>
                        <div className={classes.extra_price}>{cart.price.toFixed(2)} KWD</div>
                    </div>
                </div>

                <div className={classes.extra_extras}>
                    <div className={classes.extra_cat}>Extra 12 Pieces</div>
                    <div className={`${classes.flex} ${classes.flex_center}`}>
                        <input className={classes.extra_input} type="checkbox" name="extra" id="extra" /> <label htmlFor="extra" className={classes.extra_label}>Extra Dozen of cookies</label>
                    </div>

                    <div className={`${classes.extra_message} ${classes.extra_cat}`}>Leave your message ( Optional )</div>
                    <textarea className={classes.extra_textarea} placeholder="Leave your message here..."></textarea>
                </div>
            </div>

            <div className={`${classes.card_count} ${classes.flex}`}>
                <Image
                    onClick={handelCartremove}
                    src='/images/svg/minus.svg'
                    alt=''
                    width={16}
                    height={16}
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
                    width={16}
                    height={16}
                />
            </div>

            <div className={classes.add} onClick={() => addToCart(cart)}>
                <div className={classes.AddItem}>Add to Cart</div><div className={classes.cart}><Image src='/images/svg/shopping-cart-10941.svg' alt='' width={24} height={24} /></div>
            </div>
        </div>
    )
}