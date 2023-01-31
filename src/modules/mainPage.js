import {renderNavigation} from "./render/renderNavigation.js";
import {renderHero} from "./render/renderHero.js";
import {renderProducts} from "./render/renderProducts.js";

export const mainPage = (gender = 'women') => {
    renderNavigation(gender);
    renderHero(gender);
    renderProducts('Новинки', {gender});
}