import ExperienceForm from './ExperienceForm';
import Button from '../Button';
import '../../styles/ExperienceSection.css';

function ExperienceSection({ experienceDetails, onChange, onAdd, onRemove }) {
    return (
        <div className="experience-section">
            <h1>Experience</h1>
            
            {experienceDetails.map(experience => (
                <ExperienceForm 
                    key={experience.id}
                    experienceDetails={experienceDetails}
                    onChange={(e) => onChange(e, experience.id)}
                    onRemove={() => onRemove(experience.id)}
                />
            ))}

            <Button 
                btnLabel="Add Experience"
                btnClassName="add-experience-btn" 
                onClick={onAdd}
            />
        </div>
    );
}

export default ExperienceSection;