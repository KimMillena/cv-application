function ResumeSection({ personalDetails }) {
    return (
        <>
            <h1>Resume</h1>
            <p>{personalDetails.firstName}</p>
            <p>{personalDetails.lastName}</p>
            <p>{personalDetails.email}</p>
            <p>{personalDetails.phoneNumber}</p>
            <p>{personalDetails.address}</p>
        </>
    );
}

export default ResumeSection;