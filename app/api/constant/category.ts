export const query = {
    findAll: "select * from category",
    findById: "SELECT category.id as categoryid ,category.name, article.* FROM category JOIN categoryofarticle ON category.id = categoryofarticle.categoryId JOIN article ON categoryofarticle.articleId = article.id WHERE category.id = $1"
}