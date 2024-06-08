import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import path from 'node:path';

const pathToWorkDir = path.join(process.cwd());
const dbPath = path.join(pathToWorkDir, PATH_DB);

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(dbPath, '[]', 'utf8');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

await removeAllContacts();
