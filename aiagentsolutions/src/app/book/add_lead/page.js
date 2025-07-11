"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from 'react-hot-toast';
import { useRouter } from "next/navigation";

export default function AddBook() {
  const [lead, setLead] = useState({});
  const router = useRouter()

  const handleChange = ({ target }) => {
    const name = target && target.name;
    const value = target && target.value;
    setLead({ ...lead, [name]: value });
  };

  const handleSubmit = async() => {
   const response = await axios.post("/api/leads",lead);
   if(response){
   toast.success("Lead submitted successfully");
   }
  return router.push("/");
  
  };
  
  return (
    <div className="book-container">
      <h1 className="book-title">Book a Call with us</h1>
      <div className="sc-96a9560f-1 sc-babf4446-1 fEHMFo kPqkMF tally-form-logo book-div" data-sentry-element="RespondContainer" data-sentry-component="FormBuilderLogo" data-sentry-source-file="index.tsx"><img src="https://storage.tally.so/761cf432-d9ab-4ed5-912a-7ef474db1a31/DALL-E-2024-01-16-14.41.53---Design-a-sleek-modern-logo-for-a-company-called-Reprise-AI-.-The-logo-should-be-simple-yet-impactful-featuring-a-stylized-representation-of-a-brain.png" className="book-img-logo" alt="Form logo"/></div>
      <p className="book-name">Name</p>
      <input
        type="text"
        name="name"
        className="book-input"
        onChange={handleChange}
      />

      <p className="book-name">Please provide your website *</p>
      <input
        type="text"
        name="website"
        className="book-input"
        onChange={handleChange}
      />

      <p className="book-name">
        Please describe the AI Agent / Project you did like to discuss (please
        provide as much detail as possible)
      </p>
      <input
        type="text"
        name="project"
        className="book-input"
        onChange={handleChange}
      />

      <p className="book-name">
        Which best describes the reason for the call? *
      </p>
      <div>
        <input
          type="radio"
          name="reason"
          value="There's a specific project I want to discuss"
          // checked={selectedOption === option}
          onChange={handleChange}
          className="mr-2"
        />
        <strong>There are a specific project I want to discuss</strong><br/>
        <input
          type="radio"
          name="book_reason"
          value="Looking to hire a dedicated AI development team for my company"
          // checked={selectedOption === option}
          onChange={handleChange}
          className="mr-2 "
        />
        <strong>
          Looking to hire a dedicated AI development team for my company
        </strong><br/>
        <input
          type="radio"
          name="book_reason"
          value="Re-selling/white-label your solutions"
          // checked={selectedOption === option}
          onChange={handleChange}
          className="mr-2 "
        />
        <strong>Re-selling/white-label your solutions</strong><br/>

        <input
          type="radio"
          name="book_reason"
          value="investor"
          // checked={selectedOption === option}
          onChange={handleChange}
          className="mr-2 "
        />
        <strong>investor</strong><br/>
        <input
          type="radio"
          name="book_reason"
          value="Other"
          // checked={selectedOption === option}
          onChange={handleChange}
          className="mr-2 "
        />
        <strong>Other</strong><br/>
      </div>

      <p className="book-name">What is your email? *</p>
      <input
        type="text"
        name="email"
        className="book-input"
        onChange={handleChange}
      />

      <p className="book-name">
        Are you the only decision maker? If no, please invite anybody else who
        may be in charge of making decision.
      </p>
      <input
        type="text"
        name="decision"
        className="book-input"
        onChange={handleChange}
      />

      <p className="book-name">
        We’re highly selective about the projects we take on to ensure we
        deliver maximum value for our clients. To respect everyone is time, we
        typically don’t take on projects with budgets below $5,000. Most of our
        work ranges from $6,000 to $12,000, depending on scope.
      </p>
      <p className="book-name">Does this align with your anticipated budget?</p>
      <div>
        <input
          type="radio"
          name="is_budget"
          value="yes"
          // checked={selectedOption === option}
          onChange={handleChange}
          className="mr-2"
        />
        <strong>Yes</strong>
        <input
          type="radio"
          name="book_budget"
          value="Not at this time"
          // checked={selectedOption === option}
          onChange={handleChange}
          className="mr-2"
        />
        <strong>Not at this time</strong>
      </div>

      <button
        type="submit"
        className="btn btn-primary ml-2 submit-book-btn "
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
