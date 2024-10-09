import React from 'react';// Importing the hook
import { Link } from 'react-router-dom';
import './MyStory.css';

// Importing icons from MUI
import SchoolIcon from '@material-ui/icons/School';
import LightBulbIcon from '@material-ui/icons/EmojiObjects';
import BookIcon from '@material-ui/icons/ImportContacts';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import universityImage from './imgs/university.jpg';
import childhoodImage from './imgs/childhood.jpg';
import FadeInSection from '../../components/FadeInSection';

const MyStory = () => (
    <div className="my-story">
        <FadeInSection>
            <h1 className="my-story__title">A Little About Me</h1>
            <section className="my-story__section">
                <div className="my-story__subtitle-container">
                    <LightBulbIcon className="my-story__icon" style={{ fontSize: '1.8em' }}/>
                    <h2 className="my-story__subtitle">Early Curiosity</h2>
                </div>
                <div className="my-story__image-container">
                    <img src={childhoodImage} alt="Childhood memory" className="my-story__image" />
                    <p>
                        Since the moment my conscience had been formed, I have been deeply curious about human behaviour, often questioning why my peers reacted differently to the same situations.
                    </p>
                    <p>
                        One of my earliest memories is from a preschool in China, where I observed my classmates screaming and running away from the nurse administering blood tests.
                        I was puzzled by their reactions; I reasoned that if they ran before the test, they would simply be brought back, and if they fled during the procedure, they might hurt themselves.
                        Moreover, the teacher had explained that the blood tests were mandatory by law, with our guardians&apos; consent already given, so avoiding them seemed futile.
                    </p>
                    <p>
                        This early curiosity about understanding those around me sparked my interest in psychology long before I knew the term.
                    </p>
                </div>
            </section>
        </FadeInSection>

        <FadeInSection>
            <section className="my-story__section">
                <div className="my-story__subtitle-container">
                    <SchoolIcon className="my-story__icon" style={{ fontSize: '1.8em' }}/>
                    <h2 className="my-story__subtitle">Academic Journey</h2>
                </div>
                <p>
                    My desire to comprehend human thought and behaviour, particularly in children, led me to pursue a degree in Psychology and Linguistics at Lancaster University, where I completed two independent dissertations on varying topics. 
                </p>
                <p>
                    During my time at university, I held executive positions in <span className="bold-link"><a href="/#society-experience">six societies</a></span> ranging from academic to cultural, which strengthened my leadership, collaborative, organisation, and overall people skills. Additionally, this experience allowed me to engage with young people from various communities and interests, broadening my perspective on different ways of thinking and behaving.
                </p>
                <p>
                    I also served as a Peer Mentor for six first-year Psychology students and as the Academic Representative for the Linguistics department. These roles taught me how to communicate effectively with diverse individuals, develop trusting relationships quickly, and ensure my advice and ideas were conveyed in a manner that others would accept and act upon.
                </p>
            </section>
        </FadeInSection>

        <FadeInSection>
            <section className="my-story__section">
                <div className="my-story__subtitle-container">
                    <BookIcon className="my-story__icon" style={{ fontSize: '1.8em' }}/>
                    <h2 className="my-story__subtitle">Teaching Experience</h2>
                </div>
                <p>
                    From the beginning of my teenage years, thanks to my high bilingual proficiency, I have had the chance to tutor my peers in English and Chinese Mandarin. My years of language teaching and tutoring background to individuals and groups of different characteristics and cultures exercised my ability to rapidly identify different learning styles that suit the student I am working with.
                </p>
                <p>
                    In the process of creating tailored learning plans for the unique students and classes I taught, I naturally explored various learning models and their applications in language education. For years, I applied these learning models without fully delving into the theories of why they were more effective for some students than others.
                </p>
            </section>
        </FadeInSection>

        <FadeInSection>
            <section className="my-story__section">
                <div className="my-story__subtitle-container">
                    <AccountBalanceIcon className="my-story__icon" style={{ fontSize: '1.8em' }}/>
                    <h2 className="my-story__subtitle">Passion for Psychology & Current Endeavors</h2>
                </div>
                <div className="my-story__image-container">
                    <img src={universityImage} alt="University" className="my-story__image my-story__image--right" />
                    <p>
                        As I studied psychology in sixth form for A-levels, I realised that a person&apos;s mind and behaviour are profoundly shaped by their childhood experiences and learning. This insight led me to delve deeper into developmental psychology to understand the nuances of child psychology. 
                    </p>
                    <p>
                        As I explored further, I became captivated by educational psychology and its practical applications within the education system. Fascinated by these findings, my passion for the field solidified, and in my third year, I decided to pursue a career as an Educational Psychologist.
                    </p>
                    <p>
                        Despite only graduating last year in 2023, I have developed intensive acumen in multiple areas of the UK education system by leveraging my ability to quickly form strong relationships with the children and staff I work with. 
                    </p>
                    <p>
                        I discovered that this capacity to connect with others was a previously undervalued strength, saving me potential challenges and providing a valuable platform for learning. I engage deeply with psychological theories and their practical applications when working with children, always focusing on evidence-based approaches supported by research and experience.
                    </p>
                    <p>
                        This rigour is something I intend to carry forward into my studies of Educational Psychology. With my reflective mindset and passion for the field, I am confident that I will excel in the course and contribute effectively to the education system, utilising my abilities to their fullest potential.
                    </p>
                </div>
            </section>
        </FadeInSection>

        {/* Button to navigate to Research page */}
        <div className="my-story__read-more">
            <Link to="/experience" className="btn btn--outline">experience & research</Link>
        </div>

    </div>
);

export default MyStory;