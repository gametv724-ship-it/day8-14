class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;
  }

  takeBook() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`Книга "${this.title}" успешно взята.`);
      return true;
    } else {
      console.log(`Книга "${this.title}" сейчас недоступна.`);
      return false;
    }
  }

  returnBook() {
    if (!this.isAvailable) {
      this.isAvailable = true;
      console.log(`Книга "${this.title}" возвращена в библиотеку.`);
    } else {
      console.log(`Книга "${this.title}" и так в библиотеке.`);
    }
  }

  getInfo() {
    const status = this.isAvailable ? 'Доступна' : 'Занята';
    return `"${this.title}" (${this.author}), ${this.year}. Статус: ${status}.`;
  }
}

const harryPotter = new Book("Гарри Поттер и философский камень", "Дж. К. Роулинг", 1997);
const lotr = new Book("Властелин колец: Братство Кольца", "Дж. Р. Р. Толкин", 1954);
const dune = new Book("Дюна", "Фрэнк Герберт", 1965);
const hobbit = new Book("Хоббит, или Туда и обратно", "Дж. Р. Р. Толкин", 1937);
const masterAndMargarita = new Book("Мастер и Маргарита", "М. А. Булгаков", 1966);
const nineteen84 = new Book("1984", "Джордж Оруэлл", 1949);
const sherlock = new Book("Приключения Шерлока Холмса", "Артур Конан Дойл", 1892);
const crimeAndPunishment = new Book("Преступление и наказание", "Ф. М. Достоевский", 1866);
const warAndPeace = new Book("Война и мир", "Л. Н. Толстой", 1869);
const hungerGames = new Book("Голодные игры", "Сьюзан Коллинз", 2008);

console.log('--- Проверяем информацию о книге: ---');
console.log(harryPotter.getInfo()); 

console.log('--- Пытаемся взять книгу: ---');
harryPotter.takeBook(); 

console.log('--- Проверяем статус после взятия: ---');
console.log(harryPotter.getInfo()); 

console.log('--- Возвращаем книгу: ---');
harryPotter.returnBook();

