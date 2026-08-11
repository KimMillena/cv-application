import ResumeInput from '../ResumeInput';
import Button from '../Button';
import '../../styles/ExperienceForm.css';

function ExperienceForm({ experienceDetails, onChange, onRemove }) {
    return (
        <form className="experience-form">
            <div className="input-group">
                <ResumeInput 
                    id="company-name"
                    type="text"
                    labelName="Company Name:"
                    nameData="companyName"
                    value={experienceDetails.companyName}
                    onChange={onChange}
                />
            </div>

            <div className="input-group">
                <ResumeInput 
                    id="position-title"
                    type="text"
                    labelName="Position Title:"
                    nameData="positionTitle"
                    value={experienceDetails.positionTitle}
                    onChange={onChange}
                />
            </div>

            <div className="input-group">
                <ResumeInput 
                    id="experience-start-date"
                    type="date"
                    labelName="Start Date:"
                    nameData="experienceStartDate"
                    value={experienceDetails.experienceStartDate}
                    onChange={onChange}
                />
                <ResumeInput 
                    id="experience-end-date"
                    type="date"
                    labelName="End Date:"
                    nameData="experienceEndDate"
                    value={experienceDetails.experienceEndDate}
                    onChange={onChange}
                />
            </div>

            <div className="input-group">
                <ResumeInput 
                    id="job-description"
                    type="textarea"
                    labelName="Job Description:"
                    nameData="jobDescription"
                    value={experienceDetails.jobDescription}
                    onChange={onChange}
                />
            </div>

            <div className="button-row">
                <Button 
                    btnLabel="Remove Experience"
                    btnClassName="remove-education-btn"
                    onClick={onRemove}
                />
            </div>
        </form>
    );
}

export default ExperienceForm;