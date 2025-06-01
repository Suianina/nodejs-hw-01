// У файлі src/scripts/removeLastContact.js опишіть функцію removeLastContact,
// яка видалятиме останній контакт з масиву, якщо в масиві є хоча б один елемент.

// Перевірити роботу функції можна виконавши команду npm run remove-last,
// яка буде виконувати код у файлі src/scripts/removeLastContact.js.
// У файлі src/db/db.json мають відбутися відповідні зміни.



import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('The contact list is already empty.');
      return;
    }

    const removedContact = contacts.pop();
    await writeContacts(contacts);

    console.log('Last contact has been removed:', removedContact);
  } catch (error) {
    console.error('Error removing the last contact:', error.message);
  }
};

removeLastContact();
