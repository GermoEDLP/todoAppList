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
        name: `${'1.'.yellow} Crear tarea`,
      },
      {
        value: "2",
        name: `${'2.'.yellow} Listar tareas`,
      },
      {
        value: "3",
        name: `${'3.'.yellow} Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${'4.'.yellow} Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${'5.'.yellow} Completar tarea(s)`,
      },
      {
        value: "6",
        name: `${'6.'.yellow} Borrar tareas`,
      },
      {
        value: "0",
        name: `${'0.'.yellow} Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("======================".green);
  console.log("Seleccione una opción:".white);
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

const leerInput = async(message)=>{

    const question = [{
        type: 'input',
        message,
        name: 'desc',
        validate(value){
            if(value.length === 0 ){
                return 'Por favor ingrese un valor...'
            }
            return true;
        }
    }];

    const {desc} = await inquirer.prompt(question);
    return desc;

}

module.exports = {
  inquirerMenu,
  pause,
  leerInput
};
