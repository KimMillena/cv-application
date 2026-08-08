import { useState } from 'react';
import PersonalDetailsSection from './components/personal-details/PersonalDetailsSection';
import EducationSection from './components/education/EducationSection';
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

  const [educationDetails, setEducationDetails] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
  })

  const handlePersonalDetailsChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setPersonalDetails({
      ...personalDetails,
      [inputName]: inputValue,
    })
  };

  const handleEducationDetailsChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setEducationDetails({
      ...educationDetails,
      [inputName]: inputValue,
    })
  } 

  return (
    <>
      <h1>CV Application</h1>
      <PersonalDetailsSection 
        personalDetails={personalDetails}
        onChange={handlePersonalDetailsChange}
      />
      <EducationSection
        educationDetails={educationDetails}
        onChange={handleEducationDetailsChange}
      />
      <ResumeSection 
        personalDetails={personalDetails}
        educationDetails={educationDetails}
      />
    </>
  )
}

export default App
