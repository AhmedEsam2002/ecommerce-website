import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthContextProvider from "./Contexts/AuthContextProvider";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
function App() {
  return (
    <>
      <QueryClientProvider client={new QueryClient({})}>
        <HeroUIProvider>
          <ToastProvider />
          <AuthContextProvider>
            <RouterProvider router={router} />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </AuthContextProvider>
        </HeroUIProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
