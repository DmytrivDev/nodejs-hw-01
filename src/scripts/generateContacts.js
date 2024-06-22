import fs from 'fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    for (let i = 0; i < number; i = i + 1) {
      contacts.push(createFakeContact());
    }

    const contactsJSON = JSON.stringify(contacts, null, 2);

    await fs.writeFile(PATH_DB, contactsJSON, 'utf8');
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

await generateContacts(5);