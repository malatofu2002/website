import { useInView } from 'react-intersection-observer';
import './FadeInSection.css';

const FadeInSection = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1  
    });

    return (
        <div ref={ref} className={`fade-in-section ${inView ? 'is-visible' : 'is-hidden'}`}>
            {children}
        </div>
    );
};

export default FadeInSection;