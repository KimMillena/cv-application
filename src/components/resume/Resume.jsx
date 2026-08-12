import ResumePersonalDetails from "./ResumePersonalDetails";
import ResumeEducationDetails from "./ResumeEducationDetails";
import '../../styles/Resume.css';

function Resume({ personalDetails, educationList, experienceList }) {
    return (
        <div className="resume">
            <ResumePersonalDetails personalDetails={personalDetails} />

            <ResumeEducationDetails educationDetails={educationList}/>

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