export const getRandomBgColor = () => {
  const bgColors = ["#f6b100", "#02ca3a", '#f6b100', "#025cca", "#f6b100", "#02ca3a", "#f6b100", "#025cca"];
  return "bg-[" + bgColors[Math.floor(Math.random() * bgColors.length)] + "]";
};

export const getRandomColor = () => {
  const colors = [ 
    "#5b45b0", "#285430", "#735f32", "#1d2569", "#ff5733", 
    "#33ff57", "#5733ff", "#ff33a6", "#33a6ff", "#a6ff33"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};