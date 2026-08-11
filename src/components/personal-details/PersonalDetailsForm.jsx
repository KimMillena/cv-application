import ResumeInput from '../ResumeInput';

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
                    onChange={onChange}
                />
                <ResumeInput 
                    id="last-name"
                    type="text"
                    labelName="Last Name:"
                    nameData="lastName"
                    value={personalDetails.lastName}
                    onChange={onChange}
                />
            </div>

            <div class="input-group">
                <ResumeInput 
                    id="email"
                    type="email"
                    labelName="Email:"
                    nameData="email"
                    value={personalDetails.email}
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
                    onChange={onChange}
                />
            </div>
        </form>
    );
}

export default PersonalDetailsForm;