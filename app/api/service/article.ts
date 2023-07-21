import db from '../../db'
import { query } from '../constant/article'

export const articleService = {

    findAll: async () =>{
        return (await db.query(query.findAll)).rows;
    },
    findCountLikeAll: async () =>{
        return (await db.query(query.countLikeAll)).rows;
    },
    findById: async (id) => {
        const data = (await db.query(query.findById,[id]));
        return data.rows[0];
    },
    findByTitle: async (title) => {
        const data = (await db.query(query.findByTitle,[title]));
        return data.rows[0];
    },
   findByCreateDate: async (createDate) => {
        const data = (await db.query(query.findBycreateDate,[createDate]));
        return data.rows[0];
   },
   countLike : async (id) => {
    const data = (await db.query(query.countLike,[id]));
        return data.rows[0];
   },
   countLikebyuserid : async (userid) => {
    const data = (await db.query(query.countLike,[userid]));
        return data.rows[0];
   },
   totalLikeAndComment: async (id) => {
        const data = (await db.query(query.totalLikeAndComment,[id]));
        return data.rows[0];
   },
   update: async (title, content, createdate, id) => {
        const data = (await db.query(query.update, [title, content, createdate, id]))
   }
}