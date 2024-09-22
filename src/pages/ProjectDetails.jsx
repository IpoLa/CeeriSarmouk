import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProjectDetail.css'; // Ensure you have this CSS file

const ProjectDetail = () => {
    const { id } = useParams();
    
    const projects = {
        1: {
            title: "Télégestion De La Station De Distribution D'eau Potable Bordj-bourreidj",
            description: "Ce projet se concentre sur la gestion à distance des stations de distribution d'eau, améliorant l'efficacité et la surveillance.",
            image: "https://www.preprod4.sensinglabo.com/storage/137/XAyzulhnU6H8rtT8ngYvzN38GcOSC9-metacG9ydGZvbGlvLWRldGFpbC1pbWcuanBn-.jpg",
            features: ["Surveillance en temps réel", "Alertes automatisées", "Analyse de données"],
            duration: "6 mois",
            team: "Équipe A",
        },
        2: {
            title: "Gestion des Risques Environnementaux au Site A",
            description: "Ce projet gère les risques environnementaux au Site A, assurant la conformité avec les règlements et renforçant les protocoles de sécurité.",
            image: "https://www.preprod4.sensinglabo.com/storage/187/vnEMeccjHZF0M9ckE7Jxk8iFYkjWhl-metaSW5jZW5kaWUtem9uZS1pbmR1c3RyaWVsbGUtU2tpa2RhLmpwZw==-.jpg",
            features: ["Évaluations des risques", "Stratégies d'atténuation", "Formation du personnel"],
            duration: "3 mois",
            team: "Équipe B",
        },
        3: {
            title: "Audit de Sécurité sur le Site B",
            description: "Ce projet implique la réalisation d'un audit de sécurité complet pour assurer le bien-être de tous les employés.",
            image: "https://www.example.com/image3.jpg", // Replace with a valid image URL
            features: ["Inspections de site", "Formation à la sécurité", "Contrôles de conformité"],
            duration: "4 mois",
            team: "Équipe C",
        },
        4: {
            title: "Formation sur la Sécurité au Travail",
            description: "Ce programme de formation vise à éduquer les employés sur les protocoles de sécurité et les procédures d'urgence.",
            image: "https://www.example.com/image4.jpg", // Replace with a valid image URL
            features: ["Formation pratique", "Drills d'urgence", "Certification"],
            duration: "2 mois",
            team: "Équipe D",
        },
    };

    const project = projects[id];

    return (
        <div className="project-detail">
            {project ? (
                <div className="project-detail-container fade-in">
                    <h1 className="project-title">{project.title}</h1>
                    <img className="project-image" src={project.image} alt={project.title} />
                    <p className="project-description">{project.description}</p>
                    <h3>Caractéristiques Clés :</h3>
                    <ul className="project-features">
                        {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <div className="project-info">
                        <p><strong>Durée :</strong> {project.duration}</p>
                        <p><strong>Équipe :</strong> {project.team}</p>
                    </div>
                    <a className="project-link" href="/">Retour aux Projets</a>
                </div>
            ) : (
                <p>Projet non trouvé.</p>
            )}
        </div>
    );
};

export default ProjectDetail;
