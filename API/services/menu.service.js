import menuDummyData from "../utils/menuDummyData"

const MenuService = {
    addMenu(menu) {
        const newMenu = menu;
        menuDummyData.menu = newMenu;
        return newMenu;
    },

    getMenu() {
        return menuDummyData.menu;
    }
}

export default MenuService;
