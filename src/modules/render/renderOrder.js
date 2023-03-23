import {order} from "../const";

export const renderOrder = ({render}) => {
    order.textContent = '';

    if (!render) {
        return;
    }
}/*
<div className="container">
    <h2 className="order__title">Оформление заказа</h2>

    <form className="order__form">
        <fieldset className="order__personal">
            <label className="order__label">
                <input className="order__input" type="text" placeholder="ФИО" name="fio">
            </label>

            <label className="order__label">
                <input className="order__input" type="text" placeholder="Адрес доставки" name="address">
            </label>

            <label className="order__label">
                <input className="order__input" type="text" placeholder="Телефон" name="phone">
            </label>

            <label className="order__label">
                <input className="order__input" type="text" placeholder="E-mail" name="email">
            </label>
        </fieldset>

        <fieldset className="order__radio-list">
            <label className="order__radio radio">
                <input className="radio__input" type="radio" name="delivery" value="delivery">
                    <span className="radio__text">Доставка</span>
            </label>

            <label className="order__radio radio">
                <input className="radio__input" type="radio" name="delivery" value="pick-up">
                    <span className="radio__text">Самовывоз</span>
            </label>
        </fieldset>

        <button className="order__submit main-button" type="submit">Оформить</button>
    </form>
</div>*/
