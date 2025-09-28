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
import { Button } from "@/components/ui/button";
import FormField from "@/components/global/FormField";
import { Stepper } from "@/components/getFeaturedForm/Stepper";

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

  const stepTitles = [
    "Your info",
    "Links & Media",
    "Helpful Resources",
    "Share Your Path",
    "Review & Submit", // optional if you want a 5th step
  ];

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
      setProfileImagePreview(URL.createObjectURL(file)); // optional
      setFormData((prev) => ({ ...prev, profileImage: file.name })); // store file name
    }
  };

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCoverImage(file);
      setCoverImagePreview(URL.createObjectURL(file)); // optional
      setFormData((prev) => ({ ...prev, coverImage: file.name })); // store file name
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
      // move to next step
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
    <div className="mx-auto min-h-screen w-full max-w-3xl px-4 pt-12 lg:px-0 lg:pb-24">
      {step <= 1 && (
        <div className="mb-32 font-sans">
          <h1 className="mb-4 text-2xl font-bold lg:text-3xl">
            Share Your Path
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
      )}

      <form onSubmit={handleSubmit} className="text-lg">
        <Stepper steps={stepTitles} currentStep={step} />
        {step === 1 && (
          <FormContainer>
            <FormField
              label="First name*"
              htmlFor="firstName"
              error={errors.firstName}
            >
              <input
                className={`${errors.firstName ? "border-red-500" : ""} border`}
                name="firstName"
                onChange={handleChange}
                placeholder="Joshua"
                required
                type="text"
                value={formData.firstName}
              />
            </FormField>

            <FormField
              label="Last name*"
              htmlFor="lastName"
              error={errors.lastName}
            >
              <input
                className={`${errors.lastName ? "border-red-500" : ""} border`}
                name="lastName"
                onChange={handleChange}
                placeholder="Galinato"
                required
                type="text"
                value={formData.lastName}
              />
            </FormField>

            <FormField label="Email*" htmlFor="email" error={errors.email}>
              <input
                className={`${errors.email ? "border-red-500" : ""} border`}
                name="email"
                onChange={handleChange}
                placeholder="joshua@pathtodesign.com"
                required
                type="email"
                value={formData.email}
              />
            </FormField>

            <FormField
              label="Where are you based?*"
              htmlFor="country"
              error={errors.country}
            >
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
            </FormField>

            <FormField label="Job title*" htmlFor="role" error={errors.role}>
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

              {formData.role === "Other" && (
                <input
                  className={`${errors.customRole ? "border-red-500" : ""} border`}
                  type="text"
                  name="customRole"
                  value={formData.customRole}
                  onChange={handleChange}
                  placeholder="Enter new job title"
                  required
                />
              )}
            </FormField>

            <FormField label="Company" htmlFor="company">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Path to Design"
                required
              />
            </FormField>

            <FormField label="Company size" htmlFor="companySize">
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
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
            </FormField>

            <FormField label="Company website" htmlFor="companyUrl">
              <input
                type="text"
                name="companyUrl"
                value={formData.companyUrl}
                onChange={handleChange}
                placeholder="https://pathtodesign.com"
              />
            </FormField>

            <div className="mt-4 flex items-center justify-end">
              <ButtonForm
                prop={handleNext}
                plausibleEventTracking="plausible-event-name=form-step-one"
              />
            </div>
          </FormContainer>
        )}
        {step === 2 && (
          <FormContainer>
            {/* Personal Website */}
            <FormField label="Your personal website" htmlFor="website">
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://galina.to"
              />
            </FormField>

            {/* LinkedIn */}
            <FormField label="LinkedIn profile" htmlFor="linkedin">
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin/joshuagalinato"
              />
            </FormField>

            {/* Instagram */}
            <FormField label="Instagram handle" htmlFor="instagram">
              <input
                type="text"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                placeholder="@joshuagalinato"
              />
            </FormField>

            {/* X handle */}
            <FormField label="X handle" htmlFor="x">
              <input
                type="text"
                name="x"
                value={formData.x}
                onChange={handleChange}
                placeholder="@joshuagalinato"
              />
            </FormField>

            {/* Dribbble */}
            <FormField label="Dribbble handle" htmlFor="dribbble">
              <input
                type="text"
                name="dribbble"
                value={formData.dribbble}
                onChange={handleChange}
                placeholder="@joshuagalinato"
              />
            </FormField>

            {/* Profile Image */}
            <FormField label="Profile Image" htmlFor="profileImage">
              <p className="text-stone-400">Recommended aspect ratio: 1:1</p>
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
            </FormField>

            {/* Cover Image */}
            <FormField label="Cover Image" htmlFor="coverImage">
              <p className="text-stone-400">Recommended aspect ratio: 16:9</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleCoverImageChange}
              />
              {coverImagePreview && (
                <div className="relative mt-2 aspect-video w-full lg:w-64">
                  <Image src={coverImagePreview} alt="Preview" layout="fill" />
                </div>
              )}
            </FormField>

            {/* Navigation Buttons */}
            <div className="mt-4 flex items-center justify-between">
              <ButtonForm back prop={handleBack} />
              <ButtonForm prop={handleNext} />
            </div>
          </FormContainer>
        )}
        {step === 3 && (
          <FormContainer>
            {/* Apps */}
            <FormField
              label="List out the apps you use to help you design"
              htmlFor="appsText"
            >
              <textarea
                name="appsText"
                value={formData.appsText}
                onChange={handleChange}
                placeholder="Start writing..."
                rows={5}
                maxLength={1000}
              />
            </FormField>

            {/* Books */}
            <FormField
              label="List out the books you read that helped you get to where you are now"
              htmlFor="booksText"
            >
              <textarea
                name="booksText"
                value={formData.booksText}
                onChange={handleChange}
                placeholder="Start writing..."
                rows={5}
                maxLength={1000}
              />
            </FormField>

            {/* Navigation Buttons */}
            <div className="mt-4 flex items-center justify-between">
              <ButtonForm back prop={handleBack} />
              <ButtonForm prop={handleNext} />
            </div>
          </FormContainer>
        )}
        {step === 4 && (
          <>
            <FormContainer>
              <FormField
                label="How did you get started in your role as a designer?"
                htmlFor="getStarted"
              >
                <textarea
                  name="getStarted"
                  value={formData.getStarted}
                  onChange={handleChange}
                  placeholder="Start writing..."
                  rows={5}
                  maxLength={1000}
                />
              </FormField>

              <FormField
                label="What are the responsibilities of your role as a designer?"
                htmlFor="responsibilities"
              >
                <textarea
                  name="responsibilities"
                  value={formData.responsibilities}
                  onChange={handleChange}
                  placeholder="Start writing..."
                  rows={5}
                  maxLength={1000}
                />
              </FormField>

              <FormField
                label="What difficulties do you encounter in your role as a designer?"
                htmlFor="difficulties"
              >
                <textarea
                  name="difficulties"
                  value={formData.difficulties}
                  onChange={handleChange}
                  placeholder="Start writing..."
                  rows={5}
                  maxLength={1000}
                />
              </FormField>

              <FormField
                label="How do you incorporate the apps in your design process?"
                htmlFor="incorporateApps"
              >
                <textarea
                  name="incorporateApps"
                  value={formData.incorporateApps}
                  onChange={handleChange}
                  placeholder="Start writing..."
                  rows={5}
                  maxLength={1000}
                />
              </FormField>

              <FormField
                label="What advice would you give to your younger self trying to get into the field of design?"
                htmlFor="advice"
              >
                <textarea
                  name="advice"
                  value={formData.advice}
                  onChange={handleChange}
                  placeholder="Start writing..."
                  rows={5}
                  maxLength={1000}
                />
              </FormField>

              <FormField
                label="Do you have any regrets in your journey in becoming a designer?"
                htmlFor="regrets"
              >
                <textarea
                  name="regrets"
                  value={formData.regrets}
                  onChange={handleChange}
                  placeholder="Start writing..."
                  rows={5}
                  maxLength={1000}
                />
              </FormField>

              <FormField
                label="As a designer how do you stay inspired?"
                htmlFor="stayInspired"
              >
                <textarea
                  name="stayInspired"
                  value={formData.stayInspired}
                  onChange={handleChange}
                  placeholder="Start writing..."
                  rows={5}
                  maxLength={1000}
                />
              </FormField>

              <FormField label="What's your one liner?" htmlFor="oneLiner">
                <input
                  type="text"
                  name="oneLiner"
                  value={formData.oneLiner}
                  onChange={handleChange}
                  placeholder="Start writing..."
                />
              </FormField>
              {/* Navigation Buttons */}
              <div className="mt-4 flex items-center justify-between">
                <ButtonForm back prop={handleBack} />
                <ButtonForm prop={handleNext} />
              </div>
            </FormContainer>
          </>
        )}
        {step === 5 && (
          <FormContainer>
            <div className="space-y-6">
              {Object.entries(formData).map(([key, value]) => {
                if (!value) return null; // skip empty fields

                const labels: Record<string, string> = {
                  firstName: "First name",
                  lastName: "Last name",
                  email: "Email",
                  role: "Job title",
                  customRole: "Custom Job Title",
                  company: "Company",
                  companySize: "Company size",
                  companyUrl: "Company website",
                  website: "Your personal website",
                  linkedin: "LinkedIn profile",
                  instagram: "Instagram handle",
                  x: "X handle",
                  dribbble: "Dribbble handle",
                  country: "Where are you based?",
                  appsText: "Apps you use to help you design",
                  booksText: "Books that helped you get to where you are now",
                  getStarted:
                    "How did you get started in your role as a designer?",
                  responsibilities:
                    "Responsibilities of your role as a designer",
                  difficulties:
                    "Difficulties you encounter in your role as a designer",
                  incorporateApps:
                    "How you incorporate apps in your design process",
                  advice:
                    "Advice to your younger self trying to get into design",
                  regrets: "Any regrets in your journey as a designer?",
                  stayInspired: "How do you stay inspired as a designer?",
                  oneLiner: "What's your one liner?",
                  profileImage: "Profile Image",
                  coverImage: "Cover Image",
                };

                return (
                  <div key={key} className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-muted-foreground">
                      {labels[key] || key}
                    </span>
                    {key === "profileImage" || key === "coverImage" ? (
                      <span className="text-white">{value}</span>
                    ) : (
                      <span className="whitespace-pre-wrap text-white">
                        {value}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex items-center justify-between">
              <ButtonForm back prop={handleBack} />
              <Button type="submit" disabled={loading} className="text-lg">
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </FormContainer>
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
