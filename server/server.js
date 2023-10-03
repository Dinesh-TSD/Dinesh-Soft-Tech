import express from "express";
import mysql from "mysql";
import cors from "cors";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";

const salt = 10;

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "website"
})

app.post('/signup', (req, res) => {
	const sql = "INSERT INTO lleo (`name`,`email`,`password`) VALUES (?)";
	bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
		if (err) return res.json({ Error: "Error for hash password" });
		const values = [
			req.body.name,
			req.body.email,
			hash
		]
		db.query(sql, [values], (err, result) => {
			if (err) return res.json({ Error: "Insert error" });
			return res.json({ Status: "Success" });
		})
	})

})


app.listen(5000, () => {
	console.log("success...");
})
