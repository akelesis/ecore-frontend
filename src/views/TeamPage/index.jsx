import './styles.css'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { teamsUrl, usersUrl } from '../../globalUrls'

const TeamPage = () => {
    const [team, setTeam] = useState({})
    const [teamLeader, setTeamLeader] = useState({})
    const [teamMembers, setTeamMembers] = useState([])
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getTeam = async () => {
            try {
                const teamData = await axios.get(`${teamsUrl}${id}`)
                    .then(res => res.data)
                setTeam(teamData)
            }
            catch(err) {
                console.log(err)
            }   
        }
        getTeam()
    }, [])

    useEffect(() => {
        const getTeamLeader = async () => {
            try {
                const teamLeadData = await axios.get(`${usersUrl}${team.teamLeadId}`)
                    .then(res => res.data)
                setTeamLeader(teamLeadData)
            }
            catch(err) {
                console.log(err)
            }
        }
        const getTeamMembers = () => {
            axios.get(usersUrl)
                .then(res => res.data)
                .then(res => res.filter(teamMember => team.teamMemberIds.includes(teamMember.id)))
                .then(res => setTeamMembers(res))
                .then(() => setIsLoading(false))
                .catch(err => console.log(err))
        }
        getTeamLeader()
        getTeamMembers()
    },[team])

    const displayTeamMembers = () => {
        return teamMembers.map(teamMember => <li key={teamMember.id}><Link to={`/members/${id}/${teamMember.id}`}>{teamMember.displayName}</Link></li>)
    }

    return(
        <div className="team-page">
            <h1>Team Page</h1>
            {isLoading ? <h3>Loading...</h3> :
            <div className="team-specs">
                <h3>{team.name ? team.name : ''}</h3>
                {teamLeader ? <p><strong>team leader:</strong> <Link to={`/members/${id}/${teamLeader.id}`}>{`${teamLeader.displayName}`}</Link></p>: ''}
                <p>Team members:</p>
                <ul>
                    {teamMembers ? displayTeamMembers() : ''}
                </ul>
            </div>}
            <Link to={`/`}>Return to Home page</Link>
        </div>
    )
}

export default TeamPage