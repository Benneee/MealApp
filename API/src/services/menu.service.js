import menuDummyData from "../utils/menuDummyData"

const MenuService = {
    addMenu(menu) {
        menuDummyData.menu.push(menu);
        return menuDummyData.menu;
    },

    getMenu() {
        return menuDummyData.menu;
    }
}

export default MenuService;
