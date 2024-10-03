import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { contact, social } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div style={{ display: 'inline-flex', alignItems: 'center' }}> {/* Added a wrapper for inline alignment */}
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        </a>
        <a 
          href={social.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
          style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '8px' }} // Inline styling for alignment
        >
          <LinkedInIcon style={{ cursor: 'pointer' }} /> {/* LinkedIn logo */}
        </a>
      </div>
    </section>
  )
}

export default Contact
