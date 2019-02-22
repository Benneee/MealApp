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
                meal_order: "meal_order",
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
        res.status(201);
        return res.json({
            status: "success",
            data: createdOrder
        })     
    },

    editOrder(req, res) {
        /*
            Expect JSON of the following format
            {
                meal_order: "meal_order",
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
        let status = 0;
        if (result.orderIdAvailable) {
            response = {
                ...response,
                status: 'success',
                message: `Order with id: ${id} edited successfully.`,
                data: result.editedOrder,
            };
            status = 202;
        } else {
            response = {
                ...response,
                status: 'error',
                message: `Order with id: ${id} not found`,
            };
            status = 404;
        }
        return res.status(status).json({
            response
        })
    }
}

export default OrderController;