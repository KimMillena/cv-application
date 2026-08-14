import '../../styles/ResumeEducationDetails.css';
import formatDate from '../utils/formatDate';

function ResumeEducationDetails({ educationDetails }) {
    return (
        <div className="resume-education-details">
            <h2 className="resume-education-details-header">Education</h2>
            <hr></hr>

            {educationDetails.map(education => (
                <div key={education.id} className="resume-education-details-group">
                    <div className="resume-education-left">
                        {education.school && (
                            <p className="resume-education-school">{education.school}</p>
                        )}
                        {education.degree && (
                            <p className="resume-education-degree">{education.degree}</p>
                        )}
                    </div>
                    <div className="resume-education-right">
                        {education.educationStartDate && (
                            <p className="resume-education-start-date">{formatDate(education.educationStartDate)}</p>
                        )}
                        {education.educationEndDate && (
                            <p className="resume-education-end-date">{formatDate(education.educationEndDate)}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ResumeEducationDetails;