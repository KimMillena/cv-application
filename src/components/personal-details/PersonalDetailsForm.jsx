function PersonalDetailsForm({ personalDetails, onChange }) {
    return (
        <form className="personal-details-form">
            <div>
                <label htmlFor="first-name">First Name:</label>
                <input 
                    type="text" 
                    id="first-name"
                    name="firstName"
                    value={personalDetails.firstName}
                    onChange={(e) => onChange(e)}
                />
            </div>
            <div>
                <label htmlFor="last-name">Last Name:</label>
                <input 
                    type="text"
                    id="last-name"
                    name="lastName"
                    value={personalDetails.lastName}
                    onChange={(e) => onChange(e)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    value={personalDetails.email}
                    onChange={(e) => onChange(e)}
                />
            </div>
            <div>
                <label htmlFor="phone-number">Phone Number:</label>
                <input 
                    type="tel"
                    id="phone-number"
                    name="phoneNumber"
                    value={personalDetails.phoneNumber}
                    onChange={(e) => onChange(e)}
                />
            </div>
            <div>
                <label htmlFor="address">Address:</label>
                <input 
                    type="text"
                    id="address"
                    name="address"
                    value={personalDetails.address}
                    onChange={(e) => onChange(e)}
                />
            </div>
        </form>
    );
}

export default PersonalDetailsForm;