import { NavLink, Route, Routes } from "react-router-dom"
//Import directly from LazyPage2, if importing from index, all components will load immediatly
// NOTE: Lazypage2 will load along with LazyLayout component
import { LazyPage2 } from "../pages/LazyPage2";
import { lazy } from "react";

// Lazy load only for Lazy1 and Lazy3
const Lazy1 = lazy(() => import(/*webpackChunkName: "Lazypage-1"*/'../pages/LazyPage1'));
const Lazy2 = lazy(() => import(/*webpackChunkName: "Lazypage-2-chunk"*/'../pages/LazyPage2'));
const Lazy3 = lazy(() => import(/*webpackChunkName: "Lazypage-3"*/'../pages/LazyPage3'));

export const Navigation = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink to='/lazyRoute/lazy1'> Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to='/lazyRoute/lazy2'> Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to='/lazyRoute/lazy3'> Lazy 3</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="lazy1" element={<Lazy1 />} />
                <Route path="lazy2" element={<LazyPage2 />} />
                <Route path="lazy3" element={<Lazy3 />} />

                <Route path="*" element={<h2>Element not found</h2>} />
            </Routes>
        </>
    )
}
