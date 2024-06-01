import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.resolve(__dirname, PATH_DB);

export const countContacts = async () => {
  try {
    const data = await fs.readFile(dbPath, 'utf8');
    const existingUsers = JSON.parse(data).length;
    return existingUsers;
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};

console.log(await countContacts());
