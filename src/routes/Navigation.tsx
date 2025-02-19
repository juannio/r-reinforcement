import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { Suspense } from 'react'

export const Navigation = () => {
    return (
        <div className='main-layout'>
            <Suspense fallback={<h2>WAIT</h2>}>
                <BrowserRouter>
                    <nav>
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
                        <Route path='/*' element={<Navigate to='/lazy1' replace />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    )
}
