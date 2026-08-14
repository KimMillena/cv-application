import { useState } from 'react';
import Header from './components/Header';
import PersonalDetailsSection from './components/personal-details/PersonalDetailsSection';
import EducationSection from './components/education/EducationSection';
import ExperienceSection from './components/experience/ExperienceSection';
import Resume from './components/resume/Resume';
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
    { 
      id: crypto.randomUUID(),
      school: '',
      degree: '',
      educationStartDate: '',
      educationEndDate: ''
    },
  ]);

  const [experienceList, setExperienceList] = useState([
    { 
      id: crypto.randomUUID(),
      companyName: '',
      positionTitle: '',
      experienceStartDate: '',
      experienceEndDate: '',
      jobDescription: ''
    },
  ])

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
  };

  const handleExperienceChange = (e, id) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    const changedExperience = experienceList.map(experience => {
      if (experience.id === id) {
        return {
          ...experience,
          [inputName]: inputValue
        }
      }
      return experience;
    })

    setExperienceList(changedExperience);
  };

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
    ]);
  };

  const handleRemoveEducation = (id) => {
    setEducationList(prevEducation => 
      prevEducation.filter(education => education.id !== id)
    );
  };

  const handleAddExperience = () => {
    const newExperience = {
      id: crypto.randomUUID(),
      companyName: '',
      positionTitle: '',
      experienceStartDate: '',
      experienceEndDate: '',
      jobDescription: ''
    };

    setExperienceList(prevExperience => [
      ...prevExperience,
      newExperience
    ]);
  };

  const handleRemoveExperience = (id) => {
    setExperienceList(prevExperience =>
      prevExperience.filter(experience => experience.id !== id)
    );
        console.log(experienceList);
  };

  const handleClearResume = () => {

  };

  return (
    <main className="main-app">
      

      <div className="resume-builder">
        <Header 
          headerTitle="Resume Builder"
          onClick={handleClearResume}
        />

        <PersonalDetailsSection 
          personalDetails={personalDetails}
          onChange={handlePersonalDetailsChange}
        />
        <EducationSection
          educationDetails={educationList}
          onChange={handleEducationDetailsChange}
          onAdd={handleAddEducation}
          onRemove={handleRemoveEducation}
        />
        <ExperienceSection
          experienceDetails={experienceList}
          onChange={handleExperienceChange}
          onAdd={handleAddExperience}
          onRemove={handleRemoveExperience}
        />
      </div>
      
      <div className="resume-preview">
        <Resume 
          personalDetails={personalDetails}
          educationList={educationList}
          experienceList={experienceList}
        />
      </div>
    </main>
  )
}

export default App
