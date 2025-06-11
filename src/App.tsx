import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthContextProvider from "./Contexts/AuthContextProvider";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Categories from "./Components/Categories/Categories";
import Brands from "./Components/Brands/Brands";
// import PrivateRoute from "./Components/PrivateRoute/PrivateRoute"; // TODO: Implement when needed
import CartContextProvider from "./Contexts/CartContextProvider/CartContextProvider";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "*", element: <NotFound /> },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "brands",
        element: <Brands />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartContextProvider>
          <AuthContextProvider>
            <RouterProvider router={router} />
          </AuthContextProvider>
        </CartContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
