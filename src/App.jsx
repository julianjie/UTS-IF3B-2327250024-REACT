import React,{Suspense,useState} from 'react'
import { BrowserRouter as Router, Routes, Route,NavLink} from 'react-router-dom'

function App() {
  const Home = React.lazy(() => import('./components/Home'))
  const RapatTimList = React.lazy(() => import('./components/RapatTim/List'))
  const RapatTimCreate = React.lazy(() => import('./components/RapatTim/Create'))


return (
<>
    <Router>
        {/* navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">MDP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className={({isActive})=> `nav-link ${isActive?"active":""}`} aria-current="page"
                                to={'/'}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=> `nav-link ${isActive?"active":""}`} aria-current="page"
                                to={'/meeting'}>Meeting</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <Suspense fallback={<div>Loading....</div>}>
            <Routes>
                <Route path= '/' element={<Home />}/>
                <Route path= '/meeting' element={<RapatTimList />}/>
                <Route path= '/meeting/Create' element={<RapatTimCreate />}/>
            </Routes>
        </Suspense>
    </Router>
</>
)
}

export default App
