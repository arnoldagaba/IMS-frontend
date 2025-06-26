import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router";

const AppRoutes = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(<Route></Route>)
    );

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default AppRoutes;
