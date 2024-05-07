import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  const contactsBuffer = await fs.readFile(PATH_DB);
  const contacts = JSON.parse(contactsBuffer.toString());

  const newContacts = contacts.reduce((acc, contact) => {
    if (Math.random() >= 0.5) {
      acc.push(contact);
    }

    return acc;
  }, []);

  await fs.writeFile(
    PATH_DB,
    Buffer.from(JSON.stringify(newContacts, null, 2)),
  );
};

await thanos();
