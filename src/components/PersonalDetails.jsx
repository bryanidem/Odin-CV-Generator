const PersonalDetails = ({ personalDetails, setPersonalDetails }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalDetails({ ...personalDetails, [name]: value });
    };

    return (
        <div id="personal-details">
            <h2>Personal Details</h2>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                value={personalDetails.name}
                onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                value={personalDetails.email}
                onChange={handleChange}
            />
            <label htmlFor="phone">Phone Number</label>
            <input
                type="text"
                name="phone"
                value={personalDetails.phone}
                onChange={handleChange}
            />
            <label htmlFor="location">Location</label>
            <input
                type="text"
                name="location"
                value={personalDetails.location}
                onChange={handleChange}
            />
        </div>
    );
};

export default PersonalDetails;
