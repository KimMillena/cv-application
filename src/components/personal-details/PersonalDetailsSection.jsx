import PersonalDetailsForm from './PersonalDetailsForm';
import '../../styles/PersonalDetailsSection.css';

function PersonalDetailsSection({ personalDetails, onChange }) {
    return (
        <div className="personal-details-section">
            <h1>Personal Details</h1>
            <PersonalDetailsForm 
                personalDetails={personalDetails}
                onChange={onChange}
            />
        </div>
    );
}

export default PersonalDetailsSection;