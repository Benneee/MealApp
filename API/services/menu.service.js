import menuDummyData from "../utils/menuDummyData"

const MenuService = {
    addMenu(menu) {
        const newMenu = menu;
        menuDummyData.menu.push(newMenu);
        return newMenu;
    },

    getMenu() {
        return menuDummyData.menu;
    }
}

export default MenuService;
