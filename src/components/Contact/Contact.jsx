import './Contact.scss'
import { FacebookIcon, InstagramIcon, GoogleIcon, GitHubIcon } from '../../icon/icon'

const Contact = () => {
    return (
        <div className='contact-wrapper'>
            <h3 className='contact-title'>be in touch whit us</h3>
            <div className='contact-input'>
                <input placeholder='Enter your email' />
                <button>Join us</button>
            </div>
            <div className='contact-icon'>
                <FacebookIcon />
                <InstagramIcon />
                <GitHubIcon />
                <GoogleIcon />
            </div>
        </div>
    )
}

export default Contact