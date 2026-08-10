import ExperienceForm from './ExperienceForm';
import Button from '../Button';

function ExperienceSection({ onAdd }) {
    return (
        <div className="experience-section">
            <h1>Experience</h1>
            <ExperienceForm />
            <Button 
                btnLabel="Add experience" 
                onClick={onAdd} 
            />
        </div>
    );
}

export default ExperienceSection;