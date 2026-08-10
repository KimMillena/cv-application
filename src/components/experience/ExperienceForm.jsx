function ExperienceForm() {
    return (
        <form className="experience-form">
            <div>
                <label htmlFor="company-name">Company Name:</label>
                <input 
                    type="text"
                    id="company-name"
                    name="companyName" 
                />
            </div>
            <div>
                <label htmlFor="position-title">Position Title:</label>
                <input 
                    type="text"
                    id="experience-position-title"
                    name="positionTitle"
                />
            </div>
            <div>
                <label htmlFor="experience-start-date">Start Date:</label>
                <input 
                    type="date"
                    id="experience-start-date"
                    name="experienceStartDate" 
                />
                <label htmlFor="experience-end-date">End Date:</label>
                <input 
                    type="date"
                    id="experience-end-date"
                    name="experienceEndDate" 
                />
            </div>
            <div>
                <label htmlFor="job-description">Job Description:</label>
                <textarea 
                    id="job-description"
                    name="jobDescription" 
                />
            </div>
        </form>
    );
}

export default ExperienceForm;