import ResumePersonalDetails from "./ResumePersonalDetails";
import ResumeEducationDetails from "./ResumeEducationDetails";
import ResumeExperienceDetails from "./ResumeExperienceDetails";
import '../../styles/Resume.css';

function Resume({ personalDetails, educationList, experienceList }) {
    return (
        <div className="resume">
            <ResumePersonalDetails personalDetails={personalDetails} />
            <ResumeEducationDetails educationDetails={educationList} />
            <ResumeExperienceDetails experienceDetails={experienceList} />
        </div>
    );
}

export default Resume;