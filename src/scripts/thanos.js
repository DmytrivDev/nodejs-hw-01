import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.resolve(__dirname, PATH_DB);

export const thanos = async () => {
  try {
    const data = await fs.readFile(dbPath, 'utf8');
    const existingUsers = JSON.parse(data);

    const updatedUsers = existingUsers.filter(() => Math.random() > 0.5);

    await fs.writeFile(dbPath, JSON.stringify(updatedUsers, null, 2), 'utf8');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

await thanos();
