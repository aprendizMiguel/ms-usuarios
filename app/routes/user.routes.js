import { Router } from "express";
import * as controller from "../controllers/user.controllers";

const route = Router();

route.get("/", (req, res) => {
    res.send(`<h1>buenas buenas<h1>`);
});

// Mostrar todos los resgitros
route.get("/user", controller.findAllUser);

// Mostrar por id
route.get("/user/:id", controller.findUser);

// INSERTA INFO
route.post("/user", controller.insertUser);

// ACTUALIZAR INFO
route.put("/user/:id", controller.updateUser);

// ELIMINAR INFO
route.delete("/user/:id", controller.deleteUser);

export default route;
