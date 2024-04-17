import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pets } from "./pages/Pets";
import { PetDetails } from "./pages/PetDetails/PetDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/pets',
        children: [
            {
                index: true,
                element: <Pets />,
            },
            {
                path: '/pets/:id',
                element: <PetDetails />
            }
        ]

    },
    {
        path: '/admin',
        element: <h1>ADIM</h1>
    }
])

export default router