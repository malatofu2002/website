import React from 'react';
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Contact from '../../components/Contact/Contact'
import Experience from '../../components/Experience/Experience'
import Education from '../../components/Education/Education'
import Profile from '../../components/Profile/Profile'
import FadeInSection from '../../components/FadeInSection';

const HomePage = () => (
    <>
        <FadeInSection>
            <About size="small" />
        </FadeInSection>
        <FadeInSection>
            <Profile size="large" />
        </FadeInSection>
        <FadeInSection>
            <Education />
        </FadeInSection>
        <FadeInSection>
            <Experience />
        </FadeInSection>
        <FadeInSection>
            <Skills />
        </FadeInSection>
        <FadeInSection>
            <Contact />
        </FadeInSection>
    </>
);

export default HomePage;