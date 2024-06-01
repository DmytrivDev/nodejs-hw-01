import { PATH_DB } from '../constants/contacts.js';
import { faker } from '@faker-js/faker';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.resolve(__dirname, PATH_DB);

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(dbPath, '[]', 'utf8');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

await removeAllContacts();
