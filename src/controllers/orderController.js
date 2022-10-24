import OrderRepository from "../repositories/Order.repository.js";
const orderRepository = new OrderRepository();

const addOrder = async (req, res) => {
    try {
        const order = await orderRepository.createOrder(req.body);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ msg: "Error while adding order" })
    }
};

const getAllOrders = async (req, res) => {
    try {
        const orders = await orderRepository.getAllOrders();
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({ msg: "Error while querying all orders" });
    }
};

const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await orderRepository.getOrderById(id);
        if (!order) return res.status(404).json({ msg: "This order doesn't exist" });
        res.status(200).json(order);
    } catch (error) {
        return res.status(500).json({ msg: "Error while querying order" });
    }
};

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const orderUpdated = await orderRepository.updateOrder(id, req.body);
        if (!orderUpdated) {
            return res.status(404).json({ msg: "This order wasn't updated" });
        }
        res.status(200).json({ msg: "Order updated" });
    } catch (error) {
        return res.status(500).json({ msg: "Error while updating order" });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const orderDeleted = await orderRepository.deleteOrder(id);
        if (!orderDeleted) {
            return res.status(404).json({ msg: "This order wasn't deleted" });
        }
        res.status(200).json({ msg: "Order deleted" });
    } catch (error) {
        return res.status(500).json({ msg: "Error while deleting order" });
    }
};

export {addOrder, getAllOrders, getOrderById, updateOrder, deleteOrder};