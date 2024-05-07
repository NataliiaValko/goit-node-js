import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  const contactsBuffer = await fs.readFile(PATH_DB);
  const contacts = JSON.parse(contactsBuffer.toString());

  return contacts.length;
};

console.log(await countContacts());
