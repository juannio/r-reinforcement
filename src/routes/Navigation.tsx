import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { Suspense } from 'react'

export const Navigation = () => {
    return (
        <div style={{ display: 'flex', flexDirection:'column' }}>
            <Suspense fallback={<h2>WAIT</h2>}>
                <BrowserRouter>
                    <nav style={{border: '1px solid red'}}>
                        <ul>
                            {routes.map(route => {
                                return <li>
                                    <NavLink to={route.to} className={({ isActive }) => isActive ? 'nav-active' : ''} >{route.name}</NavLink>
                                </li>
                            })}
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(route => {
                                return <Route path={route.path} element={<route.Component />} />
                            })
                        }
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    )
}
