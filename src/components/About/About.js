import { about } from '../../portfolio'
import './About.css'
import resumePDF from "../../pages/assets/myCV.pdf"

const About = ({ size }) => {
  const { name, role, description } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className={`about__desc about__desc-${size}`}>{description && description}</p>

      <div className='about__contact'>
        <a href={resumePDF} download="Margaret_Liu_CV.pdf">
          <span type='button' className='btn btn--outline'>
            Download Resume
          </span>
        </a>
      </div>
    </div>
  )
}

export default About;