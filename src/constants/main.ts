import { BoardType, ICard } from "../types/main"

const cards: ICard[][] = [
  // Новые cards
  [
    {
      id: 1,
      name: "UI/UX дизайнер",
      description: "Отдел разработки мобильного приложения",
      tag: "В приоритете",
      userCount: 3,
      fileCount: 255,
      userName: "Алексей Щербаков",
      avatar: "img/avatar-1.png",
    },
    {
      id: 2,
      name: "Маркетолог",
      description: "Отдел маркетинга",
      tag: "В приоритете",
      userCount: 3,
      fileCount: 182,
      userName: "Floyd Miles",
      avatar: "img/avatar-2.png",
    },
    {
      id: 3,
      name: "Отдел продаж",
      description: "Отдел маркетинга",
      tag: "В приоритете",
      userCount: 3,
      fileCount: 255,
      userName: "Theresa Webb",
      avatar: "img/avatar-3.png",
    },
    {
      id: 4,
      name: "UI/UX дизайнер",
      description: "Отдел разработки мобильного приложения",
      tag: "В приоритете",
      userCount: 3,
      fileCount: 182,
      userName: "Vanessa Johnson",
      avatar: "img/avatar-4.png",
    }
  ],
  // Текущие cards
  [
    {
      id: 5,
      name: "PHP Developer",
      description: "Housekeepers",
      tag: "В приоритете",
      userCount: 3,
      fileCount: 182,
      userName: "Kristin Watson",
      avatar: "img/avatar-5.png",
    },
    {
      id: 6,
      name: "Freshers",
      description: "Finance",
      tag: "Второстепенная",
      userCount: 3,
      fileCount: 182,
      userName: "Jacob Jones",
      avatar: "img/avatar-6.png",
    },
    {
      id: 7,
      name: "UI UX Designer",
      description: "Management",
      tag: "В приоритете",
      userCount: 3,
      fileCount: 182,
      userName: "Wade Warren",
      avatar: "img/avatar-7.png",
    },
    {
      id: 8,
      name: "Joomla Developer",
      description: "Accounting",
      tag: "Второстепенная",
      userCount: 3,
      fileCount: 182,
      userName: "Cameron Williamson",
      avatar: "img/avatar-8.png",
    },
    {
      id: 9,
      name: "Python Developer",
      description: "Laundry",
      tag: "В приоритете",
      userCount: 3,
      fileCount: 182,
      userName: "Devon Lane",
      avatar: "img/avatar-9.png",
    },
    {
      id: 10,
      name: "Freshers",
      description: "Finance",
      tag: "Второстепенная",
      userCount: 3,
      fileCount: 182,
      userName: "Jacob Jones",
      avatar: "img/avatar-10.png",
    },
  ],
  // Закрытые cards
  [

  ],
  // Закрытые Архив
  [
    {
      id: 11,
      name: "UX Architect",
      description: "Housekeeping management",
      tag: "В приоритете",
      userCount: 3,
      fileCount: 182,
      userName: "Guy Hawkins",
      avatar: "img/avatar-11.png",
    },
    {
      id: 12,
      name: "Human Resource",
      description: "Operations",
      tag: "Срочная заявка",
      userCount: 3,
      fileCount: 182,
      userName: "Annette Black",
      avatar: "img/avatar-12.png",
    },
    {
      id: 13,
      name: "Python Developer",
      description: "Restaurant Management",
      tag: "Срочная заявка",
      userCount: 3,
      fileCount: 255,
      userName: "Esther Howard",
      avatar: "img/avatar-13.png",
    },
  ],

]

export const BoardItem: BoardType = [
  {
    id: 1,
    title: "Новые",
    cards: cards[0]
  },
  {
    id: 2,
    title: "Текущие",
    cards: cards[1]
  },
  {
    id: 3,
    title: "Закрытые",
    cards: cards[2]
  },
  {
    id: 4,
    title: "Архив",
    cards: cards[3]
  },
]