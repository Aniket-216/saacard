import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PageRoutes } from "./routes/PageRoutes";
import { RouterProvider } from "react-router-dom";
import ThemeProvider from "./theme";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <RouterProvider router={PageRoutes} />
        </ThemeProvider>
    </StrictMode>,
);
