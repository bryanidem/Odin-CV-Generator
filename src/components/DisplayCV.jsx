import "../styles/DisplayCV.css";

const DisplayCV = ({ personalDetails, educationList, educationForm }) => {
    return (
        <div className="cv-page">
            <h2>CV</h2>
            <div id="personal">
                <p>{personalDetails.name}</p>
                <div>
                    <p>{personalDetails.email}</p>
                    <p>{personalDetails.phone}</p>
                    <p>{personalDetails.location}</p>
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
