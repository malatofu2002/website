import uniqid from 'uniqid'
import SchoolIcon from '@material-ui/icons/School'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import DateRangeIcon from '@material-ui/icons/DateRange'
import { education } from '../../portfolio'
import './Education.css'

const Education = () => {
  if (!education.length) return null

  return (
    <section id='education' className='section education'>
      <h2 className='section__title'>Education</h2>

      <div className='education__grid'>
        {education.map((edu) => (
          <div key={uniqid()} className='education__item'>
            <div className='education__details'>
              <h3 className='education__degree'>{edu.degree}</h3>
              <p className='education__school'>
                <SchoolIcon className='education__icon' /> {edu.school}
              </p>
              <p className='education__location'>
                <LocationOnIcon className='education__icon' /> {edu.location}
              </p>
              <p className='education__date'>
                <DateRangeIcon className='education__icon' /> {edu.startDate} - {edu.endDate}
              </p>
            </div>
            <div className='education__description-container'>
              {edu.description && (
                <p className='education__description'>{edu.description}</p>
              )}
              <div className='education__crest'>
                <img src={edu.crestImage} alt={`${edu.school} crest`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
