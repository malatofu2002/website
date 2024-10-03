import { Link } from 'react-router-dom'
import { profile } from '../../portfolio'
import './Profile.css'

const Profile = ({ size }) => {
  const { image, bio } = profile

  return (
    <section className='section profile' id='profile'>
      <h2 className='section__title'>About Me</h2>
      <div className='profile__content'>
        <div className='profile__image-container'>
          <img src={image} alt='Profile' className='profile__image' />
        </div>
        <div className={`profile__bio profile__bio-${size}`}>
          {bio.map((paragraph) => (
            <p key={paragraph.slice(0, 20)} className='profile__paragraph'>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className='profile__read-more'>
        <Link to="/about" className='btn btn--outline'>Read More</Link>
        <Link to="/experience" className='btn btn--outline'>experience & research</Link>
      </div>
    </section>
  )
}

export default Profile
