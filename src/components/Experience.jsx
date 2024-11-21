import { useState } from "react";
import arrowDown from "../assets/images/arrow_down.svg";
import arrowUp from "../assets/images/arrow_up.svg";
import plusIcon from "../assets/images/plus.svg";
import "../styles/Experience.css";
import { v4 as uuid } from "uuid";

const Experience = ({
    experienceList,
    setExperienceList,
    experienceForm,
    setExperienceForm,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperienceForm({ ...experienceForm, [name]: value });
    };

    const handleAddExperience = (e) => {
        e.preventDefault();
        setExperienceList([...experienceList, experienceForm]);
        setExperienceForm({
            id: uuid(),
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
        });
    };

    return (
        <div id="experience">
            <div className="input-header">
                <h2>Experience</h2>
                <button onClick={toggleVisibility}>
                    <img src={isVisible ? arrowUp : arrowDown} alt="" />
                </button>
            </div>

            {isVisible && (
                <form action="">
                    <label htmlFor="company">Company Name</label>
                    <input
                        type="text"
                        name="company"
                        value={experienceForm.company}
                        onChange={handleChange}
                    />

                    <label htmlFor="position">Position Title</label>
                    <input
                        type="text"
                        name="position"
                        value={experienceForm.position}
                        onChange={handleChange}
                    />

                    <label htmlFor="startDate">Start Date</label>
                    <input
                        type="text"
                        name="startDate"
                        value={experienceForm.startDate}
                        onChange={handleChange}
                    />

                    <label htmlFor="endDate">End Date</label>
                    <input
                        type="text"
                        name="endDate"
                        value={experienceForm.endDate}
                        onChange={handleChange}
                    />

                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={experienceForm.location}
                        onChange={handleChange}
                    />

                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        value={experienceForm.description}
                        onChange={handleChange}
                    ></textarea>

                    <div>
                        <button onClick={handleAddExperience}>
                            <img src={plusIcon} alt="" />
                            Experience
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Experience;
