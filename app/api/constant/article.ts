
export const query = {
    findAll: "select id ,title, content, thumbnail, TO_CHAR(createDate, 'dd/MM/yyyy') as createDate, staffId from article ",
    findById: "select * from article where id = $1",
    findByTitle: "select * from article where title = $1",
    findBycreateDate: "select * from creaarticle Date where createDate = $1",
    countLike: "SELECT p.id, p.title, COUNT(lp.id) AS like_count FROM article AS p LEFT JOIN likeofarticle AS lop ON p.id = lop.articleid LEFT JOIN likearticle AS lp ON lop.likeid = lp.id WHERE p.id=$1 GROUP BY p.id, p.title",
    countLikeAll: "SELECT p.id, p.title, COUNT(lp.id) AS like_count FROM article AS p LEFT JOIN likeofarticle AS lop ON p.id = lop.articleid LEFT JOIN likearticle AS lp ON lop.likeid = lp.id GROUP BY p.id, p.title",
    countLikeByUserId: "SELECT p.id, p.title, COUNT(lp.id) AS like_count FROM article AS p LEFT JOIN likeofarticle AS lop ON p.id = lop.articleid LEFT JOIN likearticle AS lp ON lop.likeid = lp.id where lp.userid = $1 GROUP BY p.id, p.title",
    totalLikeAndComment: `SELECT p.id AS articleid, p.title,p.content,p.createdate,p.staffid,COUNT(lop.likeid) AS totallike, COUNT(cop.commentid) AS totalcomment, c.id AS categoryid, c.name AS categoryname, d.id AS directoryid, d.name AS directoryname, p.view 
    FROM article AS p LEFT JOIN likeofarticle AS lop ON p.id = lop.articleid 
    LEFT JOIN commentofarticle AS cop ON p.id = cop.articleid LEFT JOIN categoryofarticle AS cop2 ON p.id = cop2.articleid 
    LEFT JOIN directoryofarticle AS dop ON p.id = dop.articleid LEFT JOIN category AS c ON cop2.categoryid = c.id 
    LEFT JOIN directory AS d ON dop.directoryid = d.id WHERE p.id = $1 
    GROUP BY p.id, p.title, c.id, c.name, d.id, d.name,c.id,c.name; `,
    update:"UPDATE article SET title = $1, content = $2, createdate = $3 WHERE id = $4",
    insert:"SELECT insert_article($1,$2,$3,$4,$5,$6,$7);",
    lastInsertId:"SELECT last_insert_id();",
    findContent:"select * from article where content = $1",
    findByPage:"select a.id ,a.title, a.content, a.thumbnail, TO_CHAR(createDate, 'dd/MM/yyyy') as createDate, s.name as staffName, a.view from article a join staff s on s.id = a.staffId order by a.id ASC  offset $1 limit 2",
    getSum: "select count(id) from article",
    deleteById:"delete from article where id = $1",
    updateView:"update article set view = view+1 where id =$1",
    sumView: "select sum(view) as sumView from article"
}