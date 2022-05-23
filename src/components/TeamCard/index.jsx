import './styles.css'
import { useNavigate } from 'react-router-dom'


const TeamCard = (props) => {
    const {id, name} = props.team
    const navigate = useNavigate()

    const redirectToTeamPage = (teamId) => {
        navigate('/teams/' + teamId)
    }
    return (
        <div className="team-card" onClick={() => redirectToTeamPage(id)}>
            { name }
        </div>
    )
}

export default TeamCard