import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import path from 'node:path';

const pathToWorkDir = path.join(process.cwd());
const dbPath = path.join(pathToWorkDir, PATH_DB);

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
