export const query = {
    findAll: "select * from staff",
    findById: "SELECT directory.id as directoryid ,directory.name, posts.* FROM directory JOIN directoryofposts ON directory.id = directoryofposts.directoryId JOIN posts ON directoryofposts.postsId = posts.id WHERE directory.id = $1"
}