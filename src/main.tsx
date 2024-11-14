import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PageRoutes } from "./routes/PageRoutes";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={PageRoutes} />
    </StrictMode>,
);
