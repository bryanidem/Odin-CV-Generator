import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import DisplayCV from "./DisplayCV";
import "../styles/App.css";

const App = () => {
    const [personalDetails, setPersonalDetails] = useState({
        name: "Bryan Medina",
        email: "bryan.medina.per@gmail.com",
        phone: "1231231231",
        location: "Rioverde, SLP, México",
    });

    const [educationList, setEducationList] = useState([]);
    const [educationForm, setEducationForm] = useState({
        id: "0",
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
    });

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
            </div>
            <div className="cv-display">
                <DisplayCV
                    personalDetails={personalDetails}
                    educationList={educationList}
                    educationForm={educationForm}
                />
            </div>
        </div>
    );
};

export default App;
