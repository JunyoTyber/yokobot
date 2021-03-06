const {readdirSync} = require("fs");
const ascii = require("ascii-table");
const table = new ascii().setHeading("Comando", "Estado").setTitle("Comandos");

module.exports = (client) => {
    readdirSync("./commands/").forEach(dir => {

        const commands = readdirSync(`./commands/${dir}/`).filter(f => f.endsWith(".js"));

        for(let file of commands){
            let pull = require(`../commands/${dir}/${file}`);

            if(pull.name){
                client.commands.set(pull.name, pull);
                table.addRow(file, '✅');
            }else{
                table.addRow(file, '❌ -> está faltando alguma coisa??');
                continue;
            }

            if (pull.aliases && Array.isArray(pull.aliases))
                pull.aliases.forEach(aliases => client.aliases.set(aliases, pull.name));
        }

        console.log(table.toString());

    })
}