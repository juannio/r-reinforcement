import React from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazy-loading/pages/index'


export const Navigation = () => {
    return (
        <div className='main-layout'>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/lazy1" className={ ({isActive}) => isActive ? 'nav-active' : '' } > lazi 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2" className={ ({isActive}) => isActive ? 'nav-active' : '' } > lazi 2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" className={ ({isActive}) => isActive ? 'nav-active' : '' } > lazsssi 3</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='lazy1' element={ <LazyPage1 /> }/>
                    <Route path='lazy2' element={ <LazyPage2 />  }/>
                    <Route path='lazy3' element={ <LazyPage3 /> }/>

                    <Route path='/*' element={ <Navigate to='/lazy1' replace/> }/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
