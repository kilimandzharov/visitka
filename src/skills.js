const skills = [
  {
    id: Symbol("html"),
    title: "HTML5",
    data: `Знаю все основные тэги и как правильно использовать их по назначению. 
          Знаком с последним стандартом HTML5.`,
    image: "assets/skills/html.svg",
  },
  {
    id: Symbol("css"),
    title: "CSS",
    data: `Верстаю адаптивно, больше предпочитаю Grid.  Не растеряюсь на собеседовании, если попросите объяснить разницу
          между псевдоклассом и псевдоэлементом или же рассказать про медиазапросы.`,
    image: "assets/skills/css.svg",
  },
  {
    id: Symbol("js"),
    title: "JavaScript",
    data: `Ванильным JavaScript я владею достойно, в резюме на HH.ru есть сертификат. А главное: люблю JS  и получаю удовольствие от процесса кодинга на нем.`,
    image: "assets/skills/javascript.svg",
  },
  {
    id: Symbol("React"),
    title: "React",
    data: `При создании веб-приложений использую хуки, однако начинал изучать React с классовых компонентов,
           поэтому при желании могу разобраться и в старом коде. Знаю, что такое HOC, рендер-пропсы, контекст, перенаправление рефов.`,
    image: `assets/skills/react.svg`,
  },
  {
    id: Symbol("Redux"),
    title: "Redux",
    data: `Использую Redux для обработки данных, пришедших с сервера. 
        Знаю, что такое store, reducer, action, selector, etc. и как всем этим пользоваться. Пользуюсь redux-toolkit, но в планах изучить redux-saga.`,
    image: "assets/skills/redux.svg",
  },
  {
    id: Symbol("Webpack"),
    title: "Webpack",
    data: `Умею создавать базовую конфигурацию вебпака, знаю, для чего нужны лоадеры и плагины. Могу настроить HMR сервер.
     Различаю настройку вебпака при режиме разработки и продакшна. Знаю про кэширование и разбитие бандлов.`,
    image: "assets/skills/webpack.svg",
  },
  {
    id: Symbol("MUI"),
    title: "Material UI",
    data: `Данный сайт написан  с использованием именно этой библиотеки компонентов. Знаю, как верстать адаптивно в MUI, используя компонент Grid.
    Использую хуки useTheme, useMediaQuery (за последний вообще обожаю Material UI).`,
    image: "assets/skills/material-ui.svg",
  },
  {
    id: Symbol("SQL"),
    title: "SQL",
    data: `Базовое знание синтакса SQL (DML операторы): Inner/Outer Joins, Subquery,Group,Операции со множествами, etc.`,
    image: "assets/skills/postgresql.svg",
  },
  {
    id: Symbol("Git"),
    title: "Git",
    data: `Регулярно взаимодействую с удаленным репозиторием Github. Знание всех основных команд и концепций: коммиты, ветки, слияние, rebase. `,
    image: "assets/skills/git.svg",
  },
];

export default skills;
