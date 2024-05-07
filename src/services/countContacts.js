import path from 'node:path';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  const pathDb = path.join('src', 'db', 'db.json');

  const contactsBuffer = await fs.readFile(pathDb);
  const contacts = JSON.parse(contactsBuffer.toString());

  return contacts.length;
};

console.log(await countContacts());
