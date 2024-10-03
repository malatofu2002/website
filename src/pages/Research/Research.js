import React from 'react';
import '../MyStory/MyStory.css';
import './Research.css';

import SchoolIcon from '@material-ui/icons/School';
import BookIcon from '@material-ui/icons/ImportContacts';
import LightBulbIcon from '@material-ui/icons/EmojiObjects';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CaseStudyIcon from '@material-ui/icons/Assignment';
import FadeInSection from '../../components/FadeInSection';

import oxfordImage from './imgs/oxford.jpg';
import senImage from './imgs/sen.jpg';

const MyResearch = () => (
    <div className="my-story">
        <h1 className="my-story__title">Research and Educational Experience</h1>

        {/* Table of Contents */}
        <section className="my-story__section">
            <h2 className="my-story__subtitle">Contents Overview</h2>
            <ul className="my-story__toc">
                <li><SchoolIcon className="my-research__icon" /> <a href="#activities">Current Activities and Achievements</a></li>
                <li><BookIcon className="my-research__icon" /> <a href="#background">Educational Background and Experience</a></li>
                <li><LightBulbIcon className="my-research__icon" /> <a href="#collaboration">Research Collaboration with Prof. Padraic Monaghan</a></li>
                <li><CaseStudyIcon className="my-research__icon" /> <a href="#case-study">Applying Psychology to my Work</a></li>
                <li><AccountBalanceIcon className="my-research__icon" /> <a href="#aspirations">Future Goals and Aspirations</a></li>
            </ul>
        </section>

        {/* Section 1: Current Activities */}
        <FadeInSection>
            <section id="activities" className="my-story__section">
                <h2 className="my-story__subtitle">Current Activities and Achievements</h2>
                <div className="my-story__image-container">
                    <img src={oxfordImage} alt="Current Activities" className="my-story__image my-story__image--left" />
                    <p>
                        Since graduating last year, I have gained hands-on experience across various fields in the UK education system. My first full-time role was as a cover supervisor for mainstream secondary schools in Lancaster, Morecambe, and Blackpool. This role presented me with an opportunity to develop adaptability, as I had to quickly adjust to new environments and expectations on a daily basis. It also tested my subject knowledge, as I delivered lessons in a wide range of subjects—from English to Science. Fortunately, I had a strong foundation from my GCSEs and A-Levels, which made me confident in handling most subjects.
                    </p>
                    <p>
                        Simultaneously, I worked as a nursery worker, where I supported the developmental stages of babies and pre-schoolers aged 6 to 24 months. Working with young children during their early years gave me insights into foundational development, and I found the contrast between my roles incredibly enriching. The nursery experience deepened my understanding of how children develop communication and social skills from a young age, which has informed much of my work in educational psychology.
                    </p>
                    <p>
                        Currently, I am collaborating with Professor Padraic Monaghan, my former psychology dissertation supervisor at Lancaster University, on a study that investigates the use of different language registers by educators when addressing various group sizes. My role involves drafting the literature review, cleaning up the dataset, and performing statistical analysis in R-Studio. The preliminary findings are promising, and once completed, we will submit our paper to the Journal of Child Language. I intend to share the publication link here when it is live.
                    </p>
                    <p>
                        As part of my ongoing commitment to the education sector, I have also created a section on this website where educators can access free resources. These include subject intervention plans and keywork sessions designed to support children with additional needs, such as those with ASC, ADHD, trauma, and other complexities. Additionally, I have compiled a list of podcasts and learning materials that I personally found helpful during my time in education. I believe in making education more equitable, which starts by providing open and accessible resources to help educators support their students inside and outside of the classroom.
                    </p>
                </div>
            </section>
        </FadeInSection>

        {/* Section 2: Educational Background */}
        <FadeInSection>
            <section id="background" className="my-story__section">
                <h2 className="my-story__subtitle">Educational Background and Experience</h2>
                <div className="my-story__image-container">
                    <img src={senImage} alt="Educational Background" className="my-story__image my-story__image--right" />
                    <p>
                        My most significant experience to date has been as a teaching assistant at Stepping Stones, a behavioural-based SEN primary school (PRU). At Stepping Stones, I was exposed to the profound impact that psychology can have on children’s learning and behaviour. I worked closely with colleagues to devise individualised interventions for each student based on their Education, Health, and Care Plans (EHCPs). These plans are tailored to the unique challenges faced by each pupil, including those related to behavioural and emotional difficulties.
                    </p>
                    <p>
                        Working with children at Stepping Stones allowed me to see firsthand the effectiveness of psychological interventions. For instance, I applied Vygotsky's theory of the "more knowledgeable other" when working with a six-year-old boy with PDA (Pathological Demand Avoidance). This boy had come from a family with a long history of illiteracy and had been permanently excluded from mainstream education due to his aggressive and avoidant behaviour. Upon joining us, he initially refused to participate in any lessons and would often respond with physical or verbal aggression. Through firm boundary-setting and consistent positive reinforcement, we gradually built trust with him.
                    </p>
                    <p>
                        Over time, I noticed small but significant shifts in his behaviour. He began to trust me and, eventually, took part in lessons he had previously avoided, such as art and phonics. One day, after weeks of patient guidance, he successfully created an origami plane during an arts-and-crafts session. This breakthrough sparked his interest in creative subjects and significantly boosted his self-confidence. A month later, after several one-on-one phonics sessions, he progressed from being unable to write a single letter to writing his entire name. These developments highlight how Vygotsky's scaffolding concept can facilitate cognitive development through social engagement.
                    </p>
                </div>
            </section>
        </FadeInSection>

        {/* Section 3: Research Collaboration */}
        <FadeInSection>
            <section id="collaboration" className="my-story__section">
                <h2 className="my-story__subtitle">Research Collaboration with Prof. Padraic Monaghan</h2>
                <p>
                    One of the most significant projects I’ve been involved with is my research collaboration with Professor Padraic Monaghan at Lancaster University. This research focuses on exploring the different language registers used by educators when addressing varying numbers of addressees, from one-on-one interactions to whole-classroom settings. The study examines how teachers adjust their language based on the size of the audience and what implications this has for student engagement and comprehension.
                </p>
                <p>
                    My role in this project has been multi-faceted. I began by conducting a comprehensive literature review, synthesising existing research on language registers, and helping to shape the theoretical framework that underpins our study. After reviewing the literature, I transitioned into the data collection phase, where I worked on cleaning and organising the raw data we gathered from various educational settings.
                </p>
                <p>
                    Once the data was prepared, I used R-Studio to conduct detailed statistical analyses. These analyses allowed us to identify patterns in how educators' language shifts depending on the context—whether they are speaking to a single student, a small group, or an entire class. The results we’ve seen so far indicate significant changes in both the complexity and formality of language, depending on the size of the audience, with important implications for tailoring educational communication to different learning environments.
                </p>
                <p>
                    We are now in the process of finalising our findings and preparing the manuscript for submission to the Journal of Child Language. This research has been an incredibly rewarding experience for me, providing valuable insights into the intersection of linguistics and education. Once published, I will add a link to the final paper here. This project has further deepened my passion for educational psychology and linguistics, and I look forward to contributing more to this field in the future.
                </p>
            </section>
        </FadeInSection>

        {/* Section 4: Case Study */}
        <FadeInSection>
            <section id="case-study" className="my-story__section">
                <h2 className="my-story__subtitle">Applying Psychology to my Work</h2>
                <p>
                    Understanding that education extends beyond the boundaries of traditional classrooms, I sought to broaden my perspective by immersing myself in various educational environments. This led me to work in a children's home with an onsite school, where I was able to apply Bronfenbrenner’s ecological systems theory to explore how the different layers of a child's environment—from family relationships to societal influences—shape their development.
                </p>
                <p>
                    In this role, I recognised that miscommunications between staff, guardians, and authorities often left children feeling unsupported. I applied humanistic psychology principles, specifically through motivational interviewing (MI) and reflective listening, to foster collaboration among all parties involved. By improving communication, I aimed to provide the children with more consistent and effective care, both at school and at home. This experience reinforced my belief in the importance of a holistic, systemic approach to education, where each aspect of a child's life is considered.
                </p>
                <p>
                    Another powerful example of applying psychological theories came during my work at Springfield SEN Secondary, where I supported Year 10 and 11 students as they prepared for their Duke of Edinburgh expedition. I designed an engaging, student-led activity where learners created their own checklist for the trip, drawing on constructivist principles that encourage knowledge-building through experience. Instead of providing a pre-made list, I facilitated collaborative discussions, asking each student to contribute five essential items for the trip.
                </p>
                <p>
                    Breaking down the task into smaller steps aligned with cognitive load theory, ensuring that the students weren't overwhelmed with information at once. After each round of item selection, we reflected on their choices, fostering critical thinking and teamwork. Through this process, I also applied Vygotsky’s social development theory, allowing students to learn from peer interaction, and Bandura’s social learning theory, as they modelled their behaviour after their peers. This process not only prepared the students for the expedition but also developed essential problem-solving and collaborative skills.
                </p>
                <p>
                    These real-life applications of psychology in education—whether in a classroom, children’s home, or outdoor learning environment—have solidified my understanding of the power of psychological principles in creating positive, lasting change in children's lives.
                </p>
            </section>
        </FadeInSection>

        {/* Section 5: Future Aspirations */}
        <FadeInSection>
            <section id="aspirations" className="my-story__section">
                <h2 className="my-story__subtitle">Future Goals and Aspirations</h2>
                <p>
                    One of the issues that I have become increasingly aware of is the underrepresentation of Eastern Asian students in SEN settings across the UK. This has raised important questions about whether cultural factors or systemic barriers are contributing to this underrepresentation. As I continue my journey toward becoming an Educational Psychologist, I hope to explore these cultural dynamics and work towards creating a more inclusive and culturally competent educational environment.
                </p>
                <p>
                    My research interests also extend to broader issues in modern education, particularly the impact of technology on children's cognitive and emotional development. With the rise of video games and increased screen time, there is a growing need to understand how these factors influence children's learning, social interactions, and behaviour. In the long term, I aim to assess and improve current strategies to ensure that educators and carers are better equipped to support children in today’s digital age.
                </p>
                <p>
                    Ultimately, I am driven by a desire to close the gap between disadvantaged students and their more privileged peers, particularly those who are at risk of becoming NEET (Not in Education, Employment, or Training). I am committed to using my experiences and knowledge to influence positive change in the UK education system and ensure that every child has the opportunity to reach their full potential.
                </p>
            </section>
        </FadeInSection>
    </div>
);

export default MyResearch;