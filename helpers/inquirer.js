const inquirer = require("inquirer");
const { pausa } = require("./mensajes");

require("colors");

const menuOpt = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que deseas hacer?",
    choices: [
      {
        value: "1",
        name: `1. Crear tarea`,
      },
      {
        value: "2",
        name: `2. Listar tareas`,
      },
      {
        value: "3",
        name: `3. Listar tareas completadas`,
      },
      {
        value: "4",
        name: `4. Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `5. Completar tarea(s)`,
      },
      {
        value: "6",
        name: `6. Borrar tareas`,
      },
      {
        value: "0",
        name: `0. Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("======================".green);
  console.log("Seleccione una opción:".green);
  console.log("======================".green);

  const { opcion } = await inquirer.prompt(menuOpt);

  return opcion;
};

const pause = async () => {
  await inquirer.prompt([
    {
      type: "input",
      message: `Presiones ${"ENTER".green} para continuar...`,
      name: "enter",
    },
  ]);
};

module.exports = {
  inquirerMenu,
  pause,
};
