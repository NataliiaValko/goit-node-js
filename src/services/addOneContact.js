import path from 'node:path';
import fs from 'node:fs/promises';

import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const pathDb = path.join('src', 'db', 'db.json');
  const contactsBuffer = await fs.readFile(pathDb);
  const contacts = JSON.parse(contactsBuffer.toString());

  contacts.push(createFakeContact());

  await fs.writeFile(pathDb, Buffer.from(JSON.stringify(contacts, null, 2)));
};

await addOneContact();
