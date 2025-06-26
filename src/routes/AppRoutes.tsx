import MainLayout from "@/components/layouts/MainLayout";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router";

const AppRoutes = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<h1>Home</h1>} />
                </Route>
            </Route>
        )
    );

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default AppRoutes;
