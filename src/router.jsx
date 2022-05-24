import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TeamsPage from './views/TeamsPage'
import TeamPage from './views/TeamPage'
import MemberPage from './views/MemberPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<TeamsPage/>}/>
                <Route path='/teams/:id' element={<TeamPage/>}/>
                <Route path='/members/:teamId/:id' element={<MemberPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router