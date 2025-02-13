import butterChicken from '../assets/images/butter-chicken-4.jpg';
import palakPaneer from '../assets/images/Saag-Paneer-1.jpg';
import biryani from '../assets/images/hyderabadibiryani.jpg';
import masalaDosa from '../assets/images/masala-dosa.jpg';
import choleBhature from '../assets/images/chole-bhature.jpg';
import rajmaChawal from '../assets/images/rajma-chawal-1.jpg';
import paneerTikka from '../assets/images/paneer-tika.webp';
import gulabJamun from '../assets/images/gulab-jamun.webp';
import pooriSabji from '../assets/images/poori-sabji.webp';
import roganJosh from '../assets/images/rogan-josh.jpg';
// import { color } from 'framer-motion';
// import { MdCategory, MdTableBar } from 'react-icons/md';
// import { BiSolidDish } from 'react-icons/bi';

export const popularDishes = [
    {
      id: 1,
      image: butterChicken,
      name: 'Курка в маслі',
      numberOfOrders: 250,
    },
    {
      id: 2,
      image: palakPaneer,
      name: 'Палак Панір',
      numberOfOrders: 190,
    },
    {
      id: 3,
      image: biryani,
      name: 'Гідірабадський Біріані',
      numberOfOrders: 300,
    },
    {
      id: 4,
      image: masalaDosa,
      name: 'Масала Доса',
      numberOfOrders: 220,
    },
    {
      id: 5,
      image: choleBhature,
      name: 'Чоле Бхатуре',
      numberOfOrders: 270,
    },
    {
      id: 6,
      image: rajmaChawal,
      name: 'Раджма Чавал',
      numberOfOrders: 180,
    },
    {
      id: 7,
      image: paneerTikka,
      name: 'Панір Тікка',
      numberOfOrders: 210,
    },
    {
      id: 8,
      image: gulabJamun,
      name: 'Гулаб Джамун',
      numberOfOrders: 310,
    },
    {
      id: 9,
      image: pooriSabji,
      name: 'Пурі Сабджі',
      numberOfOrders: 140,
    },
    {
      id: 10,
      image: roganJosh,
      name: 'Роган Джош',
      numberOfOrders: 160,
    },
];


export const tables = [
  { id: 1, name: "Стіл 1", status: "Заброньовано", initial: "АМ", seats: 4 },
  { id: 2, name: "Стіл 2", status: "Доступно", initial: "МБ", seats: 6 },
  { id: 3, name: "Стіл 3", status: "Заброньовано", initial: "ДЖС", seats: 2 },
  { id: 4, name: "Стіл 4", status: "Доступно", initial: "ГР", seats: 4 },
  { id: 5, name: "Стіл 5", status: "Заброньовано", initial: "ПЛ", seats: 3 },
  { id: 6, name: "Стіл 6", status: "Доступно", initial: "РТ", seats: 4 },
  { id: 7, name: "Стіл 7", status: "Заброньовано", initial: "ЛК", seats: 5 },
  { id: 8, name: "Стіл 8", status: "Доступно", initial: "ДП", seats: 5 },
  { id: 9, name: "Стіл 9", status: "Заброньовано", initial: "НК", seats: 6 },
  { id: 10, name: "Стіл 10", status: "Доступно", initial: "СБ", seats: 6 },
  { id: 11, name: "Стіл 11", status: "Заброньовано", initial: "ГТ", seats: 4 },
  { id: 12, name: "Стіл 12", status: "Доступно", initial: "ДЖС", seats: 6 },
  { id: 13, name: "Стіл 13", status: "Заброньовано", initial: "ЕК", seats: 2 },
  { id: 14, name: "Стіл 14", status: "Доступно", initial: "КН", seats: 6 },
  { id: 15, name: "Стіл 15", status: "Заброньовано", initial: "ТВ", seats: 3 }
];
  
export const startersItem = [
    {
      id: 1,
      name: "Paneer Tikka",
      price: 250,
      category: "Vegetarian"
    },
    {
      id: 2,
      name: "Chicken Tikka",
      price: 300,
      category: "Non-Vegetarian"
    },
    {
      id: 3,
      name: "Tandoori Chicken",
      price: 350,
      category: "Non-Vegetarian"
    },
    {
      id: 4,
      name: "Samosa",
      price: 100,
      category: "Vegetarian"
    },
    {
      id: 5,
      name: "Aloo Tikki",
      price: 120,
      category: "Vegetarian"
    },
    {
      id: 6,
      name: "Hara Bhara Kebab",
      price: 220,
      category: "Vegetarian"
    }
  ];
  
export const mainCourse = [
  {
    id: 1,
    name: "Butter Chicken",
    price: 400,
    category: "Non-Vegetarian"
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    price: 350,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Chicken Biryani",
    price: 450,
    category: "Non-Vegetarian"
  },
  {
    id: 4,
    name: "Dal Makhani",
    price: 180,
    category: "Vegetarian"
  },
  {
    id: 5,
    name: "Kadai Paneer",
    price: 300,
    category: "Vegetarian"
  },
  {
    id: 6,
    name: "Rogan Josh",
    price: 500,
    category: "Non-Vegetarian"
  }
];

export const beverages = [
  {
    id: 1,
    name: "Masala Chai",
    price: 50,
    category: "Hot"
  },
  {
    id: 2,
    name: "Lemon Soda",
    price: 80,
    category: "Cold"
  },
  {
    id: 3,
    name: "Mango Lassi",
    price: 120,
    category: "Cold"
  },
  {
    id: 4,
    name: "Cold Coffee",
    price: 150,
    category: "Cold"
  },
  {
    id: 5,
    name: "Fresh Lime Water",
    price: 60,
    category: "Cold"
  },
  {
    id: 6,
    name: "Iced Tea",
    price: 100,
    category: "Cold"
  }
];

