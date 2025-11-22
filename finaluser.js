const userDefaults = {
  role: 'guest',
  isActive: true,
  createdAt: new Date(2023, 0, 1) // 1 января 2023
};

const userProfile = {
  id: 4201,
  username: 'neo_coder',
  email: 'neo.coder@matrix.com',
};

const userSettings = {
  theme: 'neon',
  notifications: true,
  role: 'admin' 
};

console.log('--- 1. Объединение объектов с помощью Spread-оператора (...) ---');

const finalUser = {
  ...userDefaults,
  ...userProfile,
  ...userSettings
};

console.log('Итоговый объект пользователя (finalUser):');
console.log(finalUser);
console.log('------------------------------------------------------------------');

console.log('--- 2. Деструктуризация (извлечение свойств) ---');

const { 
  username, 
  role, 
  theme,
  id: userId 
} = finalUser;

console.log(`Имя пользователя: ${username}`);  
console.log(`Роль пользователя: ${role}`);     
console.log(`Тема: ${theme}`);                 
console.log(`ID пользователя (переименовано): ${userId}`); 
console.log('------------------------------------------------------------------');

console.log('--- 3. Методы Object.keys, values, entries ---');

console.log(' Object.keys(finalUser) - массив ключей:');
const keys = Object.keys(finalUser);
console.log(keys);

console.log('\n Object.values(finalUser) - массив значений:');
const values = Object.values(finalUser);
console.log(values);

console.log('\n Object.entries(finalUser) - массив пар [ключ, значение]:');
const entries = Object.entries(finalUser);
console.log(entries);
console.log('------------------------------------------------------------------');

console.log('--- 4. Пример использования Object.entries для итерации ---');

console.log('Свойства, отфильтрованные по типу (только строки):');
for (const [key, value] of entries) {
  if (typeof value === 'string') {
    console.log(`[Строка] ${key}: ${value}`);
  }
}