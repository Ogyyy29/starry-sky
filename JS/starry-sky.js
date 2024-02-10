// 1 фото планеты
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var planet = document.querySelector('.planet');
  var triggerPoint = 180; // Точка, при достижении которой будет изменен фон
  var maxScroll = 570; // Максимальная длина прокрутки, при которой прозрачность будет 100%

  if (scrollPosition > triggerPoint) {
    var opacity = (scrollPosition - triggerPoint) / maxScroll; // Рассчитываем прозрачность на основе длины прокрутки
    planet.style.opacity = opacity.toString(); // Применяем вычисленную прозрачность
    planet.style.transition = 'opacity 0.5s ease'; // Добавляем плавное появление
  } else {
    planet.style.opacity = '0'; // Скрываем планету, если прокрутка ниже triggerPoint
  }
});

// 2 фото планеты
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var planet = document.querySelector('.planet-2');
  var triggerPoint = 1000; // Точка, при достижении которой будет изменен фон
  var maxScroll = 570; // Максимальная длина прокрутки, при которой прозрачность будет 100%

  if (scrollPosition > triggerPoint) {
    var opacity = (scrollPosition - triggerPoint) / maxScroll; // Рассчитываем прозрачность на основе длины прокрутки
    planet.style.opacity = opacity.toString(); // Применяем вычисленную прозрачность
    planet.style.transition = 'opacity 0.5s ease'; // Добавляем плавное появление
  } else {
    planet.style.opacity = '0'; // Скрываем планету, если прокрутка ниже triggerPoint
  }
});

// кнопка смены день-ночь
const toggleButton = document.getElementById('toggleBackground');
const body = document.body;

toggleButton.addEventListener('click', function() {
  body.classList.toggle('night-mode');
});

// Кнопка интересные факты
let facts = [
  "Некоторые яркие точки на небе – галактики, а не звёзды",
  "Половина населения Земли (а по некоторым подсчетам, даже две трети) никогда не видели снега (а некоторые и воды...)",
  "Кубик Рубика – товар, который больше всего продается в мире. На втором месте – iPhone (когда не хватило денег на эпл)",
  "Чтобы пересмотреть все видео на YouTube, понадобится 1000 лет",
  "Самый сильный мускул человеческого тела – язык (ты знаешь кому это отправить)",
  "Вероятность того, что молния ударит в мужчину в 6 раз выше, чем в женщину (феминистки обрадовались)",
  "Если бы в Coca-Cola не добавляли краситель, она была бы зеленого цвета (если бы у бабушки был бы кхм... она была бы дедушкой)",
  "Четырехлетний ребенок в среднем задает 400 вопросов в день (еще одна причина не заводить детей)",
  "На шлемах астронавтов есть специальное устройство, чтобы чесать нос (топ 5 полезных функций,1 место -)",
  "Вероятность стать президентом у каждого человека выше, чем выиграть в лотерею. Кстати, умереть по дороге за лотерейным билетом также более вероятно, чем победить (не играйте, пацаны, вы еще в президенты нужны)",
  "Емкость мозга человека превышает 4 терабайта (почему я тогда такой тупой)",
  "Один человеческий мозг генерирует больше электрических импульсов в течение одного дня, чем все телефоны мира, вместе взятые (почему тогда я такой тупой х2)",
  "Среднее человеческое тело содержит достаточно серы, чтобы убить всех блох на средней собаке; углерода - чтобы изготовить 900 карандашей; калия - чтобы выстрелить из игрушечной пушки; жира - чтобы сделать 7 кусков мыла; и достаточно воды, чтобы заполнить бочку в 50 литров (вопросы по методам подсчета опустим...)",
  "Сердце человека перекачивает 182 миллиона литров крови в своей жизни (значит если сдавать кровь на протяжении всей своей жизни...зачем я вообще работаю?)"
  // Добавьте здесь еще факты по вашему выбору
];

const factDisplay = document.getElementById('factDisplay');
const interestingFactsButton = document.getElementById('InterestingFacts');

// Функция для отображения случайного факта
function displayRandomFact() {
  if (facts.length === 0) {
    factDisplay.textContent = 'Это все факты на сегодня (ставь лайк и подписывайся на канал)'; // Сообщение, если все факты использованы
    return;
  }

  // Генерируем случайный индекс для выбора случайного факта из массива
  const randomIndex = Math.floor(Math.random() * facts.length);
  // Отображаем случайный факт
  factDisplay.textContent = facts[randomIndex];
  
  // Удаляем использованный факт из массива
  facts.splice(randomIndex, 1);
}

// Обработчик события клика на кнопке "Интересные факты"
interestingFactsButton.addEventListener('click', displayRandomFact);

// Обработчик события клика на документе для скрытия текста с фактом
document.addEventListener('click', function(event) {
  // Проверяем, был ли клик выполнен вне кнопки "Интересные факты"
  if (event.target !== interestingFactsButton) {
    // Если да, скрываем текст с фактом
    factDisplay.textContent = '';
  }
});
