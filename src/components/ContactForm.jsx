import { useState } from "react";

export default function UserForm({addContact}) {

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(contactInfo);
    setContactInfo({ name: "", email: "", phonenumber: "" });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}> 
        <div>
          <h3>Submit links you found useful</h3>
          <p> The purpose of this form is for you to submit links and preferences that you found useful for your learning to share within Vodafone.</p>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Resource"
            value={contactInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contactInfo.email}
            onChange={handleChange}

          />
        </div>
        <div>
          <input
            type="number"
            name="phonenumber"
            placeholder="Phone Number"
            value={contactInfo.phonenumber}
            onChange={handleChange}

          />
        </div>
        <div>
          <button>Submit Contact</button>
        </div>
      </form>
    </div>
  );
}