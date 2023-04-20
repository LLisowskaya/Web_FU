//Используя данный пример, реализуйте проверку по условию на право редактирования сайта и вывод имени админа.

const users = [
    { name: 'Alice', age: 25, isEditor: false },
    { name: 'Bob', age: 32, isEditor: true },
    { name: 'Charlie', age: 20, isEditor: false },
    { name: 'Dave', age: 27, isEditor: true },
  ];

const editors = users.filter(user => user.isEditor).map(user => user.name);

console.log(`Редактировать сайт могут: ${editors.join(', ')}`);

const firstEditor = users.find(user => user.isEditor);

if (firstEditor) {
  console.log(`Первый администратор сайта: ${firstEditor.name}`);
} else {
  console.log('Администраторы не найдены');
}
