import ExperienceForm from './ExperienceForm';
import Button from '../Button';

function ExperienceSection({ experienceDetails, onChange, onAdd, onRemove }) {
    return (
        <div className="experience-section">
            <h1>Experience</h1>
            <ExperienceForm 
                experienceDetails={experienceDetails}
                onChange={onChange}
                onRemove={onRemove}
            />
            <Button 
                btnLabel="Add experience" 
                onClick={onAdd}
            />
        </div>
    );
}

export default ExperienceSection;