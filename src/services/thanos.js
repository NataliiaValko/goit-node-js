import fs from 'node:fs/promises';
import path from 'node:path';

export const thanos = async () => {
  const pathDb = path.join('src', 'db', 'db.json');
  const contactsBuffer = await fs.readFile(pathDb);
  const contacts = JSON.parse(contactsBuffer.toString());

  const newContacts = contacts.reduce((acc, contact) => {
    if (Math.random() >= 0.5) {
      acc.push(contact);
    }

    return acc;
  }, []);

  await fs.writeFile(pathDb, Buffer.from(JSON.stringify(newContacts, null, 2)));
};

await thanos();
