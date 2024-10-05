//Leer el archivo json
const fs = require('fs');
const path = require('path');

// Ruta al archivo info.json
const infoPath = path.join(__dirname, '../../public/data/2270657/info.json');

// Leer el archivo JSON antes de cada prueba
let infoData;

beforeAll(() => {
  const jsonData = fs.readFileSync(infoPath, 'utf8');
  infoData = JSON.parse(jsonData);
});

// Se define la prueba unitaria
describe('Validar contenido del archivo info.json', () => {
  
  // Verificar que el campo 'nombre' existe y no está vacío
  test('Debe existir el campo "nombre" y no debe estar vacío', () => {
    expect(infoData).toHaveProperty('nombre');
    expect(infoData.nombre).not.toBe('');
  });

  // Verificar que el campo 'edad' existe y es un número
  test('Debe existir el campo "edad" y debe ser un número', () => {
    expect(infoData).toHaveProperty('edad');
    expect(typeof infoData.edad).toBe('number');
  });

  // Verificar que el campo 'carrera' existe y no está vacío
  test('Debe existir el campo "carrera" y no debe estar vacío', () => {
    expect(infoData).toHaveProperty('carrera');
    expect(infoData.carrera).not.toBe('');
  });

  // Verificar que el campo 'semestre' existe y es un número
  test('Debe existir el campo "semestre" y debe ser un número', () => {
    expect(infoData).toHaveProperty('semestre');
    expect(typeof infoData.semestre).toBe('number');
  });

  // Verificar que el campo 'gustos' existe y es un array
  test('Debe existir el campo "gustos" y debe ser un array', () => {
    expect(infoData).toHaveProperty('gustos');
    expect(Array.isArray(infoData.gustos)).toBe(true);
  });

  // Verificar que el campo 'noGustos' existe y es un array
  test('Debe existir el campo "noGustos" y debe ser un array', () => {
    expect(infoData).toHaveProperty('noGustos');
    expect(Array.isArray(infoData.noGustos)).toBe(true);
  });

  // Verificar que el campo 'foto' existe y no está vacío
  test('Debe existir el campo "foto" y no debe estar vacío', () => {
    expect(infoData).toHaveProperty('foto');
    expect(infoData.foto).not.toBe('');
  });

  // Verificar que el campo 'redSocial' existe y no está vacío
  test('Debe existir el campo "redSocial" y no debe estar vacío', () => {
    expect(infoData).toHaveProperty('redSocial');
    expect(infoData.redSocial).not.toBe('');
  });
});
