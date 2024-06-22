import fs from 'fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  const removeContacts = [];

  const contactsJSON = JSON.stringify(removeContacts, null, 2);

  await fs.writeFile(PATH_DB, contactsJSON, 'utf8');
};

await removeAllContacts();