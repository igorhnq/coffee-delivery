import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home } from "../pages/Home";
import { Sucess } from "../pages/Sucess";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/sucess" element={<Sucess />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}