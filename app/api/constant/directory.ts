export const query = {
    findAll: "select * from directory",
    findById: "SELECT directory.id as directoryid ,directory.name, article.* FROM directory JOIN directoryofarticle ON directory.id = directoryofarticle.directoryId JOIN article ON directoryofarticle.articleId = article.id WHERE directory.id = $1"
}