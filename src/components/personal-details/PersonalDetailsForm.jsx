function PersonalDetailsForm({
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
        <form className="personal-details-form">
            <div>
                <label htmlFor="first-name">First Name:</label>
                <input 
                    type="text" 
                    id="first-name"
                    name="first-name"
                    value={firstName}
                    onChange={(e) => handleFirstNameInput(e)}
                />
            </div>
            <div>
                <label htmlFor="last-name">Last Name:</label>
                <input 
                    type="text"
                    id="last-name"
                    name="last-name"
                    value={lastName}
                    onChange={(e) => handleLastNameInput(e)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => handleEmailInput(e)}
                />
            </div>
            <div>
                <label htmlFor="phone-number">Phone Number:</label>
                <input 
                    type="tel"
                    id="phone-number"
                    name="phone-number"
                    value={phoneNumber}
                    onChange={(e) => handlePhoneNumberInput(e)}
                />
            </div>
            <div>
                <label htmlFor="address">Address:</label>
                <input 
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => handleAddressInput(e)}
                />
            </div>
        </form>
    );
}

export default PersonalDetailsForm;