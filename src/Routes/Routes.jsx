
import {createBrowserRouter} from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout/>,
    },
]);
export default router;