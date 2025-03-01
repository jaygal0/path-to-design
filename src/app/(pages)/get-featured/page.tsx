"use client";

import { Heading } from "../../../../components/global/Heading";
import { useState } from "react";
import { companySizes } from "@/config/companySizes";
import { designerRoles } from "@/config/designerRoles";
import { countries } from "@/config/countries";

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    customRole: "",
    company: "",
    companySize: "",
    companyUrl: "",
    website: "",
    linkedin: "",
    instagram: "",
    x: "",
    dribbble: "",
    country: "",
    appsText: "",
    booksText: "",
    getStarted: "",
    responsibilities: "",
    difficulties: "",
    incorporateApps: "",
    advice: "",
    regrets: "",
    stayInspired: "",
    oneLiner: "",
  });

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    if (step === 1) {
      return (
        formData.firstName?.trim() &&
        formData.lastName?.trim() &&
        formData.email?.trim() &&
        formData.country?.trim()
      );
    } else if (step === 2) {
      return (
        formData.role?.trim() &&
        (formData.role !== "Other" || formData.customRole?.trim()) // Validate custom role if 'Other' is selected
      );
    }
    return true; // Default case, though all steps are covered
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
      setError(null);
    } else {
      setError("Please fill in all required fields before proceeding.");
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("/api/designers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess("Designer added successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          role: "",
          customRole: "",
          company: "",
          companySize: "",
          companyUrl: "",
          website: "",
          linkedin: "",
          instagram: "",
          x: "",
          dribbble: "",
          country: "",
          appsText: "",
          booksText: "",
          getStarted: "",
          responsibilities: "",
          difficulties: "",
          incorporateApps: "",
          advice: "",
          regrets: "",
          stayInspired: "",
          oneLiner: "",
        });
      } else {
        setError(result.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to save data.");
    }

    setLoading(false);
  };

  return (
    <div className="col-span-full col-start-1 row-span-full row-start-1 flex min-h-screen flex-col justify-start py-64 md:col-span-6 md:col-start-2 xl:col-span-6 xl:col-start-4 xl:pt-72">
      {step <= 1 && (
        <>
          <Heading
            heading="Get featured"
            desc="Submit your story to get featured in front of potential employers, professionals and aspiring designers."
          />
        </>
      )}
      {success && <p className="text-green-500">{success}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {step === 1 && (
          <>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Joshua"
              required
            />
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Galinato"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="joshua@galina.to"
              required
            />
            <label htmlFor="country">Where are you based?</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                --- Select ---
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <button type="button" onClick={handleNext}>
              Next
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <button type="button" onClick={handleBack}>
              Back
            </button>
            <label htmlFor="role">Job title</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                --- Select Role ---
              </option>
              {designerRoles.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
            {formData.role === "Other" && (
              <input
                type="text"
                name="customRole"
                value={formData.customRole}
                onChange={handleChange}
                placeholder="Enter new job title"
                required
                className="mt-2"
              />
            )}
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Path to Design"
              required
            />
            <label htmlFor="companySize">Company size</label>
            <select
              name="companySize"
              value={formData.companySize}
              onChange={handleChange}
              placeholder="Company Size"
            >
              <option value="" disabled>
                --- Select ---
              </option>
              {companySizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <label htmlFor="companyUrl">Company website</label>
            <input
              type="text"
              name="companyUrl"
              value={formData.companyUrl}
              onChange={handleChange}
              placeholder="https://pathtodesign.com"
            />

            <button type="button" onClick={handleNext}>
              Next
            </button>
          </>
        )}
        {step === 3 && (
          <>
            <button type="button" onClick={handleBack}>
              Back
            </button>
            <label htmlFor="website">Your personal website</label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://galina.to"
            />
            <label htmlFor="linkedin">LinkedIn profile</label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin/joshuagalinato"
            />
            <label htmlFor="instagram">Instgram handle</label>
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              placeholder="@joshuagalinato"
            />
            <label htmlFor="x">X handle</label>
            <input
              type="text"
              name="x"
              value={formData.x}
              onChange={handleChange}
              placeholder="@joshuagalinato"
            />
            <label htmlFor="dribbble">Dribbble handle</label>
            <input
              type="text"
              name="dribbble"
              value={formData.dribbble}
              onChange={handleChange}
              placeholder="@joshuagalinato"
            />

            <button type="button" onClick={handleNext}>
              Next
            </button>
          </>
        )}
        {step === 4 && (
          <>
            <button type="button" onClick={handleBack}>
              Back
            </button>
            <label htmlFor="appsText">
              What apps do you use to help you design?
            </label>
            <textarea
              name="appsText"
              value={formData.appsText}
              onChange={handleChange}
              placeholder="Start writing..."
              rows={7}
              maxLength={1000}
            />
            <label htmlFor="booksText">
              What books have you read that helped you get to where are now?
            </label>
            <textarea
              name="booksText"
              value={formData.booksText}
              onChange={handleChange}
              placeholder="Start writing..."
              rows={7}
              maxLength={1000}
            />

            <button type="button" onClick={handleNext}>
              Next
            </button>
          </>
        )}
        {step === 5 && (
          <>
            <label htmlFor="getStarted">
              How did you get started in your role as a designer?
            </label>
            <textarea
              name="getStarted"
              value={formData.getStarted}
              onChange={handleChange}
              placeholder="Start writing..."
              rows={7}
              maxLength={1000}
            />
            <label htmlFor="responsibilies">
              What are the responsibilities of your role as a designer?
            </label>
            <textarea
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
              placeholder="Start writing..."
              rows={7}
              maxLength={1000}
            />
            <label htmlFor="difficulties">
              What difficulties do you encounter in your role as a designer?
            </label>
            <textarea
              name="difficulties"
              value={formData.difficulties}
              onChange={handleChange}
              placeholder="Start writing..."
              rows={7}
              maxLength={1000}
            />
            <label htmlFor="incorporatedApps">
              How do you incorporate the apps in your design process?
            </label>
            <textarea
              name="incorporateApps"
              value={formData.incorporateApps}
              onChange={handleChange}
              placeholder="Start writing..."
              rows={7}
              maxLength={1000}
            />
            <label htmlFor="advice">
              What advice would you give to your younger self trying to get into
              the field of design?
            </label>
            <textarea
              name="advice"
              value={formData.advice}
              onChange={handleChange}
              placeholder="Start writing..."
              rows={7}
              maxLength={1000}
            />
            <label htmlFor="regrets">
              Do you have any regrets in your journey in becoming a designer?
            </label>
            <textarea
              name="regrets"
              value={formData.regrets}
              onChange={handleChange}
              placeholder="Start writing..."
              rows={7}
              maxLength={1000}
            />
            <label htmlFor="stayInspired">
              As a designer how do you stay inspired?
            </label>
            <textarea
              name="stayInspired"
              value={formData.stayInspired}
              onChange={handleChange}
              placeholder="Start writing..."
              rows={7}
              maxLength={1000}
            />
            <label htmlFor="oneLiner">What's your one liner?</label>
            <input
              type="text"
              name="oneLiner"
              value={formData.oneLiner}
              onChange={handleChange}
              placeholder="Start writing..."
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600 disabled:bg-gray-400"
            >
              {loading ? "Saving..." : "Save Designer"}
            </button>
          </>
        )}
      </form>
    </div>
  );
}
