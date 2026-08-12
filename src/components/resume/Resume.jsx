import ResumePersonalDetails from "./ResumePersonalDetails";
import '../../styles/Resume.css';

function Resume({ personalDetails, educationList, experienceList }) {
    return (
        <div className="resume">
            <ResumePersonalDetails personalDetails={personalDetails} />

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

export default Resume;