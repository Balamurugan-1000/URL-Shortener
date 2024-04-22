import mysql from 'mysql';
export let con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "mysql"
});
const DB = () => con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");

});
export default DB;