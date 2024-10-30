const fs = require('fs');
const path = require('path');

// Define la ruta del directorio que deseas escanear
const directoryPath = path.join(__dirname);

// Clases a eliminar
const classesToRemove = ['bg-bluegray-400', 'bg-bluegray-100'];

// Función para eliminar las clases de un archivo
function removeClassesFromFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error leyendo el archivo ${filePath}:`, err);
            return;
        }

        // Reemplaza las clases en el contenido del archivo
        let updatedData = data;
        classesToRemove.forEach(className => {
            const regex = new RegExp(`\\b${className}\\b`, 'g');
            updatedData = updatedData.replace(regex, '');
        });

        // Solo escribir el archivo si ha habido cambios
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

// Función para recorrer el directorio
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
                    // Recursivamente recorrer el subdirectorio
                    walkDir(filePath);
                } else if (path.extname(file) === '.jsx') {
                    // Si es un archivo .jsx, eliminar clases
                    removeClassesFromFile(filePath);
                }
            });
        });
    });
}

// Iniciar el recorrido desde la ruta base
walkDir(directoryPath);
