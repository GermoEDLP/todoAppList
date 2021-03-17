const { mostrarMenu, pausa } = require("./helpers/mensajes");

require("colors");

const main = async () => {
  console.log("Hola mundo");

  let opt = "";
  do {
    opt = await mostrarMenu();
    console.log({ opt });

    if (opt !== "0") await pausa();
  } while (opt !== "0");
};

main();
