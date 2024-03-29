import {API_URL, card, cart, DATA} from "../const";
import {createElement} from "../utils/createElement";
import {renderCount} from "./renderCount";
import {getFavorite, handlerFavorite} from "../controllers/favoriteController";
import {addProductCart, calcTotalPrice} from "../controllers/cartController";

export const renderCard = ({data, render}) => {
    card.textContent = '';

    if (!render) {
        return;
    }

    const {id, title, description, price, colors, pic, size} = data;

    const container = createElement('div', {
        className: 'card__container container',
    }, {
        parent: card
    });

    createElement('img', {
        className: 'card__image',
        src: `${API_URL}/${pic}`,
        alt: title,
    }, {
        parent: container,
    });

    const form = createElement('form', {
        className: 'card__content',
        id: 'order'
    }, {
        parent: container,
        cb(elem) {
            elem.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(elem);
                const product = Object.fromEntries(formData);

                if (product.color && product.size && product.count) {
                    addProductCart(product);
                    calcTotalPrice.updateCount();
                    return;
                }

                const p = createElement('p', {
                    className: 'card__alert',
                    textContent: product.size
                        ? product.color
                            ? product.count
                                ? 'Что-то пошло не так'
                                : 'Количество не указано'
                            : 'Цвет не выбран'
                        : 'Размер не выбран',
                }, {
                   parent: form,
                    cb(p) {
                        setTimeout(() => {
                            p.remove()
                        }, 3000);
                    }
                });
            });
        }
    });

    form.insertAdjacentHTML('beforeend', `
    <h2 class="card__title">${title}</h2>
    
    <p class="card__price">руб ${price}</p>
    
    <div class="card__vendor-code">
        <span class="card__subtitle">Артикул</span>
        <span class="card__id">${id}</span>
        <input type="hidden" name="id" value="${id}">
    </div>
    `);

    const cardColor = createElement('div', {
        className: 'card__color',
        innerHTML: '<p class="card__subtitle card__color-title">Цвет</p>',
    }, {
        parent: form
    });

    createElement('div', {
        className: 'card__color-list',
    }, {
        parent: cardColor,
        cb(colorList) {
            colors.forEach((colorId, i) => {
                const color = DATA.colors.find((color) => color.id === colorId).title;

                const label = createElement('label', {
                    className: `card__color-item color color_${color}`
                }, {
                    parent: colorList
                });

                createElement('input', {
                    className: 'color__input input-hide',
                    type: 'radio',
                    name: 'color',
                    value: color,
                    checked: !i,
                }, {
                    parent: label
                });

                createElement('span', {
                    className: 'color__check'
                }, {
                    parent: label
                });
            })
        }
    });

    const cardSize = createElement('div', {
        className: 'card__size',
        innerHTML: '<p class="card__subtitle card__size-title">Размер</p>',
    }, {
        parent: form
    });

    createElement('div', {
        className: 'card__size-list',
    }, {
        parent: cardSize,
        cb(sizeList) {
            size.forEach((item) => {
                const label = createElement('label', {
                    className: `card__size-item size`
                }, {
                    parent: sizeList
                });

                createElement('input', {
                    className: 'size__input input-hide',
                    type: 'radio',
                    name: 'size',
                    value: item,
                }, {
                    parent: label
                });

                createElement('span', {
                    className: 'size__check',
                    textContent: item
                }, {
                    parent: label
                });
            })
        }
    });

    form.insertAdjacentHTML('beforeend', `
    <div class="card__description">
        <p class="card__subtitle card__description-title">Описание</p>

        <p class="card__description-text">${description}</p>
      </div>
    `);

    const count = renderCount(1, 'card__count');

    const addCart = createElement('button', {
        className: 'card__add-cart main-button',
        type: 'submit',
        textContent: 'В корзину'
    });

    const favoriteBtn = createElement('button', {
        className: `card__favorite favorite
            ${getFavorite().includes(id) ? 'favorite_active' : ''}`,
        ariaLabel: 'Добавить в избранное',
        type: 'button',
    }, {cb(elem) {
        elem.dataset.id = id;
        elem.addEventListener('click', handlerFavorite);
        }
    });

    createElement('div', {
        className: 'card__control',
    }, {
        parent: form, appends: [count, addCart, favoriteBtn],
    });
};