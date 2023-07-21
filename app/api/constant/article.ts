
export const query = {
    findAll:"select * from posts ",
    findById: "select * from id where id = $1",
    findByTitle : "select * from title where title = $1",
    findBycreateDate : "select * from createDate where createDate = $1",
    countLike :"SELECT p.id, p.title, COUNT(lp.id) AS like_count FROM posts AS p LEFT JOIN likeofposts AS lop ON p.id = lop.postsid LEFT JOIN likeposts AS lp ON lop.likeid = lp.id WHERE p.id=$1 GROUP BY p.id, p.title",
    countLikeAll:"SELECT p.id, p.title, COUNT(lp.id) AS like_count FROM posts AS p LEFT JOIN likeofposts AS lop ON p.id = lop.postsid LEFT JOIN likeposts AS lp ON lop.likeid = lp.id GROUP BY p.id, p.title",
    countLikeByUserId:"SELECT p.id, p.title, COUNT(lp.id) AS like_count FROM posts AS p LEFT JOIN likeofposts AS lop ON p.id = lop.postsid LEFT JOIN likeposts AS lp ON lop.likeid = lp.id where lp.userid = $1 GROUP BY p.id, p.title",
    totalLikeAndComment: "SELECT p.id AS article_id, p.title,p.content,p.createdate, p.staffid ,COUNT(lop.likeid) AS total_like,COUNT(cop.commentid) AS total_comment FROM posts AS p LEFT JOIN likeofposts AS lop ON p.id = lop.postsid LEFT JOIN commentofposts AS cop ON p.id = cop.postsid where p.id= $1 GROUP BY p.id, p.title"
}