import EducationForm from './EducationForm';
import Button from '../Button';

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
                btnLabel="Add education"
                onClick={onAdd}
            />
        </div>
    );
}

export default EducationSection;