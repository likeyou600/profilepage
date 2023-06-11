import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from "element-plus";
import locale from "element-plus/lib/locale/lang/zh-tw";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App);

app.config.globalProperties.$WebsiteData =
    [{
        name: 'PUmountain', title: '靜宜大學器材租借系統', imgsrc: [require('@/assets/portfolio/PUmountain.jpg'), require('@/assets/portfolio/PUmountain2.jpg'), require('@/assets/portfolio/PUmountain3.jpg'), require('@/assets/portfolio/PUmountain4.jpg')], tech: ['Laravel', 'MariaDB', 'BootStarp5']
        , content: '器材租借系統，並有後臺管理系統。提供用戶輕鬆地預約租借物品。', website: 'https://pumountain.bakerychu.com/'
    },
    {
        name: 'coding', title: '程式交流網', imgsrc: [require('@/assets/portfolio/coding.jpg'), require('@/assets/portfolio/coding2.jpg'), require('@/assets/portfolio/coding3.jpg'), require('@/assets/portfolio/coding4.jpg')], tech: ['Laravel', 'MariaDB', 'Vue', 'Axios', 'CodeMirror', 'Element-Plus', 'BootStarp5']
        , content: '程式交流網，並有後臺管理系統。提供用戶一個論壇來交流程式。', website: 'https://code.bakerychu.com/'
    },
    {
        name: 'artworld', title: '藝想世界', imgsrc: [require('@/assets/portfolio/artworld.jpg'), require('@/assets/portfolio/artworld2.jpg'), require('@/assets/portfolio/artworld3.jpg'), require('@/assets/portfolio/artworld4.jpg')], tech: ['JS', '政府API', 'BootStarp5']
        , content: '藝想世界，使用政府提供的API資料，並在網頁上提供搜尋檢視的功能。', website: 'https://artworld.bakerychu.com/'
    },
    {
        name: 'stockworld', title: '股票世界', imgsrc: [require('@/assets/portfolio/stockworld.jpg'), require('@/assets/portfolio/stockworld2.jpg'), require('@/assets/portfolio/stockworld3.jpg'),], tech: ['Laravel', 'MariaDB', 'Vue', 'Axios', 'Element-Plus', 'BootStarp5']
        , content: '股票世界，使用證交所的API資料，並在網頁上提供圖表的功能。', website: 'https://stock.bakerychu.com/bulletin/ranking'
    },
    {
        name: 'mtc', title: '公司形象網', imgsrc: [require('@/assets/portfolio/mtc.jpg')], tech: ['BootStarp5']
        , content: '提供客製化的網頁設計。', website: 'https://test.bakerychu.com/mtc/mtc.html'
    },
    {
        name: 'japan', title: '日本旅遊網', imgsrc: [require('@/assets/portfolio/japan.jpg'), require('@/assets/portfolio/japan2.jpg')], tech: ['Laravel', 'BootStarp5']
        , content: '提供客製化的網頁設計。', website: 'https://japan.bakerychu.com/'
    }];

app.config.globalProperties.$ContactData =
    [{ name: 'Line', title: 'Line : bakery678', website: 'https://line.me/ti/p/X0XBiAnjFw' },
    { name: 'Gmail', title: 'Gmail : likeyou600@gmail.com', website: 'mailto:likeyou600@gmail.com' },
    { name: 'Github', title: 'Github : likeyou600', website: 'https://github.com/likeyou600' },
    { name: 'Phone', title: '手機 : 0981940611', website: 'tel:0981940611' },];

app.config.globalProperties.$ServiceData =
    [{ introname: 'coding', title: '會員互動平台', emoji: '👥', content: '我們替您建立一個功能齊全的會員互動平台，讓您的會員能夠輕鬆留言、瀏覽公告、收取重要訊息，並參與活躍的論壇社群。' },
    { introname: 'PUmountain', title: '線上租借平台', emoji: '🤝', content: '我們替您建立一個便捷的物品租借系統。這將使您的用戶能夠輕鬆地預約租借物品。' },
    { introname: 'stockworld', title: '數據分析和可視化', emoji: '📊', content: '我們替您將數據以直觀的方式呈現，透過精美的圖表、圖形和交互式界面，讓您能夠輕鬆地查看和分析數據。' },
    { title: '自動化網路資料收集', emoji: '⛏', content: '我們運用網頁爬蟲技術，定期從特定的網站或網路資源收集數據。這將為您提供最新的資訊和數據。' },
    { introname: 'mtc', title: '網頁設計和改版', emoji: '🎨', content: '我們提供專業的網頁設計服務，打造令人印象深刻的網頁界面。或是網頁改版，以實現響應式設計，使您的網站能夠在各種設備上呈現出色的表現。' },
    { introname: 'artworld', title: '客製化解決方案', emoji: '👑', content: '我們將根據您的具體需求，提供客製化的解決方案。如人員排班系統、預約系統以及其他特定功能的開發。我們致力於為您提供量身定制的解決方案，以滿足您的獨特業務需求。' }]

app.config.globalProperties.$ServiceServerData =
    { title: 'Linux Docker 部屬', content: '我們替您的Linux 主機 或 虛擬機 或 windows Docker部署 web server，並使用 Apache 作為 Web 伺服器，以及 MariaDB作為資料庫管理系統。並將網站前後端部署上線。' };

app.use(ElementPlus, {
    locale: { locale },
});

app.use(router).use(MotionPlugin).mount('#app')
