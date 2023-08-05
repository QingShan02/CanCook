import db from "../../db";
import { query } from "../constant/directory";

export const directoryService = {
    findAll: async () => {
        return (await db.query(query.findAll)).rows;
    },
    findById: async (id) => {
        const data = (await db.query(query.findById, [id]));
        const result = data.rows;
        const formattedResult = result.reduce((acc, curr) => {
            const { directoryid, name, id, title, thumbnail, content, createdate, staffid } = curr;
            if (!acc.directoryid) acc.directoryid = directoryid;
            if (!acc.name) acc.name = name;
            if (!acc.listArticle) acc.listArticle = [];
            acc.listArticle.push({ id, title, thumbnail, content, createdate, staffid });
            return acc;
        }, {});

        return formattedResult;
    }


}