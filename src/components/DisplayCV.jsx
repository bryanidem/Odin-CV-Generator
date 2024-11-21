import "../styles/DisplayCV.css";

const DisplayCV = ({ personalDetails, educationList, educationForm }) => {
    return (
        <div className="cv-page">
            <div id="personal">
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
                <h2>Professional Experience</h2>

                <div>
                    <ul>
                        {educationList.map((education) => {
                            return (
                                <div key={education.id}>
                                    <div>
                                        <p>
                                            {console.log(education.id)}
                                            {education.startDate} -{" "}
                                            {education.endDate}
                                        </p>
                                        <p>{education.location}</p>
                                    </div>
                                    <div>
                                        <p>{education.school}</p>
                                        <p>{education.degree}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </ul>
                </div>

                <div>
                    <p>
                        {educationForm.startDate} - {educationList.endDate}
                    </p>
                    <p>{educationForm.location}</p>
                </div>
                <div>
                    <p>{educationForm.school}</p>
                    <p>{educationForm.degree}</p>
                </div>
            </div>
        </div>
    );
};

export default DisplayCV;
