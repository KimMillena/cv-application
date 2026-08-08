function EducationForm({ educationDetails, onChange }) {
    return (
        <form className="education-form">
            <div>
                <label htmlFor="school">School:</label>
                <input 
                    type="text" 
                    id="school"
                    name="school"
                    value={educationDetails.school}
                    onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor="degree">Degree:</label>
                <input 
                    type="text"
                    id="degree"
                    name="degree"
                    value={educationDetails.degree}
                    onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor="start-date">Start Date:</label>
                <input 
                    type="date"
                    id="start-date"
                    name="startDate"
                    value={educationDetails.startDate}
                    onChange={onChange}
                />

                <label htmlFor="end-date">End Date:</label>
                <input 
                    type="date"
                    id="end-date"
                    name="endDate"
                    value={educationDetails.endDate}
                    onChange={onChange}
                />
            </div>
        </form>
    );
}

export default EducationForm; 