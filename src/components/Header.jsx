import '../styles/Header.css';

function Header({ headerTitle }) {
    return (
        <header className="resume-builder-header">
            <h1>{headerTitle}</h1>
        </header>
    );
}   

export default Header;