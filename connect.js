var knex = require("knex")({
    client: 'mysql',
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "navgurukul",
        database: "weather_crud"
    },
    useNullAsDefault: true
});
module.exports = knex;

knex.schema.hasTable("weather").then((exists) => {
    if (!exists) {
        return knex.schema.createTable("weather", (table) => {
            table.increments('city_id')
            table.string('Data')
            table.string('city_name')
            table.string('weather_main')
            table.string('weather_description')
            table.string("id")
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
})