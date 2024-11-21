import { useState } from "react";
import { v4 as uuid } from "uuid";
import "../styles/Education.css";

const Education = ({
    educationList,
    setEducationList,
    educationForm,
    setEducationForm,
}) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducationForm({ ...educationForm, [name]: value });
    };

    const handleAddEducation = (e) => {
        e.preventDefault();
        setEducationList([...educationList, { ...educationForm, id: uuid() }]);
        console.log(educationList);
        setEducationForm({
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: "",
        });
    };

    return (
        <div id="education">
            <form action="">
                <h2>Education</h2>
                <label htmlFor="school">School</label>
                <input
                    type="text"
                    name="school"
                    value={educationForm.school}
                    onChange={handleChange}
                />

                <label htmlFor="degree">Degree</label>
                <input
                    type="text"
                    name="degree"
                    value={educationForm.degree}
                    onChange={handleChange}
                />

                <label htmlFor="startDate">Start Date</label>
                <input
                    type="text"
                    name="startDate"
                    value={educationForm.startDate}
                    onChange={handleChange}
                />

                <label htmlFor="endDate">End Date</label>
                <input
                    type="text"
                    name="endDate"
                    value={educationForm.endDate}
                    onChange={handleChange}
                />

                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    name="location"
                    value={educationForm.location}
                    onChange={handleChange}
                />

                <button onClick={handleAddEducation}>Add Education</button>
            </form>
        </div>
    );
};

export default Education;
