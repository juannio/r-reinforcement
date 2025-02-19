import {  NavLink, Route, Routes } from "react-router-dom"
//Import directly from LazyPage2, if importing from index, all components will load immediatly
import { LazyPage2 } from "../pages/LazyPage2"
import { lazy } from "react";

// Lazy load only for Lazy1 and Lazy3
const Lazy1 = lazy(() => import(/*webpackChunkName: "Lazypage-1"*/'../../01-lazy-loading/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/*webpackChunkName: "Lazypage-2-chunk"*/'../../01-lazy-loading/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/*webpackChunkName: "Lazypage-3"*/'../../01-lazy-loading/pages/LazyPage3'));


export const LazyLayout = () => {
    return (
        <div>
            <h2>Lazy Layout 1 page</h2>
            <ul>
                <li>
                    <NavLink to='/lazyload/lazy1'> Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to='/lazyload/lazy2'> Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to='/lazyload/lazy3'> Lazy 3</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="lazy1" element={<Lazy1 />} />
                <Route path="lazy2" element={<LazyPage2 />} />
                <Route path="lazy3" element={<Lazy3 />}/>

                <Route path="*" element={<h2>Element not found</h2>}/>
            </Routes>
        </div>
    )
}

export default LazyLayout