import { useState } from 'react';
import PersonalDetailsSection from './components/personal-details/PersonalDetailsSection';
import ResumeSection from './components/resume-section/ResumeSection';
import './styles/App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  
  const handleFirstNameInput = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastNameInput = (e) => {
    setLastName(e.target.value);
  }

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  }

  const handlePhoneNumberInput = (e) => {
    setPhoneNumber(e.target.value);
  }

  const handleAddressInput = (e) => {
    setAddress(e.target.value);
  }

  return (
    <>
      <h1>CV Application</h1>
      <PersonalDetailsSection 
        firstName={firstName}
        handleFirstNameInput={handleFirstNameInput}
        lastName={lastName}
        handleLastNameInput={handleLastNameInput}
        email={email}
        handleEmailInput={handleEmailInput}
        phoneNumber={phoneNumber}
        handlePhoneNumberInput={handlePhoneNumberInput}
        address={address}
        handleAddressInput={handleAddressInput}
      />
      <ResumeSection 
        firstName={firstName}
        lastName={lastName}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
      />
    </>
  )
}

export default App
