import {cart} from "../const";

export const renderCart = ({render}) => {
    cart.textContent = '';

    if (!render) {
        return;
    }
}/*<div className="container">
    <h2 className="cart__title">Корзина</h2>

    <ul className="cart__list">
        <li className="cart__item">
            <article className="item">
                <img className="item__image" src="img/card-img.jpg" alt="Пижама со штанами шелковая">

                    <div className="item__content">
                        <h3 className="item__title">Пижама со штанами шелковая</h3>

                        <p className="item__price">руб 6999</p>

                        <div className="item__vendor-code">
                            <span className="item__subtitle">Артикул</span>
                            <span className="item__id">089083</span>
                        </div>
                    </div>

                    <div className="item__prop">
                        <div className="item__color">
                            <p className="item__subtitle item__color-title">Цвет</p>
                            <div className="item__color-item color color_black color_check"></div>
                        </div>

                        <div className="item__size">
                            <p className="item__subtitle item__size-title">Размер</p>
                            <div className="item__size-item size">XS</div>
                        </div>
                    </div>

                    <button className="item__del" aria-label="Удалить товар из корзины"></button>

                    <div className="count item__count">
                        <button className="count__item count__minus">-</button>
                        <span className="count__item count__number">1</span>
                        <button className="count__item count__plus">+</button>
                        <input type="hidden" name="count" value="1">
                    </div>
            </article>
        </li>

        <li className="cart__item">
            <article className="item">
                <img className="item__image" src="img/cart-img.jpg" alt="Бюстгальтер-Балконет Prague Full Cover">

                    <div className="item__content">
                        <h3 className="item__title">Бюстгальтер-Балконет Prague Full Cover</h3>

                        <p className="item__price">руб 2599</p>

                        <div className="item__vendor-code">
                            <span className="item__subtitle">Артикул</span>
                            <span className="item__id">084375</span>
                        </div>
                    </div>

                    <div className="item__prop">
                        <div className="item__color">
                            <p className="item__subtitle item__color-title">Цвет</p>
                            <div className="item__color-item color color_black color_check"></div>
                        </div>

                        <div className="item__size">
                            <p className="item__subtitle item__size-title">Размер</p>
                            <div className="item__size-item size">M</div>
                        </div>
                    </div>

                    <button className="item__del" aria-label="Удалить товар из корзины"></button>

                    <div className="count item__count">
                        <button className="count__item count__minus">-</button>
                        <span className="count__item count__number">1</span>
                        <button className="count__item count__plus">+</button>
                        <input type="hidden" name="count" value="1">
                    </div>
            </article>
        </li>
    </ul>

    <div className="cart__total">
        <p className="cart__total-title">Итого:</p>
        <p className="cart__total-price">руб 9598</p>
    </div>
</div>*/
