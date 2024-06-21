import fs from 'node:fs/promises';

import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
  const contactsBuffer = await fs.readFile(PATH_DB);
  const contacts = JSON.parse(contactsBuffer.toString()) || [];

  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }

  await fs.writeFile(PATH_DB, Buffer.from(JSON.stringify(contacts, null, 2)));
};

generateContacts(5);
