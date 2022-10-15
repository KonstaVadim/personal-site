export default {
  header: {
    brand: {
      name: "Vadim Konstantinov",
      profession: "Web Developer",
    },
    tabs: {
      services: "Services",
      portfolio: "Portfolio",
      about: "About me",
      contact: "Contact",
    },
  },

  main: {
    welcome: {
      hello: "Hi! I am",
      name: "Vadim",
    },
    frontend: "Frontend",
    backend: "Backend",
    profession: "Vue / Frontend Developer",
    based: "Based in Moscow, Russia.",
    letsWork: "Let's work!",
  },

  quote: {
    firstPart: "Perfection is achieved, not when there is nothing more to add,",
    secondPart: "but when there is nothing left to take away.",
    author: "- Antoine de Saint-Exupéry",
  },

  services: {
    titleBlock: "My services",
    workmate: "The most creative intuitive workmate.",
    cardDeveloperSkillsText: {
      title: "Developer Skills",
      content:
        "На текущий момент, я разрабатываю web-интерфесы для управления устройствами пожарной безопасности. Также работал над созданием различных автоматизированных информационных систем.",
    },
    cardFrontendText: {
      title: "Frontend",
      content:
        "3+ лет опыта разработки интерфейсов. Имею отличное знание HTML/CSS/Javascript и Vue.js.",
    },
    cardBackendText: {
      title: "Backend",
      content:
        "Использовал Django для разработки личного кабинета. А также, создавал API для передачи данных между устройством и клиентом.",
    },
  },

  portfolio: {
    titleBlock: "My portfolio",
    companyTitle: "Компании в которых я работал.",
    companies: {
      bolid: {
        name: `ЗАО НВП "Болид"`,
        period: `10.2020-н.в.`,
        post: `Web-developer`,
        responsibilities: [
          `Оптимизировал процесс frontend разработки в web-отделе, а именно:
          1. разработал корпоративную UI-библиотеку на Vue 3 (для сборки использовал - Rollup.js; для описания документации и тестирования - Confluence и Storybook);
          2. составил список правил для ESLint'а на основе Google и Vue styleguide.
        Благодаря этому, затраченное время на разработку web-интерфейсов снизилось в 3-4 раза.`,

          `Разработал личный кабинет настройки и учета устройств пользователя за 3 месяца (для серверной разработки использовал Django REST Framework и БД PostgreSQL; для разработки web-интерфейса - Vue 3)`,

          `Переписал с нуля web-интерфейс для настройки устройства пожарной безопасности за 3 месяца и интегрировал его в личный кабинет.`,

          `Занимался доработкой web-интерфейса устройства пожарной безопасности, а именно:
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
        post: `Frontend-developer`,
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
    titleBlock: "About me",
    welcome: "Welcome to Vadim's World.",
    cardEducationText: {
      title: "Education",
      content: `Окончил бакалавр по специальности "Фундаментальная информатика и информационные технологии" и магистратуру по специальности "Прикладная информатика".`,
    },
    cardPersonalQualitiesText: {
      title: "Personal qualities",
      content: `Умение фокусировать внимание и ответственность внутри меня позволяет писать качественный и поддерживаемый код. Для любой задачи найду решение. Люблю узнавать и применять в работе что-то новое.`,
    },
    cardLanguagesText: {
      title: "Languages",
      content: `Мой родной язык - Русский. В данный момент активно изучаю английский и испанский языки.`,
    },
    cardHobbiesText: {
      title: "Hobbies",
      content: `Люблю путешествовать и узнавать об истории мест, которые посетил. Смотрю обучающие видео на различные темы. Играю в видеоигры в свободное время.`,
    },
    commonQualities: "Multitalented. Intuitive. Dedicated.",
  },

  contact: {
    letsWork: "Let's work together!",
    contactButton: "Contacnt me",
  },
};
