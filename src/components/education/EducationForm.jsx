import Button from '../Button';

function EducationForm({ educationDetails, onChange, onRemove }) {
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
                <label htmlFor="education-start-date">Start Date:</label>
                <input 
                    type="date"
                    id="education-start-date"
                    name="educationStartDate"
                    value={educationDetails.educationStartDate}
                    onChange={onChange}
                />

                <label htmlFor="education-end-date">End Date:</label>
                <input 
                    type="date"
                    id="education-end-date"
                    name="educationEndDate"
                    value={educationDetails.educationEndDate}
                    onChange={onChange}
                />
            </div>
            <Button 
                btnLabel="Remove Education"
                onClick={onRemove}
            />
        </form>
    );
}

export default EducationForm; 