import ResumeInput from '../ResumeInput';
import Button from '../Button';
import '../../styles/EducationForm.css';

function EducationForm({ educationDetails, onChange, onRemove }) {
    return (
        <form className="education-form">
            <div className="input-group">
                <ResumeInput 
                    id="school"
                    type="text"
                    labelName="School:"
                    nameData="school"
                    value={educationDetails.school}
                    onChange={onChange}
                />
            </div>

            <div className="input-group">
                <ResumeInput 
                    id="degree"
                    type="text"
                    labelName="Degree:"
                    nameData="degree"
                    value={educationDetails.degree}
                    onChange={onChange}
                />
            </div>

            <div className="input-group">
                <ResumeInput 
                    id="education-start-date"
                    type="date"
                    labelName="Start Date:"
                    nameData="educationStartDate"
                    value={educationDetails.educationStartDate}
                    onChange={onChange}
                />
                <ResumeInput 
                    id="education-end-date"
                    type="date"
                    labelName="End Date:"
                    nameData="educationEndDate"
                    value={educationDetails.educationEndDate}
                    onChange={onChange}
                />
            </div>

            <div className="button-row">
                <Button 
                    btnLabel="Remove Education"
                    btnClassName="remove-education-btn"
                    onClick={onRemove}
                />
            </div>
        </form>
    );
}

export default EducationForm; 