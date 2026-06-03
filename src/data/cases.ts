export type CaseSection =
  | {
      type: "hero";
      summary: string;
    }
  | {
      type: "results";
      title: string;
      items: Array<{
        label: string;
        description: string;
      }>;
      image?: string;
    }
  | {
      type: "context";
      title: string;
      subtitle: Array<{
        text: string;
        highlight?: boolean;
      }>;
      image: string;
    }
  | {
      type: "problem";
      title: string;
      cards: Array<{
        title: string;
        text: string;
      }>;
      image: string;
      imageFull?: string;
    }
  | {
      type: "hypotheses";
      title: string;
      blocks: Array<
        | {
            title: string;
            scenarios: Array<{
              text: string;
              bullets: string[];
            }>;
          }
        | {
            title: string;
            bullets: string[];
          }
      >;
    }
  | {
      type: "solution";
      title: string;
      leftCards: Array<{ title: string; text: string }>;
      image: string;
      rightCards: Array<{
        title: string;
        text: string;
        highlightPrefix?: string;
      }>;
    }
    | {
      type: "why";
      image: string;
      title: string;
      body: Array<{
        segments: Array<{
          text: string;
          highlight?: boolean;
        }>;
        marginTop?: boolean;
      }>;
    }
  | {
      type: "gallery";
      images: string[];
    }
  | {
      type: "navigation";
    };

export type CaseStudy = {
  slug: string;
  title: string;
  company: string;
  tags: string[];
  heroImage: string;
  sections: CaseSection[];
};

