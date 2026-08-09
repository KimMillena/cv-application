function ResumeSection({ personalDetails, educationList }) {
    return (
        <div className="resume-section">
            <h1>Resume</h1>
            <p>{personalDetails.firstName}</p>
            <p>{personalDetails.lastName}</p>
            <p>{personalDetails.email}</p>
            <p>{personalDetails.phoneNumber}</p>
            <p>{personalDetails.address}</p>

            {educationList.map(education => (
                <div className="education-info-section">
                    <p>{education.school}</p>
                    <p>{education.degree}</p>
                    <p>{education.startDate}</p>
                    <p>{education.endDate}</p>
                </div>
            ))}
        </div>
    );
}

export default ResumeSection;