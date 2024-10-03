import uniqid from 'uniqid'
import WorkIcon from '@material-ui/icons/Work'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import DateRangeIcon from '@material-ui/icons/DateRange'
import { experience, societyExperience } from '../../portfolio' // Import societyExperience
import './Experience.css'

const Experience = () => {
  if (!experience.length && !societyExperience.length) return null; // Check if both arrays are empty

  return (
    <section id='experience' className='section experience'>
      {/* Work Experience Section */}
      <h2 className='section__title'>Work Experience</h2>
      <div className='experience__grid'>
        {experience.map((job) => (
          <div key={uniqid()} className='experience__item'>
            <h3 className='experience__title'>{job.title}</h3>
            <p className='experience__company'>
              <WorkIcon className='experience__icon' /> {job.company}
            </p>
            <p className='experience__location'>
              <LocationOnIcon className='experience__icon' /> {job.location}
            </p>
            <p className='experience__date'>
              <DateRangeIcon className='experience__icon' /> {job.startDate} - {job.endDate}
            </p>
            <p className='experience__description'>{job.description}</p>
          </div>
        ))}
      </div>

      {/* Society Experience Section */}
      {societyExperience.length > 0 && (
        <>
          <h2 className='section__title' id='society-experience' style={{ marginTop: '2em' }}>Society Experience</h2>
          <div className='experience__grid' style={{ marginTop: '2em' }}>
            {societyExperience.map((job) => (
              <div key={uniqid()} className='experience__item'>
                <h3 className='experience__title'>{job.title}</h3>
                <p className='experience__company'>
                  <WorkIcon className='experience__icon' /> {job.company}
                </p>
                <p className='experience__location'>
                  <LocationOnIcon className='experience__icon' /> {job.location}
                </p>
                <p className='experience__date'>
                  <DateRangeIcon className='experience__icon' /> {job.startDate} - {job.endDate}
                </p>
                <p className='experience__description'>{job.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default Experience
