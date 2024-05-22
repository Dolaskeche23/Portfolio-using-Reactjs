import {Link,NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/dolas11.png'
import LogoSubtitle from '../../assets/images/logo_dolas.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faYoutube,faGithub,faInstagram} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img id='imglogo' src={LogoS} alt="logo"/>
            <img className='sub-logo' src={LogoSubtitle} alt="dolas"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/dolas-keche-1a7520242'>
                    <FontAwesomeIcon icon= {faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/Dolaskeche23'>
                    <FontAwesomeIcon icon= {faGithub} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://youtube.com/@dolaskeche3531'>
                    <FontAwesomeIcon icon= {faYoutube} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://instagram.com/cdt_dk_?igshid=NGExMmI2YTkyZg=='>
                    <FontAwesomeIcon icon= {faInstagram} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar