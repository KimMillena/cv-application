function ResumeSection({
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
}) {
    return (
        <>
            <h1>Resume</h1>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <p>{phoneNumber}</p>
            <p>{address}</p>
        </>
    );
}

export default ResumeSection;