

import { con } from "../config/db.js";
import shorturl from 'node-url-shortener'

export const saveURL = async (req, res) => {
	const { OrginalLink } = req.body;

	try {
		// const shortenLink = shortLink()
		const shortenLink = await shrtByPack(OrginalLink)
		let sql = `INSERT INTO url ( OrginalLink, shortenLink)   VALUES ('${OrginalLink}', '${shortenLink}')`;
		con.query(sql, (err, result) => {
			if (err) {
				console.log(err);

				return res.json({
					success: false,
					message: "Something went wrong",
				});
			} else {
				const data = {
					url: OrginalLink,
					short: shortenLink

				}
				return res.json(data)
			}

		})







	} catch (error) {
		console.error(error);
		return res.json({
			success: false,
			message: "Error shortening URL",
		});
	}
};


export const getLink = async (req, res) => {
	const sql = `SELECT * FROM url ORDER BY LinkId DESC LIMIT 1`;

	con.query(sql, (error, results) => {
		if (error) {
			console.error(error);
			return res.status(500).json({ message: 'Error fetching data' });
		}

		if (results.length === 0) {
			return res.json({ message: 'No elements found in the table' });
		}


		setTimeout(() => {
			const lastElement = results[0];
			res.json(lastElement);
		}, [2000])
	});
}

const shortLink = () => {
	let shortenLink = ""
	const abc = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789";

	for (let i = 0; i < 7; i++) {
		shortenLink += abc.charAt(Math.ceil(Math.random() * 62));
	} return `http://localhost/${shortenLink}`;
}

export const shrtByPack = async (longUrl) => {
	return new Promise((resolve, reject) => {
		shorturl.short(longUrl, function (err, url) {
			if (err) {
				reject(err);
			} else {
				resolve(url);
			}
			return url
		});
	});
};