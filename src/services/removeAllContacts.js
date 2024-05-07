import path from 'node:path';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  const pathDb = path.join('src', 'db', 'db.json');
  await fs.writeFile(pathDb, Buffer.from(JSON.stringify([], null, 2)));
};

await removeAllContacts();
