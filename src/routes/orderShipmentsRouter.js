import { Router } from "express";

import {
    getAllOrderShipmentsHandler,
    createOrderShipmentHandler,
    getOrderShipmentByIdHandler,
    updateOrderShipmentHandler,
    deleteOrderShipmentHandler,
} from "../handlers/orderShipmentsHandler.js";
import { getOrderByUser } from "../controllers/orderShipmentsController.js";
import { authenticateToken } from "../utils/helperToken/authenticateToken.js";

const orderShipmentsRouter = Router();
//hacer un endpoint con su controlador para que traiga todo los pedidos de un solo usuario. Se hace pasandole el token. 
orderShipmentsRouter.post("/", authenticateToken, createOrderShipmentHandler);
orderShipmentsRouter.get("/", getAllOrderShipmentsHandler);
orderShipmentsRouter.get("/:id", getOrderShipmentByIdHandler);
orderShipmentsRouter.put("/:id", updateOrderShipmentHandler);
orderShipmentsRouter.delete("/:id", deleteOrderShipmentHandler);
orderShipmentsRouter.get("/orderUser",authenticateToken, getOrderByUser)

export default orderShipmentsRouter;