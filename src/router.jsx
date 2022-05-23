import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TeamsPage from './views/TeamsPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<TeamsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router