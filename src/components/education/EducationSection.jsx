import EducationForm from './EducationForm';
import Button from '../Button';

function EducationSection({ educationDetails, onChange, onAdd, onRemove }) {
    return (
        <div className="education-section">
            <h1>Education</h1>
            <EducationForm 
                educationDetails={educationDetails}
                onChange={onChange}
                onRemove={onRemove}
            />
            <Button 
                btnLabel="Add education"
                onClick={onAdd}
            />
        </div>
    );
}

export default EducationSection;