const cards = [
  {
    id: 1,
    x: "50%",
    y: "30%",
    title: "Морской бой онлайн",
    description: `Онлайн морской бой. Клиент общается с сервером по протоколу Websocket. Данные с сервера хранятся в redux хранилище`,
    source: "/assets/projects/battleship.JPG",
    github: "https://github.com/kilimandzharov/battleship_online",
    network: "http://battleship-online.000webhostapp.com/index.html",
  },
  {
    id: 2,
    x: "10%",
    y: "0%",
    title: "Доска задач",
    description: `DnD доска задач с возможностью добавлять свои задачи`,
    source: "/assets/projects/tasks.JPG",
    github: "https://github.com/kilimandzharov/problem_desk",
    network: "https://fpc2t.csb.app/",
  },
  {
    id: 3,
    x: "70%",
    y: "10%",
    title: "Сайт-визитка",
    description: `Этот сайт. Написан с использованием Material UI`,
    source: "/assets/projects/visitka.JPG",
    github: null,
    network: null,
  },

  {
    id: 4,
    x: "20%",
    y: "10%",
    title: "Поисковик книг",
    description: `Взаимодействует с сервером Google Books. Использует redux для хранения данных, пришедших с сервера.`,
    source: "/assets/projects/books.JPG",
    github: "https://github.com/kilimandzharov/books",
    network: "https://5wky2.csb.app/home",
  },
];

export default cards;
