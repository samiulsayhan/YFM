import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Body from "../Components/Body/Body";
import MovieView from "../Components/Body/MovieView";

const truncateText = (text, maxLength) =>
  text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

const router = createBrowserRouter([

    {
        path:"/",
        element:<MainLayout truncateText={truncateText}></MainLayout>,
        children:[
            {
                path:"/",
                element:<Body truncateText={truncateText}></Body>
            },
            {
                path:"movie-view/:id",
                loader:()=> fetch('/AllData.json'),
                element:<MovieView truncateText={truncateText}></MovieView>
            }
        ]
    }

])
export default router;