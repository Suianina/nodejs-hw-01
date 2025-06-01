// У файлі src/utils/writeContacts.js опишіть утилітну функцію writeContacts.
// Вона має записувати дані у файл src/db/db.json.
// Функція повинна коректно приймати дані як параметр та забезпечувати правильний запис даних у файл.


import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);  //не застосовується жодна заміна ключів, додаю відступи в 2 пробіли — щоб зробити JSON-файл легким для читання
    await fs.writeFile(PATH_DB, data, 'utf-8');
  } catch (error) {
    console.error('Error writing contacts:', error.message);
    throw new Error('Failed to write contacts');
  }
};
