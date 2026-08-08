import { useState } from 'react';
import PersonalDetailsSection from './components/personal-details/PersonalDetailsSection';
import ResumeSection from './components/resume-section/ResumeSection';
import './styles/App.css';

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const handlePersonalDetailsChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setPersonalDetails({
      ...personalDetails,
      [inputName]: inputValue,
    })
  };

  return (
    <>
      <h1>CV Application</h1>
      <PersonalDetailsSection 
        personalDetails={personalDetails}
        onChange={handlePersonalDetailsChange}
      />
      <ResumeSection 
        personalDetails={personalDetails}
      />
    </>
  )
}

export default App
