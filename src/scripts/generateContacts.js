// У файлі src/scripts/generateContacts.js опишіть функцію generateContacts.
// Вона має за допомогою функції createFakeContact, створювати передану кількість згенерованих контактів,
// а потім додавати їх до масиву у файлі src/db/db.json і записувати їх назад у файл src/db/db.json.

// Переконайтесь, що ваша функція generateContacts коректно додає нові контакти до вже існуючих.
// Тобто, якщо масив був порожній, після виклику функції в ньому має бути передана кількість контактів,
// наприклад 5. Якщо контактів було 3 і у виклик передали 5, то після виклику функції їх має стати 8.

// Перевірити роботу функції можна виконавши команду npm run generate,
// яка буде виконувати код у файлі src/scripts/generateContacts.js. У файлі src/db/db.json мають відбутися відповідні зміни.


import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    const contacts = await readContacts();
    const newContact = Array(number).fill(0).map(createFakeContact);
    const result = [...contacts, ...newContact];
    await writeContacts(result);
};

generateContacts(5);
