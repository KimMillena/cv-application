import '../styles/ResumeInput.css';

function ResumeInput({ 
    id,
    type,
    labelName,
    nameData,
    value,
    placeholder,
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
                    placeholder={placeholder}
                    onChange={onChange}
                />
            ) : (
                <input 
                    type={type}
                    id={id}
                    name={nameData}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            )}
        </>
    );
}

export default ResumeInput;

