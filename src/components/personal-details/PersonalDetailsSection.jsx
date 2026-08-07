import PersonalDetailsForm from './PersonalDetailsForm';

function PersonalDetailsSection({
    firstName,
    handleFirstNameInput,
    lastName,
    handleLastNameInput,
    email,
    handleEmailInput,
    phoneNumber,
    handlePhoneNumberInput,
    address,
    handleAddressInput,
 }) {
    return (
        <div className="personal-details-section">
            <h1>Personal Details</h1>
            <PersonalDetailsForm 
                firstName={firstName}
                handleFirstNameInput={handleFirstNameInput}
                lastName={lastName}
                handleLastNameInput={handleLastNameInput}
                email={email}
                handleEmailInput={handleEmailInput}
                phoneNumber={phoneNumber}
                handlePhoneNumberInput={handlePhoneNumberInput}
                address={address}
                handleAddressInput={handleAddressInput}
            />
        </div>
    );
}

export default PersonalDetailsSection;