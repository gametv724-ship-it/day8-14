const readline = require("readline");
const { question } = require("readline-sync");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const user = {
    name: "",
    age: 0,
    introduce() {
        console.log(`Меня зовут ${this.name}, мне ${this.age} лет.`);
    }
};

rl.question("Введите ваше имя: ", (name) => {
    user.name = name;

    rl.question("Введите ваш возраст: ", (age) => {
        user.age = Number(age);

        user.introduce()

        rl.close();
    })
})



