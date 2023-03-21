import {renderNavigation} from "../render/renderNavigation.js";
import {renderHero} from "../render/renderHero.js";
import {renderProducts} from "../render/renderProducts.js";
import {renderCard} from "../render/renderCard";

export const mainPageController = (gender = 'women') => {
    renderNavigation(gender);
    renderHero(gender);
    renderCard(false);
    renderProducts('Новинки', {gender});
}