import {renderNavigation} from "../render/renderNavigation";
import {renderHero} from "../render/renderHero";
import {renderCard} from "../render/renderCard";
import {renderProducts} from "../render/renderProducts";
import {renderCart} from "../render/renderCart";
import {renderOrder} from "../render/renderOrder";

export const getCart = () => JSON.parse(localStorage.getItem('cart') || '[]');

export const addProductCart = (product, equal) => {
    let isCart= false;

    const productList = getCart().map(item => {
        if (item.id === product.id &&
            item.color === product.color &&
            item.size === product.size
        ) {
            if (equal) {
                item.count = product.count;

            } else {
                let countAdded = parseInt(product.count, 10);
                item.count += (isNaN(countAdded) ? 0 : countAdded);
            }

            isCart = true;
        }

        return item;
    });

    if (!isCart) {
        productList.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(productList));
};

export const removeCart = (product) => {
    const productList = getCart().filter(item =>
        !(item.id === product.id &&
          item.color === product.color &&
          item.size === product.size)
    );

    localStorage.setItem('cart', JSON.stringify(productList));

    return true;
};

export const cartController = () => {
    renderNavigation({render: false});
    renderHero({render: false});
    renderCard({render: false});
    renderProducts({render: false});
    renderCart({render: true});
    renderOrder({render: true});
}