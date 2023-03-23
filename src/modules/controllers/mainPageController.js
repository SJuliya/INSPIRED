import {renderNavigation} from "../render/renderNavigation.js";
import {renderHero} from "../render/renderHero.js";
import {renderProducts} from "../render/renderProducts.js";
import {renderCard} from "../render/renderCard";
import {renderCart} from "../render/renderCart";
import {renderOrder} from "../render/renderOrder";

export const mainPageController = (gender = 'women') => {
    renderNavigation({gender, render: true});
    renderHero({gender, render: true});
    renderCard({render: false});
    renderProducts({title: 'Новинки', params: {gender}, render: true});
    renderCart({render: false});
    renderOrder({render: false});
};