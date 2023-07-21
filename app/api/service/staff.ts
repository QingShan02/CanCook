import db from "../../db";
import { query } from "../constant/staff";

export const staffService = {
    findAll:  async() => {
        return (await db.query(query.findAll)).rows ;
    },
    findById: async(id) =>{
        const data = (await db.query(query.findById,[id]));
       return data.rows[0];
    }
}