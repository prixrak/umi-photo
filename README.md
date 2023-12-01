# UmiPhoto

Опис проекту та коротка інструкція щодо встановлення та використання.

## Зміст

- [Опис](#опис)
- [Технології](#технології)
- [Встановлення](#встановлення)
- [Використання](#використання)
- [Автори](#ліцензія)

## Опис

UmiPhoto - це веб-додаток, який дозволяє користувачам переглядати 3D моделі футболок, худі та кросівків з можливістю вибору користувацьких кольорів, завантаження власних картинок або генерації картинок по їх словесному опису.

## Технології

- [ThreeJS](https://threejs.org/) - бібліотека для 3D-графіки.
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - бібліотека для інтеграції ThreeJS в React.
- [TailwindCSS](https://tailwindcss.com/) - фреймворк для CSS-стилізації.
- [Framer Motion](https://www.framer.com/motion/) - бібліотека для анімацій в React.

## Встановлення

Спочатку встановіть Visual Studio Code і скопіюйте за допомогою вбудованого терміналу цей репозиторій. Далі в папці client встановіть менеджер пакетів npm. Далі в папці client запустіть клієнтну частину застосунку, а в папці server - серверну. Команди наведено нижче:

```bash
# Встановлення проекту
git clone https://github.com/prixrak/umi-photo.git

# Запуск клієнтної частини
cd client
npm install
npm run dev

# Запуск серверної частини
cd ..
cd server
npm start
```

## Використання

За локальною адресою, вказаною при запуску клієнтської сторони застосунку (напр. http://localhost:5173/), можна побачити домашню сторінку застосунку. На ній можна натиснути кнопку "Customize It", після чого відкриється редактор одягу. Знизу можна обрати футболку, худі або кросівки. Зліва можна обрати колір, завантажити картинку з пристрою або вказати словесний опис картинки для її генерації. 

## Автори

- Тархуні Анатолій
- Кошман Нікіта
- Мячков Владислав
- Петросян Арман
- Луценко Костянтин

Виконано в рамках курсу "Командна розробка програмного продукту".