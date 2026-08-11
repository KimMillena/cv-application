import '../styles/Button.css';

function Button({ btnLabel, btnClassName, onClick }) {
    return (
        <>
            <button 
                type="button"
                className={`btn ${btnClassName}`}
                onClick={onClick}
            >
                {btnLabel}
            </button>
        </>
    );
}

export default Button;