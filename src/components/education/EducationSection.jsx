import EducationForm from './EducationForm';
import Button from '../Button';
import '../../styles/EducationSection.css';

function EducationSection({ educationDetails, onChange, onAdd, onRemove }) {
    return (
        <div className="education-section">
            <h1>Education</h1>

            {educationDetails.map(education => (
                <EducationForm 
                    key={education.id}
                    educationDetails={educationDetails}
                    onChange={(e) => onChange(e, education.id)}
                    onRemove={() => onRemove(education.id)}
                />
            ))}

            <Button 
                btnLabel="Add Education"
                btnClassName="add-education-btn"
                onClick={onAdd}
            />
        </div>
    );
}

export default EducationSection;