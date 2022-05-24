import './styles.css'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { usersUrl } from '../../globalUrls'

const MemberPage = () => {
    const {teamId, id} = useParams()
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                await axios.get(`${usersUrl}${id}`)
                    .then(res => {setUser(res.data)})
            }
            catch(err) {
                console.log(err)
            }
        }
        fetchUser()
        setIsLoading(false)
        console.log(user)
    }, [])

    const imageReplacer = (event) => {
        event.target.src = 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
    }

    return (
        <div className='member-page'>
            {isLoading ? 'Loading...' :
            <>
                <h1>Member Page</h1>
                <img className='profile-picture' src={user.avatarUrl ? user.avatarUrl : 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'} onError={(event) => imageReplacer(event)} alt="profile picture"/>
                <p><strong>{user.firstName} {user.lastName}</strong></p>
                <p><strong>Location:</strong> {user.location}</p>
                <Link to={`/teams/${teamId}`}>Return to team's page</Link>
            </>}
        </div>
    )
}

export default MemberPage