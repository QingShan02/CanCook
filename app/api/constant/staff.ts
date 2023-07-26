export const query = {
    findAll: "select * from staff",
    findById: "select * from staff where id = $1",
    login:"select * from staff where email= $1 and password = $2",
    findByEmail:"select id from staff where email= $1"
}