export const cases: CaseStudy[] = [
  {
    slug: "sber-feed-and-social",
    title: "Новостная лента и социальные механики",
    company: "Сбер Инвестиции",
    tags: ["iOS", "Android", "B2C", "Fintech", "2025"],
    heroImage: "/cases/sber-feed-hero.png",

    sections: [
      {
        type: "results",
        title: "Результаты",
        items: [
          {
            label: "Полный цикл",
            description: "от бенчмаркинга до готовых к разработке спецификаций",
          },
          {
            label: "Этап тестирования",
            description: "запустили продукт на тестовый контур",
          },
          {
            label: "Редизайн",
            description: "обновила интерфейс и улучшила UX",
          },
        ],
        image: "/cases/sber-feed-results.png",
      },

      {
        type: "context",
        title: "Контекст",
        subtitle: [
          { text: "Встроенная " },
          { text: "социальная сеть", highlight: true },
          { text: " в инвестиционном приложении: " },
          { text: "здесь следят", highlight: true },
          { text: " за новостями, " },
          { text: "делятся", highlight: true },
          { text: " идеями и " },
          { text: "обсуждают", highlight: true },
          { text: " рынок" },
        ],
        image: "/cases/sber-feed-context.png",
      },

      {
        type: "problem",
        title: "Проблематика",
        cards: [
          {
            title: "Слабая структура",
            text: "однотипные карточки без визуальной иерархии",
          },
          {
            title: "Теряем пользователей",
            text: "пользователи не возвращаются в раздел",
          },
          {
            title: "Нет активности",
            text: "без возможного взаимодействия",
          },
          {
            title: "Низкое вовлечение",
            text: "лента новостей не вовлекает",
          },
        ],
        image: "/cases/sber-feed-problems.png",
        imageFull: "/cases/sber-feed-problems-2.png",
      },

      {
        type: "hypotheses",
        title: "Гипотезы",
        blocks: [
          {
            title: "Гипотезы",
            scenarios: [
              {
                text: "Если добавить социальные механики и вариативный контент",
                bullets: [
                  "пользователи будут чаще взаимодействовать с лентой",
                  "увеличится глубина просмотра",
                ],
              },
              {
                text: "Если пользователи чаще читают и обсуждают новости",
                bullets: [
                  "они лучше понимают рынок",
                  "чаще принимают инвестиционные решения",
                ],
              },
            ],
          },
          {
            title: "Метрики",
            bullets: [
              "CTR на карточки",
              "Глубина скролла",
              "Количество взаимодействий (лайки, комментарии)",
              "Retention в раздел",
              "Время в ленте",
              "CTR из новости в инструмент (акция/фонд)",
              "Переходы к карточке инструмента",
              "Конверсия в покупку после просмотра новости",
            ],
          },
        ],
      },

      {
        type: "gallery",
        images: ["/cases/sber-feed-hypothesis.png"],
      },

      {
        type: "solution",
        title: "Решение",
        leftCards: [
          {
            title: "Персонализация",
            text: "Добавлены карточки с контентом: фото, смешанные галереи",
          },
          {
            title: "Социальные механики",
            text: "Внедрен просмотрщик изображений и видео",
          },
        ],
        image: "/cases/sber-feed-solution.png",
        rightCards: [
          {
            title: "Новая структура",
            text: "Добавлены действия к постам",
          },
          {
            title: "Интерактив",
            text: "Переработаны акценты и иерархия контента",
          },
          {
            title: "Retention",
            text: "Реализованы реакции, комментарии и обсуждения",
          },
        ],
      },

      {
        type: "why",
        image: "/cases/sber-feed-why.png",
        title: "Почему так?",
        body: [
          {
            segments: [
              {
                text: "Я опиралась на паттерны поведения пользователей в соцсетях:",
              },
              {
                text: " скроллинг → быстрый просмотр → вовлечение через взаимодействие",
                highlight: true,
              },
            ],
          },
          {
            marginTop: true,
            segments: [
              {
                text: "Добавление социальных механик делает ленту живой и формирует привычку возвращаться в продукт.",
              },
            ],
          },
        ],
      },

      {
        type: "results",
        title: "Результаты",
        items: [
          {
            label: "Полный цикл",
            description: "от бенчмаркинга до готовых к разработке спецификаций",
          },
          {
            label: "Этап тестирования",
            description: "запустили продукт на тестовый контур",
          },
          {
            label: "Редизайн",
            description: "Обновила интерфейс и улучшила UX",
          },
        ],
      },

      {
        type: "gallery",
        images: ["/cases/sber-feed-end.png"],
      },

      {
        type: "navigation",
      },
    ],
  },

  // ✅ ВОТ ТВОЙ ВТОРОЙ КЕЙС — ПРАВИЛЬНО ВСТАВЛЕН В МАССИВ

  {
    slug: "sber-post-entry-v2",
    title: "Точка входа в написание поста",
    company: "Сбер Инвестиции",
    tags: ["iOS", "Android", "B2C", "FinTech", "2025"],
    heroImage: "/cases/sber-post-entry-hero.png",

    sections: [
      {
        type: "results",
        title: "Результаты",
        items: [
          {
            label: "Новые фичи",
            description: "повышение вовлеченности",
          },
          {
            label: "Этап тестирования",
            description: "запустили продукт на тестовый контур",
          },
          {
            label: "UI-kit",
            description: "наполнение ДС новыми компонентами, иконками",
          },
        ],
        image: "/cases/sber-post-entry-results.png",
      },

      {
        type: "context",
        title: "Контекст",
        subtitle: [
          { text: "Раздел должен ", highlight: false },
          { text: "формировать сообщество ", highlight: true },
          { text: "инвесторов внутри продукта", highlight: false },
        ],
        image: "/cases/sber-post-entry-context.png",
      },

      {
        type: "problem",
        title: "Проблематика",
        cards: [
          {
            title: "Слабая структура",
            text: "нет пользовательской активности",
          },
          {
            title: "Теряем пользователей",
            text: "нет простого сценария для создания собственных постов",
          },
          {
            title: "Нет активности",
            text: "отсутствие мотивации делиться опытом",
          },
          {
            title: "Низкое вовлечение",
            text: "лента выглядит “как новостной агрегатор”",
          },
        ],
        image: "/cases/sber-post-entry-problem.png",

      },

      {
        type: "hypotheses",
        title: "Гипотезы",
        blocks: [
          {
            title: "Гипотезы",
            scenarios: [
              {
                text: "Если добавить простой вход и персонализированные триггеры",
                bullets: ["увеличится количество новых постов"],
              },
              {
                text: "Если пользователи видят опытных инвесторов",
                bullets: ["растет доверие", "снижается страх к инвестированию"],
              },
            ],
          },
          {
            title: "Метрики",
            bullets: [
              "Количество созданных постов",
              "Conversion в создание поста",
              "Частота публикаций",
              "Доля активных авторов",
              "Повторные инвестиции",
              "Конверсия в покупку после взаимодействия с постом",
            ],
          },
        ],
      },

      {
        type: "gallery",
        images: ["/cases/sber-post-entry-hypothesis.png"],
      },

      {
        type: "solution",
        title: "Решение",
        leftCards: [
          {
            title: "Точка входа",
            text: "Добавлена закреплённая точка входа в создание поста",
          },
          {
            title: "Персонализация",
            text: "Предложена гипотеза персонализированных подсказок (например: «как прошла сделка?»)",
          },
        ],
        image: "/cases/sber-post-entry-solution.png",
        rightCards: [
          {
            title: "Редактирование",
            text: "Добавлено редактирование постов через меню",
          },
          {
            title: "Доступ",
            text: "Реализована логика доступа: действия доступны после создания соц-профиля (ограничения)",
          },
          {
            title: "Интеграция",
            text: "Продумано поведение нового компонента при взаимодействии с новостной лентой",
          },
        ],
      },

      {
        type: "why",
        image: "/cases/sber-post-entry-why.png",
        title: "Почему так?",
        body: [
          {
            segments: [
              { text: "Я закладывала гипотезу, что:" },
            ],
          },
          {
            segments: [
              { text: "персонализированные триггеры + простой вход" },
            ],
          },
          {
            segments: [{ text: "→ снижают барьер", highlight: true }],
          },
          {
            segments: [
              { text: "→ увеличивают количество постов", highlight: true },
            ],
          },
          {
            marginTop: true,
            segments: [
              {
                text: "Создание контента — ключевая механика любой социальной платформы",
              },
            ],
          },
        ],
      },

      {
        type: "results",
        title: "Результаты",
        items: [
          {
            label: "Новые фичи",
            description: "повышение вовлеченности",
          },
          {
            label: "Этап тестирования",
            description: "запустили продукт на тестовый контур",
          },
          {
            label: "UI-kit",
            description: "наполнение ДС новыми компонентами, иконками",
          },
        ],
      },

      {
        type: "gallery",
        images: ["/cases/sber-post-entry-end.png"],
      },

      {
        type: "navigation",
      },
    ],
  },

  {
    slug: "sber-post-editor",
    title: "Редактор поста",
    company: "Сбер Инвестиции",
    tags: ["iOS", "Android", "B2C", "FinTech", "2025"],
    heroImage: "/cases/sber-post-editor-hero.png",

    sections: [
      {
        type: "results",
        title: "Результаты",
        items: [
          {
            label: "Новые фичи",
            description: "обновлённый редактор постов (MVP)",
          },
          {
            label: "Этап тестирования",
            description: "запустили продукт на тестовый контур",
          },
          {
            label: "UI-kit",
            description: "наполнение DS новыми компонентами, иконками",
          },
        ],
        image: "/cases/sber-post-editor-results.png",
      },

      {
        type: "context",
        title: "Контекст",
        subtitle: [
          { text: "Создание контента", highlight: true },
          { text: " внутри инвестиционного приложения", highlight: false },
        ],
        image: "/cases/sber-post-editor-context.png",
      },

      {
        type: "problem",
        title: "Проблематика",
        cards: [
          {
            title: "Для обычных пользователей",
            text: "невозможность делиться своим опытом",
          },
          {
            title: "Для эмитентов",
            text: "доступ через админа",
          },
          {
            title: "Для официальных каналов",
            text: "обязательный заголовок, нет простого сценария создания постов",
          },
        ],
        image: "/cases/sber-post-editor-problem.png",
      },

      {
        type: "hypotheses",
        title: "Гипотезы",
        blocks: [
          {
            title: "Гипотезы",
            scenarios: [
              {
                text: "Если добавить простой вход и персонализированные триггеры",
                bullets: ["увеличится количество новых постов"],
              },
              {
                text: "Если пользователи видят опытных инвесторов",
                bullets: [
                  "растёт доверие",
                  "снижается страх к инвестированию",
                ],
              },
            ],
          },
          {
            title: "Метрики",
            bullets: [
              "Количество созданных постов",
              "Conversion в создание поста",
              "Частота публикаций",
              "Доля активных авторов",
              "Повторные инвестиции",
              "Конверсия в покупку после взаимодействия с постом",
            ],
          },
        ],
      },

      {
        type: "gallery",
        images: ["/cases/sber-post-editor-hypothesis.png"],
      },

      {
        type: "solution",
        title: "Решение",
        leftCards: [
          {
            title: "Заголовок",
            text: "Убрала обязательный заголовок и сделала опциональным",
          },
          {
            title: "Контент",
            text: "Добавила возможность: прикладывать изображения, использовать теги",
          },
        ],
        image: "/cases/sber-post-editor-solution.png",
        rightCards: [
          {
            title: "Состояния",
            text: "Проработала состояния, ошибки, corner cases",
          },
          {
            title: "Дизайн-система",
            text: "Внедрила новые иконки и компоненты в дизайн-систему",
          },
          {
            title: "Масштабирование",
            text: "Заложила возможность масштабирования (видео и черновики)",
            highlightPrefix: "Заложила возможность",
          },
        ],
      },

      {
        type: "why",
        image: "/cases/sber-post-editor-why.png",
        title: "Почему так?",
        body: [
          {
            segments: [
              {
                text: "Я опиралась на UX-паттерны социальных сетей: создание контента без усилий",
              },
            ],
          },
          {
            segments: [
              { text: "→ снижают барьер", highlight: true },
            ],
          },
          {
            segments: [
              { text: "→ увеличивают количество постов", highlight: true },
            ],
          },
          {
            marginTop: true,
            segments: [
              {
                text: "Снижение требований уменьшает когнитивную нагрузку и повышает вероятность публикации.",
              },
            ],
          },
        ],
      },

      {
        type: "results",
        title: "Результаты",
        items: [
          {
            label: "Новые фичи",
            description: "обновлённый редактор постов (MVP)",
          },
          {
            label: "Этап тестирования",
            description: "запустили продукт на тестовый контур",
          },
          {
            label: "UI-kit",
            description: "наполнение DS новыми компонентами, иконками",
          },
        ],
      },

      {
        type: "gallery",
        images: ["/cases/sber-post-editor-end.png"],
      },

      {
        type: "navigation",
      },
    ],
  },

  {
    slug: "sber-content-moderation",
    title: "Инструмент модерации контента",
    company: "Сбер Инвестиции",
    tags: ["Админка", "Android", "B2C", "FinTech", "2025"],
    heroImage: "/cases/sber-content-moderation-hero.png",

    sections: [
      {
        type: "results",
        title: "Результаты",
        items: [
          {
            label: "Сервис для\nмодераторов",
            description:
              "интерфейс для обработки жалоб, постов и комментариев",
          },
          {
            label: "Запуск продукта\nна пользователей",
            description:
              "внедрили систему в прод,\nсобрали реальные сценарии",
          },
          {
            label: "Интервью\nс модераторами",
            description: "провела пост-релизные\nинтервью",
          },
        ],
        image: "/cases/sber-content-moderation-results.png",
      },

      {
        type: "context",
        title: "Контекст",
        subtitle: [
          { text: "Модерация", highlight: true },
          { text: " и ", highlight: false },
          { text: "публикация", highlight: true },
          { text: " контента в соцсети. ", highlight: false },
          { text: "Контроль качества", highlight: true },
          { text: " контента и ", highlight: false },
          { text: "обработка", highlight: true },
          { text: " жалоб", highlight: false },
        ],
        image: "/cases/sber-content-moderation-context.png",
      },

      {
        type: "problem",
        title: "Проблематика",
        cards: [
          {
            title: "Пользователи",
            text: "• видят нежелательный контент\n• нет способа пожаловаться",
          },
          {
            title: "Модераторы",
            text: "• жалобы приходят из разных каналов\n• нет интерфейса обработки контента",
          },
          {
            title: "Масштаб системы",
            text: "• рост контента\n• ручная модерация не масштабируется\n• нет централизованной системы контроля",
          },
        ],
        image: "/cases/sber-content-moderation-problem.png",
      },

      {
        type: "hypotheses",
        title: "Гипотезы",
        blocks: [
          {
            title: "Гипотезы",
            scenarios: [
              {
                text: "Если показывать количество жалоб на пост, модератор сможет быстрее определять приоритет проверки",
                bullets: [],
              },
            ],
          },
          {
            title: "Гипотезы",
            scenarios: [
              {
                text: "Если не разделять жалобы по типам на первом экране, модератор будет быстрее принимать решения",
                bullets: [],
              },
            ],
          },
          {
            title: "Гипотезы",
            scenarios: [
              {
                text: "Если дать возможность одобрять или пропускать пост без перехода внутрь, скорость модерации увеличится",
                bullets: [],
              },
            ],
          },
          {
            title: "Гипотезы",
            scenarios: [
              {
                text: "Если показывать пост сразу в ленте модерации, модератор сможет принять решение без открытия карточки",
                bullets: [],
              },
            ],
          },
        ],
      },

      {
        type: "gallery",
        images: ["/cases/sber-content-moderation-hypothesis.png"],
      },

      {
        type: "solution",
        title: "Решение",
        leftCards: [
          {
            title: "Платформы",
            text: "Спроектировала сервис для Android, Web",
          },
          {
            title: "Сценарий",
            text: "Спроектировала сценарий работы для модератора",
          },
        ],
        image: "/cases/sber-content-moderation-solution.png",
        rightCards: [
          {
            title: "Интервью",
            text: "Провела глубинное интервью с модератором",
          },
          {
            title: "Интерфейс",
            text: "Упростила интерфейс взаимодействия с\u00A0контентом после интервью",
          },
          {
            title: "Исследование",
            text: "Выявила основные боли и\u00A0узкие места",
          },
        ],
      },

      {
        type: "why",
        image: "/cases/sber-content-moderation-why.png",
        title: "Почему так?",
        body: [
          {
            segments: [
              {
                text: "Модерация — критическая часть соцплатформы:",
              },
            ],
          },
          {
            segments: [
              {
                text: "плохая модерация = плохой опыт пользователя",
                highlight: true,
              },
            ],
          },
        ],
      },

      {
        type: "results",
        title: "Результаты",
        items: [
          {
            label: "Сервис для\nмодераторов",
            description:
              "интерфейс для обработки жалоб, постов и комментариев",
          },
          {
            label: "Запуск продукта\nна пользователей",
            description:
              "внедрили систему в прод,\nсобрали реальные сценарии",
          },
          {
            label: "Интервью\nс модераторами",
            description: "провела пост-релизные\nинтервью",
          },
        ],
      },

      {
        type: "gallery",
        images: ["/cases/sber-content-moderation-end.png"],
      },

      {
        type: "navigation",
      },
    ],
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((c) => c.slug === slug);
}

export function getCaseNeighbors(slug: string) {
  const index = cases.findIndex((c) => c.slug === slug);

  return {
    prev: index > 0 ? cases[index - 1] : undefined,
    next: index < cases.length - 1 ? cases[index + 1] : undefined,
  };
}