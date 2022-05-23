import './styles.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { teamsUrl, usersUrl } from '../../globalUrls'

const TeamPage = (props) => {
    const [team, setTeam] = useState({})
    const [teamLeader, setTeamLeader] = useState({})
    const [teamMembers, setTeamMembers] = useState([])
    const {id} = useParams()
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
        const getTeamMembers = async () => {
            try {
                const teamMembersList = await team.teamMemberIds.map(async memberId => {
                    return await axios.get(usersUrl + memberId).then(res => res.data)
                })
                setTeamMembers(teamMembersList)
                console.log(teamMembers)
            }
            catch(err) {
                console.log(err)
            }
        }
        getTeamLeader()
        getTeamMembers()
    },[team])

    const displayTeamMembers = () => {
        return teamMembers.map(teamMember => <li key={teamMember.id}>{teamMember.displayName}</li>)
    }

    return(
        <div className="team-page">
            <h1>Team Page</h1>
            <div className="team-specs">
                <h3>{team.name}</h3>
                {teamLeader ? <p><strong>team leader:</strong> {`${teamLeader.displayName}`}</p>: ''}
                <p>Team members:</p>
                <ul>
                    {teamMembers ? displayTeamMembers() : ''}
                </ul>
            </div>
        </div>
    )
}

export default TeamPage