export const soups = [
  {
    id: 1,
    name: "Tomato Soup",
    price: 120,
    category: "Vegetarian"
  },
  {
    id: 2,
    name: "Sweet Corn Soup",
    price: 130,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Hot & Sour Soup",
    price: 140,
    category: "Vegetarian"
  },
  {
    id: 4,
    name: "Chicken Clear Soup",
    price: 160,
    category: "Non-Vegetarian"
  },
  {
    id: 5,
    name: "Mushroom Soup",
    price: 150,
    category: "Vegetarian"
  },
  {
    id: 6,
    name: "Lemon Coriander Soup",
    price: 110,
    category: "Vegetarian"
  }
];

export const desserts = [
  {
    id: 1,
    name: "Gulab Jamun",
    price: 100,
    category: "Vegetarian"
  },
  {
    id: 2,
    name: "Kulfi",
    price: 150,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Chocolate Lava Cake",
    price: 250,
    category: "Vegetarian"
  },
  {
    id: 4,
    name: "Ras Malai",
    price: 180,
    category: "Vegetarian"
  }
];

export const pizzas = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 350,
    category: "Vegetarian"
  },
  {
    id: 2,
    name: "Veg Supreme Pizza",
    price: 400,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Pepperoni Pizza",
    price: 450,
    category: "Non-Vegetarian"
  }
];

export const alcoholicDrinks = [
  {
    id: 1,
    name: "Beer",
    price: 200,
    category: "Alcoholic"
  },
  {
    id: 2,
    name: "Whiskey",
    price: 500,
    category: "Alcoholic"
  },
  {
    id: 3,
    name: "Vodka",
    price: 450,
    category: "Alcoholic"
  },
  {
    id: 4,
    name: "Rum",
    price: 350,
    category: "Alcoholic"
  },
  {
    id: 5,
    name: "Tequila",
    price: 600,
    category: "Alcoholic"
  },
  {
    id: 6,
    name: "Cocktail",
    price: 400,
    category: "Alcoholic"
  }
];

export const salads = [
  {
    id: 1,
    name: "Caesar Salad",
    price: 200,
    category: "Vegetarian"
  },
  {
    id: 2,
    name: "Greek Salad",
    price: 250,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Fruit Salad",
    price: 150,
    category: "Vegetarian"
  },
  {
    id: 4,
    name: "Chicken Salad",
    price: 300,
    category: "Non-Vegetarian"
  },
  {
    id: 5,
    name: "Tuna Salad",
    price: 350,
  
  }
];


export const menus = [
  { id: 1, name: "Закуски", bgColor: "#b73e3e", icon: "🍲", items: startersItem },
  { id: 2, name: "Основні страви", bgColor: "#5b45b0", icon: "🍛", items: mainCourse },
  { id: 3, name: "Напої", bgColor: "#7f167f", icon: "🍹", items: beverages },
  { id: 4, name: "Супи", bgColor: "#735f32", icon: "🍜", items: soups },
  { id: 5, name: "Десерти", bgColor: "#1d2569", icon: "🍰", items: desserts },
  { id: 6, name: "Піци", bgColor: "#285430", icon: "🍕", items: pizzas },
  { id: 7, name: "Алкогольні напої", bgColor: "#b73e3e", icon: "🍺", items: alcoholicDrinks },
  { id: 8, name: "Салати", bgColor: "#5b45b0", icon: "🥗", items: salads }
];

export const metricsData = [
  { title: "Revenue", value: "₹50,846.90", percentage: "12%", color: "#025cca", isIncrease: false },
  { title: "Outbound Clicks", value: "10,342", percentage: "16%", color: "#02ca3a", isIncrease: true },
  { title: "Total Customer", value: "19,720", percentage: "10%", color: "#f6b100", isIncrease: true },
  { title: "Event Count", value: "20,000", percentage: "10%", color: "#be3e3f", isIncrease: false },
];

export const itemsData = [
  { title: "Total Categories", value: "8", percentage: "12%", color: "#5b45b0", isIncrease: false },
  { title: "Total Dishes", value: "50", percentage: "12%", color: "#285430", isIncrease: true },
  { title: "Active Orders", value: "12", percentage: "12%", color: "#735f32", isIncrease: true },
  { title: "Total Tables", value: "10", color: "#7f167f"}
];

export const orders = [
  {
    id: "101",
    customer: "Amrit Raj",
    status: "Ready",
    dateTime: "January 18, 2025 08:32 PM",
    items: 8,
    tableNo: 3,
    total: 250.0,
  },
  {
    id: "102",
    customer: "John Doe",
    status: "In Progress",
    dateTime: "January 18, 2025 08:45 PM",
    items: 5,
    tableNo: 4,
    total: 180.0,
  },
  {
    id: "103",
    customer: "Emma Smith",
    status: "Ready",
    dateTime: "January 18, 2025 09:00 PM",
    items: 3,
    tableNo: 5,
    total: 120.0,
  },
  {
    id: "104",
    customer: "Chris Brown",
    status: "In Progress",
    dateTime: "January 18, 2025 09:15 PM",
    items: 6,
    tableNo: 6,
    total: 220.0,
  },
];


// export const buttons = [
//   { label: "Add Table", icon: <MdTableBar />, action: "table" },
//   { label: "Add Category", icon: <MdCategory />, action: "category" },
//   { label: "Add Dishes", icon: <BiSolidDish />, action: "dishes" },
// ];
// export const tabs = ["Metrics", "Orders", "Payments"];