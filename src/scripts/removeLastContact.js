import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  const contactsBuffer = await fs.readFile(PATH_DB);
  const contacts = JSON.parse(contactsBuffer.toString());

  contacts.splice(-1, 1);

  await fs.writeFile(PATH_DB, Buffer.from(JSON.stringify(contacts, null, 2)));
};

removeLastContact();
