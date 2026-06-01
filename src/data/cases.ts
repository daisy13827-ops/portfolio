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
      rightCards: Array<{ title: string; text: string }>;
    }
  | {
      type: "why";
      image: string;
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