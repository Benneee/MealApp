import MenuService from "../services/menu.service";

const MenuController = {
    getMenu(req, res) {
        const dayMenu = MenuService.getMenu();
        return res.json({
            status: "success",
            data: dayMenu
        }).status(200);
    },

    addMenu(req, res) {
        /* 
            Expect JSON of the following format:

            {
                date: "the desired date",
                meals: [
                    collection of meals (likely 3);
                ]
            }
        
        */

        const newMenu = req.body;
        const createdMenu = MenuService.addMenu(newMenu);
        res.status(201);
        return res.json({
            status: "new menu successfully created",
            data: createdMenu
        });
    }
}

export default MenuController;