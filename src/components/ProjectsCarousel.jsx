import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProjectsCarousel.css';

const MultiCardCarousel = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const projects = [
        {
            id: 1,
            image: 'https://www.preprod4.sensinglabo.com/storage/137/XAyzulhnU6H8rtT8ngYvzN38GcOSC9-metacG9ydGZvbGlvLWRldGFpbC1pbWcuanBn-.jpg',
            title: 'Télégestion De La Station De Distribution D\'eau Potable Bordj-bourreidj',
        },
        {
            id: 2,
            image: 'https://www.preprod4.sensinglabo.com/storage/187/vnEMeccjHZF0M9ckE7Jxk8iFYkjWhl-metaSW5jZW5kaWUtem9uZS1pbmR1c3RyaWVsbGUtU2tpa2RhLmpwZw==-.jpg',
            title: 'Gestion des Risques Environnementaux au Site A',
        },
        {
            id: 3,
            image: 'https://www.preprod4.sensinglabo.com/storage/183/q1eS88cW7lSzYAqw33xjoXkO2icNf1-metacm9iIDEgcGlwZWxpbmUuanBn-.jpg',
            title: 'Audit de Sécurité sur le Site B',
        },
        {
            id: 4,
            image: 'https://www.preprod4.sensinglabo.com/storage/137/XAyzulhnU6H8rtT8ngYvzN38GcOSC9-metacG9ydGZvbGlvLWRldGFpbC1pbWcuanBn-.jpg',
            title: 'Formation sur la Sécurité au Travail',
        },
    ];

    const navigate = useNavigate();

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const handleCardClick = (id) => {
        navigate(`/project-details/${id}`);
    };

    return (
        <div className="carousel-container py-5">
            <div className="carousel-wrapper">
                <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {projects.map((project, index) => (
                        <div className="carousel-card" key={index} onClick={() => handleCardClick(project.id)}>
                            <div className="project-one__single">
                                <div className="project-one__img">
                                    <img className="card-image" src={project.image} alt="Project" />
                                </div>
                                <div className="project-one__content">
                                    <p className="project-one__tagline">Projet</p>
                                    <h2 className="project-one__title">{project.title}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="carousel-buttons px-4">
                    <button className="carousel-button" onClick={handlePrev}>&lt;</button>
                    <button className="carousel-button" onClick={handleNext}>&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default MultiCardCarousel;
