export default {
  header: {
    brand: {
      name: "Вадим Константинов",
      profession: "Веб-разработчик",
    },
    tabs: {
      services: "Услуги",
      portfolio: "Портфолио",
      about: "Обо мне",
      contact: "Контакты",
    },
  },

  main: {
    welcome: {
      hello: "Привет! Я",
      name: "Вадим",
    },
    frontend: "Frontend",
    backend: "Backend",
    profession: "Vue / Frontend разработчик",
    based: "Нахожусь в Мексике.",
    letsWork: "Давайте работать!",
  },

  quote: {
    firstPart: "Совершенство достигнуто не тогда, когда нечего добавить,",
    secondPart: "а когда нечего убрать.",
    author: "- Антуан де Сент-Экзюпери",
  },

  services: {
    titleBlock: "Мои услуги",
    workmate: "Самый творческий и интуитивный напарник.",
    cardDeveloperSkillsText: {
      title: "Навыки разработчика",
      content:
        "На текущий момент, я работаю над сайтом доставки еды farfor.ru. Также работал над созданием web-интерфейсов устройств пожарной безопасности и различных автоматизированных информационных систем .",
    },
    cardFrontendText: {
      title: "Frontend",
      content:
        "4+ лет опыта разработки интерфейсов. Имею отличное знание HTML/CSS/Javascript, Vue.js и Nuxt.",
    },
    cardBackendText: {
      title: "Backend",
      content:
        "Использовал Django для разработки личного кабинета. А также, создавал API для передачи данных между устройством и клиентом.",
    },
  },

  portfolio: {
    titleBlock: "Мое портфолио",
    companyTitle: "Компании в которых я работал.",
    companies: {
      smena: {
        name: `SMENA SPACE`,
        period: `10.2022-н.в.`,
        post: `Web developer`,
        responsibilities: [
          `Разработка новых модулей и поддержание старых на сайте доставки еды farfor.ru, а именно:
          1. реалиовал страницу "Разводящая";
          2. реалиовал страницы информации;
          3. рефакторинг старых компонентов проекта.`,

          `Написание новых и рефакторинг старых unit тестов (Jest)`,

          `В рамках миграции с Nuxt2 на Nuxt3, перенес бОльщую часть кодовой базы приложения, а именно:
          1. переписал компоненты с Options API на Composition API;
          2. Исправил стили компонентов при миграции с vuetify 2 на vuetify 3.`,

          `Вынес картинки в CDN для Nuxt 2 и Nuxt 3`,

          `Исправление и настройка CEO`,

          `А также:
          1. Выиграл корпоративный хакатон будучи стейкхолдером команды и занял 2-ое место, выступая в одиночку. Темы проектов - внедрение искуственного интелекта.`,
        ],
      },
      bolid: {
        name: `ЗАО НВП "Болид"`,
        period: `10.2020-09.2023`,
        post: `Web developer`,
        responsibilities: [
          `Оптимизировал процесс frontend разработки в web-отделе, а именно:
          1. разработал корпоративную UI-библиотеку на Vue 3 (для сборки использовал - Rollup.js; для описания документации и тестирования - Confluence и Storybook);
          2. составил список правил для ESLint'а на основе Google и Vue styleguide.
        Благодаря этому, затраченное время на разработку web-интерфейсов снизилось в 3-4 раза.`,

          `Разработал личный кабинет настройки и учета устройств пользователя за 3 месяца (для серверной разработки использовал Django REST Framework и БД PostgreSQL; для разработки web-интерфейса - Vue 3)`,

          `Разработал с нуля проект для прибора "Сириус". Использовал корпоративную UI-библиотеку и Vue 3. Благодаря чему, проект стал мастшабируемый и в современном дизайне`,

          `Переписал с нуля web-интерфейс для настройки устройства пожарной безопасности за 3 месяца и интегрировал его в личный кабинет.`,

          `Занимался доработкой старого web-интерфейса устройства пожарной безопасности "Сигнал", а именно:
          1. произвел рефакторинг более 10 000 тыс. строк JS кода;
          2. переписал авторизацию и регистрацию пользователя (вместо логина использовал почту), настроил bruteforce защиту;
          3. переписал получение данных на JSON формат вместо шаблонизатора.`,

          `Участвовал в доработке проекта "Сириус" (7 месяцев параллельной разработки), а именно:
          1. Доработал и исправил более 120 задач;
          2. Произвел рефакторинг более 5 000 строк JS кода.`,
        ],
      },
      pfsz: {
        name: `ООО "Профсоюз"`,
        period: `04.2019-04.2020`,
        post: `Frontend developer`,
        responsibilities: [
          `Разработал 7 модулей для системы AMICUM с нуля.`,

          `Доработал, интегрировал и произвел рефакторинг 5 готовых модулей в систему AMICUM.`,

          `Сверстал более 10 печатных форм документов с автоматическим заполнением на основе введенных данных.`,

          `Разработал общие компоненты для проекта. Например: модальные окна, таблицы, календарь.`,

          `Занимался поддержанием работоспособности 3D схемы шахт, разработанных на Unity C#.`,
        ],
      },
    },
  },

  aboutMe: {
    titleBlock: "Обо мне",
    welcome: "Добро пожаловать в мир Вадима.",
    cardEducationText: {
      title: "Образование",
      content: `Окончил бакалавр по специальности "Фундаментальная информатика и информационные технологии" и магистратуру по специальности "Прикладная информатика".`,
    },
    cardPersonalQualitiesText: {
      title: "Личные качества",
      content: `Умение фокусировать внимание и ответственность внутри меня позволяет писать качественный и поддерживаемый код. Для любой задачи найду решение. Люблю узнавать и применять в работе что-то новое.`,
    },
    cardLanguagesText: {
      title: "Языки",
      content: `Мой родной язык - Русский. В данный момент активно изучаю английский и испанский языки.`,
    },
    cardHobbiesText: {
      title: "Хобби",
      content: `Люблю путешествовать и узнавать об истории мест, которые посетил. Смотрю обучающие видео на различные темы. Играю в видеоигры в свободное время.`,
    },
    commonQualities: "Разносторонний. Интуитивный. Ответсвенный.",
  },

  contact: {
    letsWork: "Давайте работать вместе!",
    contactButton: "Связаться",
  },
};
