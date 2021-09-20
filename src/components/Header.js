import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title,onAdd }) => {
    const onClick=()=>{
        console.log('hello')
    }
    return (
        <header className='header' >
            <h3>{ title}</h3>
            <Button color='green' text='Add' onClick={onAdd}/>

        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}
//block css
const headingStyle = {
    color: 'purple',
}

export default Header;


//line 11 onClick={onClick} 