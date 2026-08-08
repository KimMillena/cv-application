function ResumeSection({ personalDetails, educationDetails }) {
    return (
        <>
            <h1>Resume</h1>
            <p>{personalDetails.firstName}</p>
            <p>{personalDetails.lastName}</p>
            <p>{personalDetails.email}</p>
            <p>{personalDetails.phoneNumber}</p>
            <p>{personalDetails.address}</p>

            <p>{educationDetails.school}</p>
            <p>{educationDetails.degree}</p>
            <p>{educationDetails.startDate}</p>
            <p>{educationDetails.endDate}</p>
        </>
    );
}

export default ResumeSection;