const app = require("express")();

const config = require("./knexfile.js");
const knex = require("knex")(config[process.env.NODE_ENV]);

app.get("/", (req, res) => {
	res.send(process.env.GREETING);
});

app.get("/add/:name", (req, res) => {
	// Ersätt person med den skapade personen från databasen
	const person = {
		id: 0,
		name: "Ryan",
	};

	res.send(person);
});

app.get("/list", (req, res) => {
	// Ersätt people med alla personer från databasen
	const people = [
		{
			id: 0,
			name: "Ryan",
		},
	];

	res.send(people);
});

app.listen(process.env.PORT, () => {
	console.log(`Server is listening on port ${process.env.PORT}`);
});
