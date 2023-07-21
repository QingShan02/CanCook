
export const query = {
    findAll:"select * from article ",
    findById: "select * from article where id = $1",
    findByTitle : "select * from article where title = $1",
    findBycreateDate : "select * from createDate where createDate = $1",
    countLike :"SELECT p.id, p.title, COUNT(lp.id) AS like_count FROM article AS p LEFT JOIN likeofarticle AS lop ON p.id = lop.articleid LEFT JOIN likearticle AS lp ON lop.likeid = lp.id WHERE p.id=$1 GROUP BY p.id, p.title",
    countLikeAll:"SELECT p.id, p.title, COUNT(lp.id) AS like_count FROM article AS p LEFT JOIN likeofarticle AS lop ON p.id = lop.articleid LEFT JOIN likearticle AS lp ON lop.likeid = lp.id GROUP BY p.id, p.title",
    countLikeByUserId:"SELECT p.id, p.title, COUNT(lp.id) AS like_count FROM article AS p LEFT JOIN likeofarticle AS lop ON p.id = lop.articleid LEFT JOIN likearticle AS lp ON lop.likeid = lp.id where lp.userid = $1 GROUP BY p.id, p.title",
    totalLikeAndComment: "SELECT p.id AS article_id, p.title,p.content,p.createdate, p.staffid ,COUNT(lop.likeid) AS total_like,COUNT(cop.commentid) AS total_comment FROM article AS p LEFT JOIN likeofarticle AS lop ON p.id = lop.articleid LEFT JOIN commentofarticle AS cop ON p.id = cop.articleid where p.id= $1 GROUP BY p.id, p.title",
    update:"UPDATE article SET title = $1, content = $2, createdate = $3 WHERE id = $4"
}