const fs = require('fs');
const path = require('path');

// Directorio que contiene las carpetas con los archivos info.json
const dataDir = path.join(__dirname, '../../public/data');

describe('Validar contenido de los archivos info.json en todas las carpetas', () => {
    // Lee todas las carpetas dentro de public/data/
    fs.readdirSync(dataDir).forEach(folder => {
        const infoPath = path.join(dataDir, folder, 'info.json');

        if (fs.existsSync(infoPath)) {
            let infoData;

            beforeAll(() => {
                const jsonData = fs.readFileSync(infoPath, 'utf8');
                infoData = JSON.parse(jsonData);
            });

            describe(`Validar info.json en la carpeta ${folder}`, () => {
                test('Debe existir el campo "nombre" y no debe estar vacío', () => {
                    expect(infoData).toHaveProperty('nombre');
                    expect(infoData.nombre).not.toBe('');
                });

                test('Debe existir el campo "edad" y debe ser un número', () => {
                    expect(infoData).toHaveProperty('edad');
                    expect(typeof infoData.edad).toBe('number');
                });

                test('Debe existir el campo "carrera" y no debe estar vacío', () => {
                    expect(infoData).toHaveProperty('carrera');
                    expect(infoData.carrera).not.toBe('');
                });

                test('Debe existir el campo "semestre" y debe ser un número', () => {
                    expect(infoData).toHaveProperty('semestre');
                    expect(typeof infoData.semestre).toBe('number');
                });

                test('Debe existir el campo "gustos" y debe ser un array', () => {
                    expect(infoData).toHaveProperty('gustos');
                    expect(Array.isArray(infoData.gustos)).toBe(true);
                });

                test('Debe existir el campo "noGustos" y debe ser un array', () => {
                    expect(infoData).toHaveProperty('noGustos');
                    expect(Array.isArray(infoData.noGustos)).toBe(true);
                });

                test('Debe existir el campo "foto" y no debe estar vacío', () => {
                    expect(infoData).toHaveProperty('foto');
                    expect(infoData.foto).not.toBe('');
                });

                test('Debe existir el campo "redSocial" y no debe estar vacío', () => {
                    expect(infoData).toHaveProperty('redSocial');
                    expect(infoData.redSocial).not.toBe('');
                });
            });
        }
    });
});
