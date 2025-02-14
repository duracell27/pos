export const getRandomBgColor = () => {
  const bgColors = ["#f6b100", "#02ca3a", "#f6b100", "#025cca", "#f6b100", "#02ca3a", "#f6b100", "#025cca"];
  return "bg-[" + bgColors[Math.floor(Math.random() * bgColors.length)] + "]";
};

export const getRandomColor = () => {
  const colors = [
    "#5b45b0",
    "#285430",
    "#735f32",
    "#1d2569",
    "#ff5733",
    "#33ff57",
    "#5733ff",
    "#ff33a6",
    "#33a6ff",
    "#a6ff33",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const getAvatarName = (name) => {
  if (!name) return '';
  
  const words = name.trim().split(/\s+/);
  const firstLetter = words[0] ? words[0][0].toUpperCase() : '';
  const secondLetter = words[1] ? words[1][0].toUpperCase() : '';
  
  return firstLetter + secondLetter;
};

export const formatDate = (date) => {
  const month = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
  ];

  return `${month[date.getMonth()]} ${String(date.getDate()).padStart(2,'0')}, ${date.getFullYear()}`
};