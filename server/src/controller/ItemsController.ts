import { Request, Response} from "express";
import knex from "../database/connection";

export default class ItemsController {
    async index(req: Request, res: Response) {

        const items = await knex("items").select("*");
        const serializedItems = items.map( item => {
            item["image_url"] = `http://192.168.15.14:3333/uploads/${item.image}`
            return item;
        })
        return res.json(serializedItems);
    }
}