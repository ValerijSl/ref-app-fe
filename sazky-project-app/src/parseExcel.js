//const xlsx = require('xlsx');
// parseExcel.js (ESM синтаксис)

// Импортираме xlsx и fs чрез import
import xlsx from 'xlsx';
import fs from 'fs';

// 1. Четем Excel файла
const workbook = xlsx.readFile('./Hokej rozhodci stats.xlsx');

// 2. Избираме активния sheet
const sheetName = workbook.SheetNames[9];
const sheet = workbook.Sheets[sheetName];

// 3. Конвертираме Sheet-а в JSON
const data = xlsx.utils.sheet_to_json(sheet);

// Принтираме в конзолата
console.log(data);

// Записваме в JSON файл
fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf-8');

console.log('Done! Data saved to data.json');
