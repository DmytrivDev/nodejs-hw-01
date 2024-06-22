import fs from 'fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  const data = await fs.readFile(PATH_DB, 'utf8');
  const contacts = JSON.parse(data);

  const filteredContacts = contacts.filter(() => Math.random() >= 0.5);

  const contactsJSON = JSON.stringify(filteredContacts, null, 2);

  await fs.writeFile(PATH_DB, contactsJSON, 'utf8');
};

await thanos();