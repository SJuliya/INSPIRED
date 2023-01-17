import './index.html';
import './index.scss';
import {router} from "./modules/router";
import {renderHeader} from "./modules/render/renderHeader.js";
import {renderFooter} from "./modules/render/renderFooter.js";
import {mainPage} from "./modules/mainPage/mainPage.js";
import {womanMainPage} from "./modules/mainPage/womenMainPage";
import {manMainPage} from "./modules/mainPage/menMainPage";

router.on('*', () => {
    renderHeader();
    renderFooter();
});

router.on('/', () => {
    mainPage();
});

router.on('women', () => {
    womanMainPage();
});

router.on('men', () => {
    manMainPage();
});

/*setTimeout(() => {
    router.navigate('men');
}, 3000)

setTimeout(() => {
    router.navigate('women');
}, 6000)*/

router.resolve();


