import React from 'react';
import { Link } from 'react-router-dom';
import './Materials.css';
import FadeInSection from '../../components/FadeInSection';

const Materials = () => (
    <div className="materials">
        <FadeInSection>
            <h1 className="materials__title">Educational Support Resources</h1>
            <section className="materials__section">
                <p>
                    Welcome to the Materials section of my website, where I share a curated collection of resources to support educators, aspiring educational psychologists, researchers, and anyone interested in the field of educational psychology.
                </p>
                <p>
                    Throughout my journey, I've encountered valuable podcasts, reading materials, and created intervention strategies that have enriched my practice and deepened my understanding of psychology in education. This page serves as a hub where you can access these resources, designed to help professionals and caregivers alike.
                </p>
                <p>
                    Whether you're seeking practical tools for the classroom, insights into psychological theories, or support for children with diverse needs, I hope you find these materials as useful as I have. Dive in, explore, and feel free to reach out if you'd like to discuss any of the topics or resources further!
                </p>
            </section>
        </FadeInSection>

        <FadeInSection>
            <div className="materials__grid">
                <div className="materials__item">
                    <h2>Podcasts</h2>
                    <p>Explore a curated selection of educational psychology podcasts, offering insights & discussions on various topics in the field.</p>
                    <Link to="/materials/podcasts" className="btn btn--outline">Explore Podcasts</Link>
                </div>
                <div className="materials__item">
                    <h2>Interventions</h2>
                    <p>Access a range of intervention strategies & materials designed to support SEN students in various educational contexts.</p>
                    <Link to="/materials/interventions" className="btn btn--outline">View Interventions</Link>
                </div>
            </div>
            <section className="materials__footer">
                <p>This collection of resources is continuously growing. I'm committed to expanding this library with new podcasts, intervention strategies, and other valuable materials. Check back regularly for updates, as I'll be adding more content to support an even wider range of educational needs and contexts.</p>
            </section>
        </FadeInSection>
    </div>
);

export default Materials;