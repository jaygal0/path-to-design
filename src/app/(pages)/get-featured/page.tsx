"use client";

import { Heading } from "../../../components/global/Heading";
import { useState } from "react";
import { companySizes } from "@/config/companySizes";
import { designerRoles } from "@/config/designerRoles";
import { countries } from "@/config/countries";
import { ButtonForm } from "../../../components/global/ButtonForm";
import { FormContainer } from "../../../components/getFeaturedForm/FormContainer";
import { Benefits } from "../../../components/getFeaturedForm/Benefits";
import Image from "next/image";

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
    profileImage: "",
    coverImage: "",
  });

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(
    null,
  );

  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(
    null,
  );

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalSteps = 5; // For progress bar

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

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(file);
      setProfileImagePreview(URL.createObjectURL(file)); // Show preview
    }
  };

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCoverImage(file);
      setCoverImagePreview(URL.createObjectURL(file)); // Show preview
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
      window.scrollTo({ top: 0, behavior: "smooth" });
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
    setError(null);

    let uploadedProfileImageUrl = formData.profileImage;
    let uploadedCoverImageUrl = formData.coverImage;

    // Upload profile image if provided
    if (profileImage) {
      const imageFormData = new FormData();
      const profileFileName = `profile-${formData.firstName.toLowerCase()}-${formData.lastName.toLowerCase()}-${Date.now()}${profileImage.name.substring(profileImage.name.lastIndexOf("."))}`;

      imageFormData.append("file", profileImage, profileFileName);

      const uploadResponse = await fetch("/api/profile-image-upload", {
        method: "POST",
        body: imageFormData,
      });

      const uploadResult = await uploadResponse.json();
      if (uploadResponse.ok) {
        uploadedProfileImageUrl = profileFileName;
      } else {
        setError(uploadResult.error || "Image upload failed.");
        setLoading(false);
        return;
      }
    }

    // Upload cover image if provided
    if (coverImage) {
      const imageFormData = new FormData();
      const coverFileName = `cover-${formData.firstName.toLowerCase()}-${formData.lastName.toLowerCase()}-${Date.now()}${coverImage.name.substring(coverImage.name.lastIndexOf("."))}`;

      imageFormData.append("file", coverImage, coverFileName);

      const uploadResponse = await fetch("/api/cover-image-upload", {
        method: "POST",
        body: imageFormData,
      });

      const uploadResult = await uploadResponse.json();
      if (uploadResponse.ok) {
        uploadedCoverImageUrl = coverFileName;
      } else {
        setError(uploadResult.error || "Image upload failed.");
        setLoading(false);
        return;
      }
    }

    // Update formData with uploaded images
    const updatedFormData = {
      ...formData,
      profileImage: uploadedProfileImageUrl,
      coverImage: uploadedCoverImageUrl,
    };

    try {
      // Submit form data
      const response = await fetch("/api/get-featured", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedFormData),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Something went wrong.");
        setLoading(false);
        return;
      }

      // Send email notifications via Resend
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: updatedFormData.firstName,
          lastName: updatedFormData.lastName,
          email: updatedFormData.email,
          message: "New form submission received.",
        }),
      });

      // Reset form and redirect
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
        profileImage: "",
        coverImage: "",
      });

      window.location.href = "/thank-you";
    } catch (err) {
      setError("Failed to save data.");
    }

    setLoading(false);
  };

  return (
    <div className="lg:px-96 lg:pb-24">
      {step >= 2 && (
        <div className="mb-6 w-full">
          <p className="mb-2 text-left">
            Step {step} of {totalSteps}
          </p>
          <div className="h-2.5 w-full rounded-full bg-gray-800">
            <div
              className="btn-gradient h-2.5 rounded-full transition-all duration-1000"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      )}
      {step <= 1 && (
        <>
          <div className="font-sans">
            <h1 className="mb-4 text-2xl font-bold">
              Share your path to design
            </h1>
            <ul className="flex flex-col gap-8 py-4 text-lg">
              <Benefits
                heading="Expand Your Reach"
                desc="Connect with fellow designers, inspire newcomers, and attract potential employers."
              />
              <Benefits
                heading="Boost Your Personal Brand"
                desc="Showcase your unique journey and let your voice be heard."
              />
              <Benefits
                heading="100% Free"
                desc="No cost, no catch. Just an opportunity to share your story and make an impact."
              />
            </ul>
          </div>
        </>
      )}
      <form onSubmit={handleSubmit} className="text-lg">
        {step === 1 && (
          <FormContainer>
            <label htmlFor="firstName">First name*</label>
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

            <label htmlFor="lastName">Last name*</label>
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
            <label htmlFor="email">Email*</label>
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
            <label htmlFor="country">Where are you based?*</label>
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
            <label htmlFor="role">Job title*</label>
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

            <ButtonForm
              prop={handleNext}
              plausibleEventTracking="plausible-event-name=form-step-one"
            />
          </FormContainer>
        )}
        {step === 2 && (
          <>
            <ButtonForm back prop={handleBack} />
            <Heading
              heading="Company details"
              desc="Share a bit about the company you work for—or even better, the one you built from the ground up!"
              isSecondary
            />
            <FormContainer>
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
              <ButtonForm
                prop={handleNext}
                plausibleEventTracking="plausible-event-name=form-step-two"
              />
            </FormContainer>
          </>
        )}
        {step === 3 && (
          <>
            <ButtonForm back prop={handleBack} />
            <Heading
              heading="Shareable links"
              desc="Let others know where to find your personal website and other social media platforms."
              isSecondary
            />
            <FormContainer>
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
              <div className="flex flex-col gap-1">
                <label htmlFor="profileImage">Profile Image</label>
                <p className="text-stone-400">Recommended aspect ratio: 1:1</p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleProfileImageChange}
              />
              {profileImagePreview && (
                <div className="relative mt-2 h-32 w-32">
                  <Image
                    src={profileImagePreview}
                    alt="Preview"
                    layout="fill"
                  />
                </div>
              )}
              <div className="flex flex-col gap-1">
                <label htmlFor="coverImage">Cover Image</label>
                <p className="text-stone-400">Recommended aspect ratio: 16:9</p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleCoverImageChange}
              />
              {coverImagePreview && (
                <div className="relative mt-2 aspect-video w-full lg:w-64 ">
                  <Image src={coverImagePreview} alt="Preview" layout="fill" />
                </div>
              )}
              <ButtonForm
                prop={handleNext}
                plausibleEventTracking="plausible-event-name=form-step-three"
              />
            </FormContainer>
          </>
        )}
        {step === 4 && (
          <>
            <ButtonForm back prop={handleBack} />
            <Heading heading="Helpful resources" isSecondary />
            <FormContainer>
              <label htmlFor="appsText">
                List out the apps you use to help you design
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
                List out the books you read that helped you get to where are now
              </label>
              <textarea
                name="booksText"
                value={formData.booksText}
                onChange={handleChange}
                placeholder="Start writing..."
                rows={5}
                maxLength={1000}
              />
              <ButtonForm
                prop={handleNext}
                plausibleEventTracking="plausible-event-name=form-step-four"
              />
            </FormContainer>
          </>
        )}
        {step === 5 && (
          <>
            <ButtonForm back prop={handleBack} />
            <Heading heading="Share your path" isSecondary />
            <FormContainer>
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
                What advice would you give to your younger self trying to get
                into the field of design?
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
              <label htmlFor="oneLiner">What&apos;s your one liner?</label>
              <input
                type="text"
                name="oneLiner"
                value={formData.oneLiner}
                onChange={handleChange}
                placeholder="Start writing..."
              />
            </FormContainer>
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
