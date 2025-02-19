import { JSX, lazy, LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazy-loading/pages";


type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: JSXComponent | LazyExoticComponent<JSXComponent>;
    name: string;
}

const Lazy1 = lazy(() => import(/*webpackChunkName: "Lazypage-1-chunk"*/'../01-lazy-loading/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/*webpackChunkName: "Lazypage-2-chunk"*/'../01-lazy-loading/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/*webpackChunkName: "Lazypage-3-chunk"*/'../01-lazy-loading/pages/LazyPage3'));

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        //Component: LazyPage1,
        Component: Lazy1,
        name: 'Lazy 1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        //Component: LazyPage2,
        Component: Lazy2,
        name: 'Lazy 2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        //Component: LazyPage3,
        Component: Lazy3,
        name: 'Lazy 3'
    },
]