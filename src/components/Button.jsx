function Button({ btnLabel, onClick }) {
    return (
        <>
            <button 
                type="button"
                onClick={onClick}
            >
                {btnLabel}
            </button>
        </>
    );
}

export default Button;