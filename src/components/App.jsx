import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import DisplayCV from "./DisplayCV";
import Experience from "./Experience";
import "../styles/App.css";
import { v4 as uuid } from "uuid";

const App = () => {
    const [personalDetails, setPersonalDetails] = useState({
        name: "Bryan Medina",
        email: "bryan.medina.per@gmail.com",
        phone: "1231231231",
        location: "Rioverde, SLP, México",
    });

    const [educationList, setEducationList] = useState([]);
    const [educationForm, setEducationForm] = useState({
        id: uuid(),
        school: "Dolores Herrera Vda. de Richard",
        degree: "Elementary School",
        startDate: "Dec 2002",
        endDate: "Jan 2008",
        location: "SLP, México",
    });

    const [experienceList, setExperienceList] = useState([]);
    const [experienceForm, setExperienceForm] = useState({
        id: uuid(),
        company: "Testing Company",
        position: "Trainee",
        startDate: "Dec 2020",
        endDate: "Oct 2023",
        location: "SLP, México",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sunt reiciendis deserunt quas nemo aut pariatur error, repellendus sit quod optio similique. Nisi blanditiis, molestiae rerum sed laborum nam! Nobis?",
    });

    const [isEducationVisible, setIsEducationVisible] = useState(false);
    const [isExperienceVisible, setIsExperienceVisible] = useState(false);

    return (
        <div id="app">
            <div className="cv-inputs">
                <PersonalDetails
                    personalDetails={personalDetails}
                    setPersonalDetails={setPersonalDetails}
                />
                <Education
                    educationList={educationList}
                    setEducationList={setEducationList}
                    educationForm={educationForm}
                    setEducationForm={setEducationForm}
                />

                <Experience
                    experienceList={experienceList}
                    setExperienceList={setExperienceList}
                    experienceForm={experienceForm}
                    setExperienceForm={setExperienceForm}
                />
            </div>
            <div className="cv-display">
                <DisplayCV
                    personalDetails={personalDetails}
                    educationList={educationList}
                    educationForm={educationForm}
                    experienceList={experienceList}
                    experienceForm={experienceForm}
                />
            </div>
        </div>
    );
};

export default App;
