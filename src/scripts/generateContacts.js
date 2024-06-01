import { PATH_DB } from '../constants/contacts.js';
import { faker } from '@faker-js/faker';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.resolve(__dirname, PATH_DB);

const generateContacts = async (number) => {
  const users = faker.helpers.multiple(createFakeContact, {
    count: number,
  });

  try {
    const data = await fs.readFile(dbPath, 'utf8');
    const existingUsers = JSON.parse(data);

    const updatedUsers = existingUsers.concat(users);

    await fs.writeFile(dbPath, JSON.stringify(updatedUsers, null, 2), 'utf8');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

const createFakeContact = () => {
  return {
    fullname: faker.person.fullName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    jobtitle: faker.person.jobTitle(),
  };
};

await generateContacts(5);
