const fs = require('fs');
const path = require('path');

// Ruta al directorio que contiene todas las carpetas con info.json
const baseDir = path.join(__dirname, '../../public/data');

//validar el contenido de un archivo JSON
function validarJsonCompleto(infoData) {
  // Verificar que el campo 'nombre' existe y no está vacío
  expect(infoData).toHaveProperty('nombre');
  expect(infoData.nombre).not.toBe('');

  // Verificar que el campo 'edad' existe y es un número
  expect(infoData).toHaveProperty('edad');
  expect(typeof infoData.edad).toBe('number');

  // Verificar que el campo 'carrera' existe y no está vacío
  expect(infoData).toHaveProperty('carrera');
  expect(infoData.carrera).not.toBe('');

  // Verificar que el campo 'semestre' existe y es un número
  expect(infoData).toHaveProperty('semestre');
  expect(typeof infoData.semestre).toBe('number');

  // Verificar que el campo 'gustos' existe y es un array
  expect(infoData).toHaveProperty('gustos');
  expect(Array.isArray(infoData.gustos)).toBe(true);

  // Verificar que el campo 'noGustos' existe y es un array
  expect(infoData).toHaveProperty('noGustos');
  expect(Array.isArray(infoData.noGustos)).toBe(true);

  // Verificar que el campo 'foto' existe y no está vacío
  expect(infoData).toHaveProperty('foto');
  expect(infoData.foto).not.toBe('');

  // Verificar que el campo 'redSocial' existe y no está vacío
  expect(infoData).toHaveProperty('redSocial');
  expect(infoData.redSocial).not.toBe('');
}

// Obtener todas las subcarpetas del directorio
const carpetas = fs.readdirSync(baseDir).filter((file) => {
  return fs.statSync(path.join(baseDir, file)).isDirectory();
});

// Recorre todas las carpetas y ejecuta la prueba en cada una
describe('Validar archivos info.json en todas las carpetas', () => {
  carpetas.forEach((carpeta) => {
    const infoPath = path.join(baseDir, carpeta, 'info.json');

    // Solo ejecutar si el archivo info.json existe en la carpeta
    if (fs.existsSync(infoPath)) {
      let infoData;

      // Leer el archivo JSON antes de la prueba
      beforeAll(() => {
        const jsonData = fs.readFileSync(infoPath, 'utf8');
        infoData = JSON.parse(jsonData);
      });

      // Ejecutar las mismas validaciones para cada archivo info.json
      describe(`Validar archivo info.json en la carpeta ${carpeta}`, () => {
        test('Validar que el archivo JSON esté completo', () => {
          validarJsonCompleto(infoData);
        });
      });
    }
  });
});
