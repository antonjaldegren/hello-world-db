const app = require("express")();

const config = require("./knexfile.js");
const knex = require("knex")(config[process.env.NODE_ENV]);

app.get("/", (req, res) => {
	res.send(process.env.GREETING);
});

app.get("/add/:name", async (req, res) => {
	const name = req.params.name;
	await knex("people").insert({ name });
	const newPerson = await knex("people").first().where({ name });

	res.send(newPerson);
});

app.get("/list", async (req, res) => {
	const people = await knex("people").select();

	res.send(people);
});

app.listen(process.env.PORT, () => {
	console.log(`Server is listening on port ${process.env.PORT}`);
});
