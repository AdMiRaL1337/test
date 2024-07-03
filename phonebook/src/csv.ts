import {Contact} from './types';

export const exportContactsToCSV = (contacts: Contact[]): string => {
  const header = 'Фамилия;Имя;Отчество;Адрес;Домашний телефон;Мобильный телефон\n';
  const csv = contacts.map((contact) => 
    `${contact.lastName};${contact.firstName};${contact.address};;${contact.phoneNumber}`
  ).join('\n');

  return header + csv;
};

export const importContactsFromCSV = (csvContent: string): Contact[] => {
  const lines = csvContent.split('\n');
  const contacts: Contact[] = [];

  // Пропускаем заголовок
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const [lastName, firstName, address, phoneNumber] = line.split(';');
    // Валидация данных (при необходимости)
    
    contacts.push({
        lastName, firstName, address, phoneNumber,
        mobilePhone: undefined,
        id: 0,
        email: ''
    });
  }
  return contacts;
};