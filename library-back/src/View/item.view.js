const express = require("express")

const {
    getItem,
    getAllItens,
    createItem,
    updateItem,
    deleteItem,
} = require("../Controller/item.controller")

const ItemRoute = express.Router();

ItemRoute.get("api_v1/route/get_itens", getItem)
ItemRoute.get("api_v1/route/get_item/:id", getAllItens)
ItemRoute.post("api_v1/route/create_item", createItem)
ItemRoute.put("api_v1/route/update_item/:id", updateItem)
ItemRoute.delete("api_v1/route/delete_item/:id", deleteItem)
