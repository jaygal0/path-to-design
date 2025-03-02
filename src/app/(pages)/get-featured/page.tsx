"use client";

import { Heading } from "../../../../components/global/Heading";
import { useState } from "react";
import { companySizes } from "@/config/companySizes";
import { designerRoles } from "@/config/designerRoles";
import { countries } from "@/config/countries";
import { ButtonForm } from "../../../../components/global/ButtonForm";

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

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user types
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateStep = () => {
    let newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.firstName.trim())
        newErrors.firstName = "First name is required";
      if (!formData.lastName.trim())
        newErrors.lastName = "Last name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!isValidEmail(formData.email)) {
        newErrors.email = "Invalid email format";
      }

      if (!formData.country.trim()) newErrors.country = "Country is required";
      if (!formData.role.trim()) newErrors.role = "Job title is required";
      if (formData.role === "Other" && !formData.customRole.trim()) {
        newErrors.customRole = "Please specify your job title";
      }
    } else if (step === 2) {
      // Not sure if I want company required or not. I'll comment it out for now
      // if (!formData.company.trim()) newErrors.company = "Company is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
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
      const response = await fetch("/api/get-featured", {
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 font-sans text-lg"
      >
        {step === 1 && (
          <>
            <label htmlFor="firstName">First name</label>
            <input
              className={`${errors.firstName ? "border-red-500" : ""} border`}
              name="firstName"
              onChange={handleChange}
              placeholder="Joshua"
              required
              type="text"
              value={formData.firstName}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName}</p>
            )}

            <label htmlFor="lastName">Last name</label>
            <input
              className={`${errors.lastName ? "border-red-500" : ""} border`}
              name="lastName"
              onChange={handleChange}
              placeholder="Galinato"
              required
              type="text"
              value={formData.lastName}
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName}</p>
            )}
            <label htmlFor="email">Email</label>
            <input
              className={`${errors.email ? "border-red-500" : ""} border`}
              name="email"
              onChange={handleChange}
              placeholder="joshua@galina.to"
              required
              type="email"
              value={formData.email}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <label htmlFor="country">Where are you based?</label>
            <select
              className={`${errors.country ? "border-red-500" : ""} border`}
              name="country"
              onChange={handleChange}
              required
              value={formData.country}
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
            {errors.country && <p className="text-red-500">{errors.country}</p>}
            <label htmlFor="role">Job title</label>
            <select
              className={`${errors.role ? "border-red-500" : ""} border`}
              name="role"
              onChange={handleChange}
              required
              value={formData.role}
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
            {errors.role && <p className="text-red-500">{errors.role}</p>}
            {formData.role === "Other" && (
              <>
                <input
                  className={`${errors.customRole ? "border-red-500" : ""} border`}
                  type="text"
                  name="customRole"
                  value={formData.customRole}
                  onChange={handleChange}
                  placeholder="Enter new job title"
                  required
                />
                {errors.customRole && (
                  <p className="text-red-500">{errors.customRole}</p>
                )}
              </>
            )}
            <ButtonForm prop={handleNext} />
          </>
        )}
        {step === 2 && (
          <>
            <ButtonForm back prop={handleBack} />
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
            <ButtonForm prop={handleNext} />
          </>
        )}
        {step === 3 && (
          <>
            <ButtonForm back prop={handleBack} />
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
            <ButtonForm prop={handleNext} />
          </>
        )}
        {step === 4 && (
          <>
            <ButtonForm back prop={handleBack} />
            <label htmlFor="appsText">
              What apps do you use to help you design?
            </label>
            <textarea
              name="appsText"
              value={formData.appsText}
              onChange={handleChange}
              placeholder="Start writing..."
              rows={5}
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
              rows={5}
              maxLength={1000}
            />
            <ButtonForm prop={handleNext} />
          </>
        )}
        {step === 5 && (
          <>
            <ButtonForm back prop={handleBack} />
            <label htmlFor="getStarted">
              How did you get started in your role as a designer?
            </label>
            <textarea
              name="getStarted"
              value={formData.getStarted}
              onChange={handleChange}
              placeholder="Start writing..."
              rows={5}
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
              rows={5}
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
              rows={5}
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
              rows={5}
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
              rows={5}
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
              rows={5}
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
              rows={5}
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
              className="text-1xl btn-gradient mt-8 flex w-fit items-center gap-4 rounded-md px-6 py-2 font-sans text-stone-950 transition-all hover:scale-105"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </>
        )}
      </form>
      {error && (
        <div className="mt-8 w-fit rounded-sm bg-red-500 p-2 px-4 font-sans text-white">
          {error}
        </div>
      )}
    </div>
  );
}
