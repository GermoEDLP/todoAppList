const fs = require("fs");

const path = "./db/data.txt";

const guardarArchivo = (data) => {
  fs.writeFileSync(path, JSON.stringify(data));
};

const leerArchivo = () => {
  if (!fs.existsSync(path)) {
    return null;
  }
    const info = fs.readFileSync(path, { encoding: "utf-8" });
    
  return JSON.parse(info);
};

module.exports = {
  guardarArchivo,
  leerArchivo,
};
