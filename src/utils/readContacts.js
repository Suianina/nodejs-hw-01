// У файлі src/utils/readContacts.js опишіть утилітну функцію readContacts.
// Вона має зчитувати вміст файлу src/db/db.json та повертати його.
// Функція повинна коректно обробляти дані та забезпечувати правильне зчитування даних з файлу.


import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error.message);
    throw new Error('Failed to read contacts');
  }
};




