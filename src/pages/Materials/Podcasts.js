import React, { useState, useEffect, useRef } from 'react';
import './Podcasts.css';
import FadeInSection from '../../components/FadeInSection';
import materialPDF from "../../pages/assets/Educational Psychology Podcast Recommendations MLiu 2024.pdf"
import podcastsData from '../../data/podcastsData.json';

// Import podcast images
import conversationsOnConsultationImage from './imgs/conversations-on-consultation.jpg';
import psychBitesImage from './imgs/pyschbites.webp';
import researchForTheRealWorldImage from './imgs/ucl-research.jpg';

// Array of podcast images
const podcastImages = [
    conversationsOnConsultationImage,
    psychBitesImage,
    researchForTheRealWorldImage
];

const PodcastItem = ({ item, isExpanded, onToggle, isTransitioning, imageUrl }) => {
    const contentRef = useRef(null);
    const [showExpandButton, setShowExpandButton] = useState(false);

    useEffect(() => {
        if (contentRef.current) {
            setShowExpandButton(contentRef.current.scrollHeight > 200);
        }
    }, []);

    return (
        <div className={`podcast-item ${isExpanded ? 'expanded' : ''}`}>
            <h3 className="podcast-item__name">{item.name}</h3>
            {item.subName && <h4 className="podcast-item__subname">{item.subName}</h4>}
            {item.host && (
                <p className="podcast-item__host">
                    <strong>Host:</strong> {item.host}
                </p>
            )}
            <div 
                ref={contentRef} 
                className={`podcast-item__content ${isExpanded ? 'expanded' : ''} ${isTransitioning ? 'transitioning' : ''}`}
                style={isExpanded ? { maxHeight: `${contentRef.current?.scrollHeight}px` } : {}}
            >
                <div className="podcast-item__description-container">
                    {imageUrl && (
                        <img 
                            src={imageUrl} 
                            alt={`${item.name} logo`} 
                            className="podcast-item__logo"
                        />
                    )}
                    <p className="podcast-item__description">{item.description}</p>
                </div>
                {item.howItHelped && (
                    <div className="podcast-item__how-it-helped">
                        <h4>How It Helped:</h4>
                        {item.howItHelped.map((point, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: point }} className="podcast-point" />
                        ))}
                    </div>
                )}
                {item.whatItCovers && (
                    <div className="podcast-item__what-it-covers">
                        <h4>What It Covers:</h4>
                        <ul>
                            {item.whatItCovers.map((point, index) => (
                               <p key={index} dangerouslySetInnerHTML={{ __html: point }} className="podcast-point" />
                            ))}
                        </ul>
                    </div>
                )}
                {item.highlights && (
                    <div className="podcast-item__highlights">
                        <h4>Highlights:</h4>
                        <ul>
                            {item.highlights.map((point, index) => (
                                <p key={index} dangerouslySetInnerHTML={{ __html: point }} className="podcast-point" />
                            ))}
                        </ul>
                    </div>
                )}
                <p className="podcast-item__access">
                    <strong>Access:</strong> {item.access}
                </p>
            </div>
            {showExpandButton && (
                <button 
                    className="podcast-item__expand-button" 
                    onClick={onToggle}
                    aria-label={isExpanded ? "Collapse content" : "Expand content"}
                    disabled={isTransitioning}
                >
                    <svg 
                        className={`podcast-item__expand-icon ${isExpanded ? 'expanded' : ''}`} 
                        viewBox="0 0 24 14" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M1 1L12 12L23 1" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
};

const Podcasts = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleToggle = (index) => {
        if (isTransitioning) return;

        setIsTransitioning(true);

        if (expandedIndex !== null && expandedIndex !== index) {
            // Close the currently expanded item
            setExpandedIndex(null);
            // Wait for the closing animation to finish
            setTimeout(() => {
                setExpandedIndex(index);
                setIsTransitioning(false);
            }, 300); // This should match your CSS transition duration
        } else {
            setExpandedIndex(prevIndex => prevIndex === index ? null : index);
            setTimeout(() => {
                setIsTransitioning(false);
            }, 300);
        }
    };

    return (
        <div className="podcasts">
            <FadeInSection>
                <h1 className="podcasts__title">Podcasts & Reading Materials for Educators</h1>
                <section className="podcasts__intro">
                    {podcastsData.introduction.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </section>
            </FadeInSection>

            <FadeInSection>
                <section className="podcasts__pdf">
                    <p>Explore my curated selection of essential educational psychology podcasts, featuring insights for educators, researchers, and parents. For a deeper dive, including chapter summaries and additional reading materials, please download the full PDF below:</p>
                    <div className="button-container">
                        <a href={materialPDF}  download="Podcast_Reading_Material.pdf" className="btn btn--outline">
                            Download PDF
                        </a>
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection>
                <h2 className="podcasts__section-title">My Top Podcast Picks</h2>
                <p className="podcasts__top-picks-intro">
                    These carefully curated podcasts have been instrumental in my journey as an aspiring educational psychologist. Each offers unique insights into UK educational psychology, providing valuable perspectives on supporting children's educational and psychological well-being, particularly those in care. Here are the shows that have most significantly impacted my understanding and practice.
                </p>
            </FadeInSection>

            {podcastsData.sections[0].content.map((item, index) => (
                <FadeInSection key={index}>
                    <PodcastItem 
                        item={item} 
                        isExpanded={expandedIndex === index}
                        onToggle={() => handleToggle(index)}
                        isTransitioning={isTransitioning}
                        imageUrl={podcastImages[index]} // Pass the image URL
                    />
                </FadeInSection>
            ))}

        </div>
    );
};

export default Podcasts;
