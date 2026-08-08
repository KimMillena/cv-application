import EducationForm from './EducationForm';

function EducationSection({ educationDetails, onChange }) {
    return (
        <div className="education-section">
            <h1>Education</h1>
            <EducationForm 
                educationDetails={educationDetails}
                onChange={onChange}
            />
        </div>
    );
}

export default EducationSection;