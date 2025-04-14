import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home/Home.jsx";
import './index.css'


const About = () => <h1>О нас</h1>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "books",
    element: "", // как в магазинах, товары книг
  },
  {
    path: "worksheet", 
    element: <About />, // рабочея тетрадь, Тима должен скинуть материал, наивысший приоретет
  },
  {
    path: "disciple", // наставничество и учениство //https://discipleship.younglife.org/whys-and-how-tos/ BIG PICTURE STUFF
    element: "",
  },
  {
    path: "evaluation",
    element: "",
  },
  // {
  //   path: "/training",
  //   element: <About />,
  //   children: [ // Вложенные маршруты
  //     {
  //       path: "books",
  //       element: "", // как в магазинах, товары книг
  //     },
  //     {
  //       path: "worksheet", 
  //       element: <About />, // рабочея тетрадь, Тима должен скинуть материал, наивысший приоретет
  //     },
  //   ],
  // },
  // {
  //   path: "/practical",
  //   element: "",
  //   children: [ // Вложенные маршруты
  //     {
  //       path: "cabin", 
  //       element: "", // малые группы, там 
  //     },
  //     {
  //       path: "disciple", // наставничество и учениство //https://discipleship.younglife.org/whys-and-how-tos/ BIG PICTURE STUFF
  //       element: "",
  //     },
  //     {
  //       path: "storytelling", 
  //       element: "",
  //     },
  //   ],
  // },
  // {
  //   path: "/teamleading",
  //   element: "",
  //   children: [ 
  //     {
  //       path: "evaluation",
  //       element: "",
  //     },
  //   ],
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;