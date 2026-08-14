import '../../styles/ResumeExperienceDetails.css';
import formatDate from '../utils/formatDate';

function ResumeExperienceDetails({ experienceDetails }) {
    return (
        <div className="resume-experience-details">
            <h2 className="resume-experience-details-header">Experience</h2>
            <hr></hr>

            {experienceDetails.map(experience => (
                <div className="resume-experience-group">
                    <div className="resume-experience-left">
                        {experience.companyName && (
                            <p className="resume-experience-company">{experience.companyName}</p>
                        )}
                        {experience.positionTitle && (
                            <p className="resume-experience-position">{experience.positionTitle}</p>
                        )}
                        {experience.jobDescription && (
                            <p className="resume-experience-description">{experience.jobDescription}</p>
                        )}
                    </div>
                    <div className="resume-experience-right">
                        {experience.experienceStartDate && (
                            <p className="resume-experience-start-date">{formatDate(experience.experienceStartDate)}</p>
                        )}
                        {experience.experienceEndDate && (
                            <p className="resume-experience-end-date">{formatDate(experience.experienceEndDate)}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ResumeExperienceDetails;