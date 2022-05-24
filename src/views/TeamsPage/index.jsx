import './styles.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { teamsUrl } from '../../globalUrls.js'
import TeamCard from '../../components/TeamCard'
import SearchField from '../../components/SearchField'

const TeamsPage = () => {
    const [teams, setTeams] = useState([])
    const [query, setQuery] = useState('')
    const [timer, setTimer] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    
 

    const queryTeams = () =>{
        const auxTeams = teams.filter(team => team.name.toLowerCase().includes(query.toLowerCase()))
        setTeams(auxTeams)
    }

    const getTeams = async () => {
        try {
            await axios.get(teamsUrl)
                .then(res => setTeams(res.data))
        }
        catch(err) {
            console.log(err.response.data)
        }   
    }

    useEffect(() => {
        clearTimeout(timer)
        setIsLoading(true)
        const auxTimer = setTimeout(() => {
            getTeams()
                .then(() => { 
                    if(query.length > 0) queryTeams() 
                })
                .then(() => setIsLoading(false))
        }, 500)
        setTimer(auxTimer)
        
    }, [query])


    const filterTeams = async (event) => {
        await setQuery(event.target.value)
    }

    return (     
        <div className="teams-page">
            <h1>Teams Page</h1>
            <div className="search-area">
                <SearchField query={query} filter={filterTeams}/>
            </div>
            {isLoading ? <h3>Loading...</h3> :
            <div className="teams-list">
                {teams ? teams.map(team => <TeamCard key={team.id} team={team} />) : 'Please wait...'}
            </div>}
        </div>
    )
}

export default TeamsPage