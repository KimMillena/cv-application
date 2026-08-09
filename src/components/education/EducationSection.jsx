import EducationForm from './EducationForm';
import Button from '../Button';

function EducationSection({ educationDetails, onChange, btnLabel, onClick }) {
    return (
        <div className="education-section">
            <h1>Education</h1>
            <EducationForm 
                educationDetails={educationDetails}
                onChange={onChange}
            />
            <Button 
                label={btnLabel}
                onClick={onClick}
            />
        </div>
    );
}

export default EducationSection;