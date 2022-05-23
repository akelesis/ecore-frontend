import './styles.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { teamsUrl } from '../../globalUrls.js'
import TeamCard from '../../components/TeamCard'

const TeamsPage = () => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        try {
            axios.get(teamsUrl)
                .then(res => setTeams(res.data))
        }
        catch(err) {
            console.log(err.response.data)
        }   
    }, [])

    return (     
        <div className="teams-page">
            <h1>Teams Page</h1>
            <div className="teams-list">
                {teams.map(team => <TeamCard key={team.id} team={team} />)}
            </div>
        </div>
    )
}

export default TeamsPage