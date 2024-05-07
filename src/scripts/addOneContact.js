import fs from 'node:fs/promises';

import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  const contactsBuffer = await fs.readFile(PATH_DB);
  const contacts = JSON.parse(contactsBuffer.toString());

  contacts.push(createFakeContact());

  await fs.writeFile(PATH_DB, Buffer.from(JSON.stringify(contacts, null, 2)));
};

await addOneContact();
