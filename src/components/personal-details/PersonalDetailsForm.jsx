import ResumeInput from '../ResumeInput';
import '../../styles/PersonalDetailsForm.css';

function PersonalDetailsForm({ personalDetails, onChange }) {
    return (
        <form className="personal-details-form">
            <div className="input-group">
                <ResumeInput 
                    id="first-name"
                    type="text"
                    labelName="First Name:"
                    nameData="firstName"
                    value={personalDetails.firstName}
                    placeholder="e.g John"
                    onChange={onChange}
                />
                <ResumeInput 
                    id="last-name"
                    type="text"
                    labelName="Last Name:"
                    nameData="lastName"
                    value={personalDetails.lastName}
                    placeholder="e.g Doe"
                    onChange={onChange}
                />
            </div>

            <div className="input-group">
                <ResumeInput 
                    id="email"
                    type="email"
                    labelName="Email:"
                    nameData="email"
                    value={personalDetails.email}
                    placeholder="e.g sample@email.com"
                    onChange={onChange}
                />
            </div>

            <div className="input-group">
                 <ResumeInput 
                    id="phone-number"
                    type="number"
                    labelName="Phone Number:"
                    nameData="phoneNumber"
                    value={personalDetails.phoneNumber}
                    placeholder="e.g 1234567890"
                    onChange={onChange}
                />
            </div>

            <div className="input-group">
                <ResumeInput 
                    id="address"
                    type="text"
                    labelName="Address:"
                    nameData="address"
                    value={personalDetails.address}
                    placeholder="e.g 123 Main Street, City, Country"
                    onChange={onChange}
                />
            </div>
        </form>
    );
}

export default PersonalDetailsForm;