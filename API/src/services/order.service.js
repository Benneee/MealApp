import orderDummyData from "../utils/orderDummyData";
import Order from "../models/order.model";

const OrderService = {
    fetchAllOrders() {
        const validOrders = orderDummyData.orders.map((order) => {
            const newOrder = new Order();
            newOrder.id = order.id;
            newOrder.meal_order = order.meal_order;
            newOrder.customer_name = order.customer_name;
            newOrder.customer_id = order.customer_id;
            newOrder.customer_address = order.customer_address;
            newOrder.customer_phone_number = order.customer_phone_number;
            newOrder.purchase_total = order.purchase_total;
            return newOrder
        });
        return validOrders;
    },

    addOrder(order) {
        const orderLength = orderDummyData.orders.length;
        const lastOrderId = orderDummyData.orders[orderLength - 1].id;
        const newOrderId = lastOrderId + 1;
        order.id = newOrderId;
        orderDummyData.orders.push(order);
        return order;
    },

    editAnOrder(id, order) {
        const checkOrderId = parseInt(id, Number);
        const newOrderList = orderDummyData.orders.filter(order => order.id !== checkOrderId);
        const orderIdAvailable = (orderDummyData.orders.length !== newOrderList.length);
        const editedOrder = {
            id: checkOrderId,           
            meal_order: order.meal_order,
            customer_name: order.customer_name,
            customer_id: order.customer_id,
            customer_address: order.customer_address,
            customer_phone_number: order.customer_phone_number,
            purchase_total: order.purchase_total,
        };
        orderDummyData.orders.push(editedOrder);
        return {
            editedOrder,
            orderIdAvailable,
        };
    }
};

export default OrderService;
