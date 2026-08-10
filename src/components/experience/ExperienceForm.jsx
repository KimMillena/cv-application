function ExperienceForm({ experienceDetails, onChange }) {
    return (
        <form className="experience-form">
            <div>
                <label htmlFor="company-name">Company Name:</label>
                <input 
                    type="text"
                    id="company-name"
                    name="companyName" 
                    value={experienceDetails.companyName}
                    onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor="position-title">Position Title:</label>
                <input 
                    type="text"
                    id="experience-position-title"
                    name="positionTitle"
                    value={experienceDetails.positionTitle}
                    onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor="experience-start-date">Start Date:</label>
                <input 
                    type="date"
                    id="experience-start-date"
                    name="experienceStartDate"
                    value={experienceDetails.experienceStartDate}
                    onChange={onChange}
                />
                <label htmlFor="experience-end-date">End Date:</label>
                <input 
                    type="date"
                    id="experience-end-date"
                    name="experienceEndDate"
                    value={experienceDetails.experienceEndDate}
                    onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor="job-description">Job Description:</label>
                <textarea 
                    id="job-description"
                    name="jobDescription"
                    value={experienceDetails.jobDescription}
                    onChange={onChange}
                />
            </div>
        </form>
    );
}

export default ExperienceForm;