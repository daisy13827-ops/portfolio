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
      image: string;
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
      imageFull: string;
    }
  | {
      type: "hypotheses";
      title: string;
      points: string[];
      metrics: Array<{
        label: string;
        value: string;
      }>;
    }
  | {
      type: "solution";
      title: string;
      columns: Array<{
        title: string;
        text: string;
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
            description: "от бенчмаркинга до готовых к разработке спецификаций",
          },
          {
            label: "Этап тестирования",
            description: "запустили продукт на тестовый контур",
          },
          {
            label: "Редизайн",
            description: "обновила интерфейс и улучшила UX",
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
            text: "однотипные карточки без визуальной иерархии",
          },
          {
            title: "Теряем пользователей",
            text: "пользователи не возвращаются в раздел",
          },
          {
            title: "Нет активности",
            text: "без возможного взаимодействия",
          },
          {
            title: "Низкое вовлечение",
            text: "лента новостей не вовлекает",
          },
        ],
        image: "/cases/sber-feed-problems.png",
        imageFull: "/cases/sber-feed-problems-2.png",
      },

      {
        type: "hypotheses",
        title: "Гипотезы",
        points: [
          "Упрощение интерфейса повысит вовлечённость",
          "Снижение когнитивной нагрузки улучшит конверсию",
        ],
        metrics: [
          { label: "Конверсия", value: "+18%" },
          { label: "Вовлечённость", value: "+27%" },
        ],
      },

      {
        type: "solution",
        title: "Почему / Решение",
        columns: [
          {
            title: "Почему",
            text: "Проблема требовала системного редизайна UX",
          },
          {
            title: "Решение",
            text: "Упрощение интерфейса и логики",
          },
        ],
      },

      {
        type: "gallery",
        images: ["/cases/sber-feed-why.png"],
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