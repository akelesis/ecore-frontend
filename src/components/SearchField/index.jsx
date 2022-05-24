import './styles.css'

const SearchField = (props) => {

    return (
        <div className='search-field'>
            <input type='text' name='searchbox' placeholder='Search'
                value={props.query} onChange={(event) => props.filter(event)}/>
        </div>
    )
}

export default SearchField