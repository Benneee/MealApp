import OrderService from "../services/order.service";

const OrderController =  {
    getAllOrders(req, res) {
        const allOrders = OrderService.fetchAllOrders();
        return res.json({
            status: "success",
            data: allOrders
        }).status(200);
    },

    addOrder(req, res) {
        /*
            Expect JSON of the following format
            {
                meal_order: "meal: order",
                customer_name: "customer_name",
                customer_id: "customer_id",
                customer_address: "customer_address",
                customer_phone_number: "customer_phone_number",
                customer_address: "customer_address",
                purchase_total: "purchase_total"
            }
        */
        const newOrder = req.body;
        const createdOrder = OrderService.addOrder(newOrder);
        return res.json({
            status: "success",
            data: createdOrder
        }).status(201);     
    },

    editOrder(req, res) {
               /*
            Expect JSON of the following format
            {
                meal_order: "meal: order",
                customer_name: "customer_name",
                customer_id: "customer_id",
                customer_address: "customer_address",
                customer_phone_number: "customer_phone_number",
                customer_address: "customer_address",
                purchase_total: "purchase_total"
            }
        */

        const { id } = req.params;
        const entry = req.body;
        const result = OrderService.editAnOrder(id, entry);
        let response = {};
        if (result.orderIdAvailable) {
            response = {
                ...response,
                status: 'success',
                message: `Order with ${id} edited successfully.`,
                data: result.editedOrder,
            };
            status = 200;
        } else {
            response = {
                ...response,
                status: 'error',
                message: `Order with ${id} not found`,
            };
            status = 404;
        }
        return res.json({
            response
        }).status(status);
    }
}