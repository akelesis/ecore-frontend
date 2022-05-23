import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TeamsPage from './views/TeamsPage'
import TeamPage from './views/TeamPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<TeamsPage/>}/>
                <Route path='/teams/:id' element={<TeamPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router