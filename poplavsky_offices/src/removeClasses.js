const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname);

const classesToRemove = ['bg-bluegray-400', 'bg-bluegray-100'];

function removeClassesFromFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error leyendo el archivo ${filePath}:`, err);
            return;
        }

        let updatedData = data;
        classesToRemove.forEach(className => {
            const regex = new RegExp(`\\b${className}\\b`, 'g');
            updatedData = updatedData.replace(regex, '');
        });

        if (updatedData !== data) {
            fs.writeFile(filePath, updatedData, 'utf8', (err) => {
                if (err) {
                    console.error(`Error escribiendo en el archivo ${filePath}:`, err);
                } else {
                    console.log(`Clases removidas de ${filePath}`);
                }
            });
        }
    });
}

function walkDir(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(`Error leyendo el directorio ${dir}:`, err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(dir, file);
            fs.stat(filePath, (err, stat) => {
                if (err) {
                    console.error(`Error obteniendo el estado del archivo ${filePath}:`, err);
                    return;
                }

                if (stat.isDirectory()) {
                    walkDir(filePath);
                } else if (path.extname(file) === '.jsx') {
                    removeClassesFromFile(filePath);
                }
            });
        });
    });
}

walkDir(directoryPath);
