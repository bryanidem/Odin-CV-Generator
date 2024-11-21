import "../styles/DisplayCV.css";

const DisplayCV = ({
    personalDetails,
    educationList,
    educationForm,
    experienceList,
    experienceForm,
}) => {
    return (
        <div className="cv-page">
            <div id="cv-personal">
                <h2>{personalDetails.name}</h2>
                <div className="contact-info">
                    <div className="contact-item">
                        <img src="src/assets/images/mail.svg" alt="" />
                        <p>{personalDetails.email}</p>
                    </div>
                    <div className="contact-item">
                        <img src="src/assets/images/phone.svg" alt="" />
                        <p>{personalDetails.phone}</p>
                    </div>
                    <div className="contact-item">
                        <img src="src/assets/images/location.svg" alt="" />
                        <p>{personalDetails.location}</p>
                    </div>
                </div>
            </div>

            <div id="cv-education">
                <div className="cv-header">
                    <p>Education</p>
                </div>

                <div>
                    {educationList.map((education) => {
                        return (
                            <div key={education.id} className="education-item">
                                <div>
                                    <p>
                                        {education.startDate} -
                                        {education.endDate}
                                    </p>
                                    <p>{education.location}</p>
                                </div>
                                <div>
                                    <strong>{education.school}</strong>
                                    <p>{education.degree}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="education-item">
                    <div>
                        <p>
                            {educationForm.startDate} - {educationForm.endDate}
                        </p>
                        <p>{educationForm.location}</p>
                    </div>
                    <div>
                        <strong>{educationForm.school}</strong>
                        <p>{educationForm.degree}</p>
                    </div>
                </div>
            </div>

            <div id="cv-experience">
                <div className="cv-header">
                    <p>Experience</p>
                </div>
                <div>
                    {experienceList.map((experience) => {
                        return (
                            <div
                                className="experience-item"
                                key={experience.id}
                            >
                                <div>
                                    <p>
                                        {experience.startDate} -
                                        {experience.endDate}
                                    </p>
                                    <p>{experience.location}</p>
                                </div>
                                <div>
                                    <strong>experience.company</strong>
                                    <p>experience.position</p>
                                    <p>experience.descrition</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default DisplayCV;
