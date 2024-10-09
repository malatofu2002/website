import React from 'react';
import './Interventions.css';
import FadeInSection from '../../components/FadeInSection';
import Year1Maths from '../../pages/assets/Interventions/Year 1 Maths SEN CYP.pdf'
import Year2Maths from '../../pages/assets/Interventions/Year 2 Maths SEN CYP.pdf'
import Year3Maths from '../../pages/assets/Interventions/Year 3 Maths SEN CYP.pdf'
import Year4Maths from '../../pages/assets/Interventions/Year 4 Maths SEN CYP.pdf'
import Year5Maths from '../../pages/assets/Interventions/Year 5 Maths SEN CYP.pdf'
import Year6Maths from '../../pages/assets/Interventions/Year 6 Maths SEN CYP.pdf'
import BeginnerLevelArtGroup from '../../pages/assets/Interventions/Beginner Level Art Group SEN CYP.pdf'
import GamingKeyWorkSessionMaterials from '../../pages/assets/Interventions/Gaming Key Work Session Materials.pdf'
import ApologyKeyWorkSessionPlan from '../../pages/assets/Interventions/Apology Keywork Session Plan.pdf'

const Interventions = () => {
    const mathsInterventions = [
        { year: 1, filename: 'Year 1 Maths SEN CYP.pdf', file: Year1Maths, description: "A maths intervention for Year 1 SEN students that covers counting, simple addition, subtraction, and shape recognition, designed to include sensory breaks and visual aids." },
        { year: 2, filename: 'Year 2 Maths SEN CYP.pdf', file: Year2Maths, description: "This Year 2 plan focuses on number recognition, place value, addition and subtraction, and simple fractions, using interactive and movement-based learning strategies." },
        { year: 3, filename: 'Year 3 Maths SEN CYP.pdf', file: Year3Maths, description: "A plan for Year 3 SEN students to develop foundational maths skills like counting, place value, and simple operations, incorporating hands-on activities and movement." },
        { year: 4, filename: 'Year 4 Maths SEN CYP.pdf', file: Year4Maths, description: "Designed to help Year 4 SEN students master core maths skills such as place value, rounding, and multiplication using structured, short, and engaging sessions with frequent sensory breaks." },
        { year: 5, filename: 'Year 5 Maths SEN CYP.pdf', file: Year5Maths, description: "This intervention covers key Year 5 maths skills for SEN students, including place value, negative numbers, and Roman numerals, with a flexible, year-long structure focused on individualized progress." },
        { year: 6, filename: 'Year 6 Maths SEN CYP.pdf', file: Year6Maths, description: "This comprehensive Year 6 maths plan covers advanced topics like place value up to 10 million, mental maths, and the order of operations, using structured activities with sensory breaks." },
    ];

    const otherInterventions = [
        { name: 'Beginner Level Art Group Intervention Plan for SEN', filename: 'Beginner Level Art Group SEN CYP.pdf', file: BeginnerLevelArtGroup, description: "An art-based intervention for children with ADHD and ASC to support emotional regulation, sensory integration, and social skills development through creative activities over a four-week program." },
        { name: 'Gaming Key Work Session Materials', filename: 'Gaming Key Work Session Materials.pdf', file: GamingKeyWorkSessionMaterials, description: "A session that explores emotional regulation during gaming, helping children recognize gaming-related emotions and how to manage them effectively with guidance from a trusted adult." },
        { name: 'Apology Keywork Session Plan', filename: 'Apology Keywork Session Plan.pdf', file: ApologyKeyWorkSessionPlan, description: "This plan helps children in care develop an understanding of apologies, using Cognitive Behavioral Therapy (CBT) and Social Learning Theory to reinforce the emotional importance and bravery of saying sorry." },
    ];

    return (
        <div className="interventions">
            <FadeInSection>
                <h1 className="interventions__title">Specialised Intervention Resources for SEN Educators</h1>
                <section className="interventions__intro">
                <p>Welcome to the Educational Psychology Intervention Plan section. Here, you will find a curated selection of intervention plans designed to support children and young people (CYP) with special educational needs (SEN).</p>
                <p>Each plan is tailored to specific year groups, offering targeted strategies to improve learning outcomes in areas such as mathematics, art, and keywork sessions. These resources are particularly useful for educators, specialists, and support staff looking for structured interventions to enhance academic and social-emotional development. Please explore the available plans and download those that best suit your educational context.</p>
                <p>I am continuously working on developing new resources, so be sure to check back regularly as more intervention plans and materials will be added to support an even wider range of educational needs and contexts.</p>
                </section>
            </FadeInSection>

            <FadeInSection>
                <section className="interventions__maths">
                    <h2>Maths Interventions</h2>
                    <div className="interventions__grid">
                        {mathsInterventions.map((intervention, index) => (
                            <div key={index} className="intervention-item">
                                <h3>Year {intervention.year} Maths</h3>
                                <p>{intervention.description}</p>
                                <a href={intervention.file} download={intervention.filename} className="btn btn--outline">
                                    Download PDF
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection>
                <section className="interventions__other">
                    <h2>Other Interventions</h2>
                    <div className="interventions__grid">
                        {otherInterventions.map((intervention, index) => (
                            <div key={index} className="intervention-item">
                                <h3>{intervention.name}</h3>
                                <p>{intervention.description}</p>
                                <a href={intervention.file} download={intervention.filename} className="btn btn--outline">
                                    Download PDF
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </FadeInSection>
        </div>
    );
};

export default Interventions;