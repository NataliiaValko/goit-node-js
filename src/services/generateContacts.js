import path from 'node:path';
import fs from 'node:fs/promises';

import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const pathDb = path.join('src', 'db', 'db.json');
  const contactsBuffer = await fs.readFile(pathDb);
  const contacts = JSON.parse(contactsBuffer.toString()) || [];

  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }

  await fs.writeFile(pathDb, Buffer.from(JSON.stringify(contacts, null, 2)));
};

await generateContacts(5);
