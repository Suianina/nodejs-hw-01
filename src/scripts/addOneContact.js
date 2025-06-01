// У файлі src/scripts/addOneContact.js опишіть функцію addOneContact.
// Вона має додавати до масиву у файлі src/db/db.json лише один згенерований контакт.
// Забезпечте правильне додавання одного контакту до масиву, збереження змін у файлі.


import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    await writeContacts([...contacts, newContact]);
    console.log('Contact successfully added:', newContact);
  } catch (error) {
    console.error('Error adding contact:', error.message);
  }
};

addOneContact();
