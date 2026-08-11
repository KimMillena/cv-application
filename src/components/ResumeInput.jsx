import '../styles/ResumeInput.css';

function ResumeInput({ 
    id,
    type,
    labelName,
    nameData,
    value,
    onChange,
}) {
    return (
        <>
            <label htmlFor={id}>{labelName}</label>
            {type === "textarea" ? (
                <textarea 
                    id={id}
                    name={nameData}
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <input 
                    type={type}
                    id={id}
                    name={nameData}
                    value={value}
                    onChange={onChange}
                />
            )}
        </>
    );
}

export default ResumeInput;

