import db from "../../db";
import { query } from "../constant/category";

export const categoryService = {
    findAll: async () => {
        return (await db.query(query.findAll)).rows;
    },
    findById: async (id) => {
        const data = (await db.query(query.findById, [id]));
        const result = data.rows;
        const formattedResult = result.reduce((acc, curr) => {
            const { categoryid, name, id, title, thumbnail, image, createdate, staffid } = curr;
            if (!acc.categoryid) acc.categoryid = categoryid;
            if (!acc.name) acc.name = name;
            if (!acc.listposts) acc.listposts = [];
            acc.listposts.push({ id, title, thumbnail, image, createdate, staffid });
            return acc;
        }, {});
        return formattedResult;
        // return result;
    }


}