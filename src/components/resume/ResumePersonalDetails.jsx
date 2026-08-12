import '../../styles/ResumePersonalDetails.css';

function ResumePersonalDetails({ personalDetails }) {
    return (
        <div className="resume-personal-details">
            <div className="resume-name">
                <h1>{personalDetails.firstName + " " + personalDetails.lastName}</h1>
            </div>
            <div className="resume-contact-details">
                {personalDetails.email && (<p>{personalDetails.email}</p>)}
                {personalDetails.phoneNumber && (<p>{personalDetails.phoneNumber}</p>)}
                {personalDetails.address && (<p>{personalDetails.address}</p>)}
            </div>
        </div>
    );
}   

export default ResumePersonalDetails;