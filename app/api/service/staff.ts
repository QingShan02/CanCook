import db from "../../db";
import { query } from "../constant/staff";

export const staffService = {
    findAll: async () => {
        return (await db.query(query.findAll)).rows;
    },
    findById: async (id) => {
        const data = (await db.query(query.findById, [id]));
        return data.rows[0];
    },
    login: async (object) =>{
        const result = await db.query(query.login,[object.email,object.password]);
        return result.rows[0];
    },
    findByEmail: async(email)=>{
        const result = await db.query(query.findByEmail,[email]);
        return result.rows[0];
    }
}