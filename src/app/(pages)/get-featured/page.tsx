"use client";

import { Heading } from "../../../../components/global/Heading";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    company: "",
    companyDesc: "",
    companySize: "",
    companyUrl: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          website: "",
          company: "",
          companyDesc: "",
          companySize: "",
          companyUrl: "",
          role: "",
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
      <Heading
        heading="Get featured"
        desc="Submit your story to get featured in front of potential employers, professionals and aspiring designers."
      />
      <h2 className="mb-4 text-2xl font-bold">Add Designer</h2>
      {success && <p className="text-green-500">{success}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
          className="w-full rounded-lg border p-2"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
          className="w-full rounded-lg border p-2"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full rounded-lg border p-2"
        />
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="Website"
          className="w-full rounded-lg border p-2"
        />

        {/* Company Fields */}
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
          required
          className="w-full rounded-lg border p-2"
        />
        <input
          type="text"
          name="companySize"
          value={formData.companySize}
          onChange={handleChange}
          placeholder="Company Size"
          className="w-full rounded-lg border p-2"
        />
        <input
          type="text"
          name="companyUrl"
          value={formData.companyUrl}
          onChange={handleChange}
          placeholder="Company URL"
          className="w-full rounded-lg border p-2"
        />
        <textarea
          name="companyDesc"
          value={formData.companyDesc}
          onChange={handleChange}
          placeholder="Company Description"
          className="w-full rounded-lg border p-2"
        />

        {/* Role Field */}
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Role (e.g., UX Designer)"
          required
          className="w-full rounded-lg border p-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? "Saving..." : "Save Designer"}
        </button>
      </form>
    </div>
  );
}
