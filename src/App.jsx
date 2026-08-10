import { useState } from 'react';
import PersonalDetailsSection from './components/personal-details/PersonalDetailsSection';
import EducationSection from './components/education/EducationSection';
import ExperienceSection from './components/experience/ExperienceSection';
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

  const [educationList, setEducationList] = useState([
    { id: crypto.randomUUID(), school: '', degree: '', startDate: '', endDate: '' },
  ]);

  const handlePersonalDetailsChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setPersonalDetails({
      ...personalDetails,
      [inputName]: inputValue,
    })
  };

  const handleEducationDetailsChange = (e, id) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    const changedEducation = educationList.map(education => {
      if (education.id === id) {
        console.log(education);
        return {
          ...education,
        [inputName]: inputValue
        }
      }
      return education;
    })

    setEducationList(changedEducation)
  } 

  const handleAddEducation = () => {
    console.log(educationList)

    const newEducation = { 
      id: crypto.randomUUID(), 
      school: '', 
      degree: '', 
      startDate: '', 
      endDate: '' 
    };

    setEducationList(prevEducation => [
      ...prevEducation,
      newEducation
    ])
  };

  const handleRemoveEducation = (id) => {
    setEducationList(prevEducation => 
      prevEducation.filter(education => education.id !== id)
    );
  };

  return (
    <>
      <h1>CV Application</h1>
      <PersonalDetailsSection 
        personalDetails={personalDetails}
        onChange={handlePersonalDetailsChange}
      />
      {educationList.map((education) => (
         <EducationSection
          key={education.id}
          educationDetails={education}
          onChange={(e) => handleEducationDetailsChange(e, education.id)}
          onAdd={handleAddEducation}
          onRemove={() => handleRemoveEducation(education.id)}
        />
      ))}
      <ExperienceSection />
      <ResumeSection 
        personalDetails={personalDetails}
        educationList={educationList}
      />
    </>
  )
}

export default App
