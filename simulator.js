const loadResource = (name, time) => {
    return new Promise((resolve, reject) => {
        console.log(`Начал грузить: ${name}`);

        setTimeout(() => {
            // Имитация случайного сбоя сети (шанс 20%)
            const isError = Math.random() < 0.2;

            if (isError) {
                console.log(`Ошибка загрузки: ${name}`);
                reject(new Error(`Не удалось получить ${name}`));
            } else {
                console.log(`Загружено: ${name}`);
                resolve({ resource: name, size: `${Math.floor(Math.random() * 100)}kb` });
            }
        }, time);
    });
};

console.log("--- ЗАПУСК СИМУЛЯТОРА ЗАГРУЗКИ ---");

// 2. Сценарий: Критическая цепочка (последовательно)
// Сначала авторизация -> потом профиль юзера
console.log("\n1. Логинимся...");

loadResource('Auth Token', 1000)
    .then(tokenData => {
        // Если токен получили, грузим профиль
        console.log("   >> Токен есть, грузим профиль...");
        return loadResource('User Profile', 1500);
    })
    .then(profile => {
        console.log("   >> Профиль получен, начинаем параллельную загрузку виджетов...");
        
        // 3. Сценарий: Параллельная загрузка (Promise.all)
        // Виджеты можно грузить одновременно, не ждем друг друга
        return Promise.all([
            loadResource('Widget: Weather', 2000),
            loadResource('Widget: Stocks', 2500),
            loadResource('Widget: News', 1200)
        ]);
    })
    .then(widgets => {
        console.log("\nДэшборд полностью собран!");
        console.log("Данные виджетов:", widgets);
    })
    .catch(err => {
        // 4. Глобальный перехват ошибок
        // Если упадет Auth, Profile или ЛЮБОЙ из виджетов — мы попадем сюда
        console.error("\nПриложение упало:", err.message);
        console.log("Попробуйте перезагрузить страницу (F5)");
    })
    .finally(() => {
        console.log("\n--- Симуляция завершена (loader hidden) ---");
    });

// 5. Отдельный сценарий: Гонка (Promise.race)
// Попробуем загрузить рекламу, но дадим ей максимум 800мс. Не успела — отмена.
const adRequest = loadResource('Рекламный баннер', 2000); // Долгая загрузка (2сек)
const timeout = new Promise((_, reject) => 
    setTimeout(() => reject(new Error("Таймаут рекламы")), 800)
);

Promise.race([adRequest, timeout])
    .then(() => console.log("Реклама показана"))
    .catch(err => console.log(`Реклама пропущена: ${err.message}`));