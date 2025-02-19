import { JSX, lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazy-loading/pages/NoLazy";


type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: JSXComponent | LazyExoticComponent<JSXComponent>;
    name: string;
}

// Layout that will load only when clicked that option in the routes
const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout"*/'../01-lazy-loading/layout/LazyLayout'));

export const routes: Route[] = [
    {
        to: '/lazyRoute/',
        path: '/lazyRoute/*',
        Component: LazyLayout,
        name: 'Lazy layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy layout'
    },
]