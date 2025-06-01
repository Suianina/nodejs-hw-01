// У файлі src/scripts/countContacts.js опишіть функцію countContacts.
// Вона має повертати кількість контактів в масиві у файлі src/db/db.json.
// Переконайтесь, що функція точно рахує кількість контактів.

// Перевірити роботу функції можна виконавши команду npm run count,
// яка буде виконувати код у файлі src/scripts/countContacts.js.



import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error.message);
    return 0;
  }
};

const count = await countContacts();
console.log(`Total contacts: ${count}`);


