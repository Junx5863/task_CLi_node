require("colors");

const { guardarDb, leerDb } = require("./src/helpers/guardar_archivo");
const { inquirerMenu, pause, leerInput } = require("./src/helpers/inquier");
const Tareas = require("./src/models/tareas");

const main = async (params) => {

  let opt = "";
  const tareas = new Tareas();
  const tareasDb = leerDb();

    if (tareasDb) {
        tareas.cargarTareasFromArray(tareasDb);
    }


  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        //crear Tarea
        const desc = await leerInput("Descripción:");
        tareas.crearTarea( desc );

        break;
      case '2':
        tareas.listadoCompleto();

        break;
    }

    guardarDb( tareas.listadoArr );

    await pause();
  } while (opt !== "0");
};

main();
