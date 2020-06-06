import express  from "express";
import { celebrate, Joi } from "celebrate";

import multer from "multer";
import multerConfig from "./config/multer";

import PointsControler from "./controller/PointsController";
import ItemsControler from "./controller/ItemsController";

const routes = express.Router();
const upload = multer(multerConfig);

const pointsControler = new PointsControler(); 
const itemsControler = new ItemsControler(); 

routes.get('/items', itemsControler.index);

routes.get("/points/:id", pointsControler.show);
routes.get("/points", pointsControler.index);

routes.post(
    "/points", 
    upload.single("image"),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required()
        })
    }, {
        abortEarly: false
    }), 
    pointsControler.create);

export default routes;
