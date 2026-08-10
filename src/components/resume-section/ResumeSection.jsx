function ResumeSection({ personalDetails, educationList, experienceList }) {
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
                    <p>{education.educationStartDate}</p>
                    <p>{education.educationEndDate}</p>
                </div>
            ))}

            {experienceList.map(experience => (
                <div className="experience-info-section">
                    <p>{experience.companyName}</p>
                    <p>{experience.positionTitle}</p>
                    <p>{experience.experienceStartDate}</p>
                    <p>{experience.experienceEndDate}</p>
                    <p>{experience.jobDescription}</p>
                </div>
            ))}
        </div>
    );
}

export default ResumeSection;