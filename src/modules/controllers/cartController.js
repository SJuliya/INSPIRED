import {renderNavigation} from "../render/renderNavigation";
import {renderHero} from "../render/renderHero";
import {renderCard} from "../render/renderCard";
import {renderProducts} from "../render/renderProducts";
import {renderCart} from "../render/renderCart";
import {renderOrder} from "../render/renderOrder";

export const addProductCart = (product) => {
    console.log("-> product", product);
}

export const cartController = () => {
    renderNavigation({render: false});
    renderHero({render: false});
    renderCard({render: false});
    renderProducts({render: false});
    renderCart({render: true});
    renderOrder({render: true});
}