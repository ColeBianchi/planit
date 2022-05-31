import * as https from 'https';
import * as fs from 'fs';
import * as url from 'url';
import { planit } from './models/planit';

const options = {
	port: 8080
}

const key = fs.readFileSync(process.env.PRIVKEY);
const cert = fs.readFileSync(process.env.FULLCHAIN);

const fake_db:planit[] = [
	{
		id: "111222333",
		owner: "Cole Bianchi",
		open: true
	},
	{
		id: "444555666",
		owner: "Katey Powell",
		open: false
	}
]

https.createServer({ key: key, cert: cert}, (req, res) =>
{
	let queryData = url.parse(req.url, true).query;
	console.log(req.url);

	if (req.url.startsWith("/id"))
	{
		let reqNum:string = queryData.id as string;
		let id:planit[] = fake_db.filter(p => p.id == reqNum);

		if (id != null && id.length > 0)
		{
			res.setHeader("content-type", "application/json");
			res.setHeader("status", 200);
			res.end(JSON.stringify(id[0]));
		}
		else
		{
			res.setHeader("status", 200);
			res.end("{}");
		}
	}
	else
	{
		res.writeHead(404);
		res.end("404");
	}
}
).listen(options.port);

console.info("Listening on " + options.port);