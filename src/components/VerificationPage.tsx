import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type FormData = {
  fullName: string;
  email: string;
  university: string;
  idDocument: File | null;
  studentId: File | null;
};

export default function VerificationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    university: "",
    idDocument: null,
    studentId: null,
  });
  const navigate = useNavigate();

  // Handle text input change
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // Handle file input change
  function handleFileUpload(name: "idDocument" | "studentId", file: File | null) {
    setFormData((prev) => ({ ...prev, [name]: file }));
  }

  // Move to next step with basic validation
  function nextStep() {
    if (step === 1 && (!formData.fullName || !formData.email)) {
      toast.error("Please fill in your full name and email.");
      return;
    }
    if (step === 2 && !formData.university) {
      toast.error("Please enter your university.");
      return;
    }
    setStep(step + 1);
  }

  // Submit verification (mock)
  function handleSubmit() {
    if (!formData.idDocument || !formData.studentId) {
      toast.error("Please upload required documents.");
      return;
    }
    // Mock submission delay
    toast.success("Verification submitted! Please wait for approval.");
    // After submission, navigate to communities page (adjust as needed)
    setTimeout(() => navigate("/communities"), 1500);
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Step 1: Your Details</h2>
          <Input
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <Input
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Button onClick={nextStep}>Next</Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Step 2: University</h2>
          <Input
            placeholder="University Name"
            name="university"
            value={formData.university}
            onChange={handleChange}
          />
          <div className="flex gap-4">
            <Button variant="outline" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button onClick={nextStep}>Next</Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Step 3: Upload Documents</h2>

          <div>
            <label className="block mb-2 font-medium">Student ID or Passport</label>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => handleFileUpload("idDocument", e.target.files?.[0] || null)}
            />
            {formData.idDocument && (
              <p className="mt-1 text-green-600">{formData.idDocument.name} selected</p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">Additional Student Document</label>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => handleFileUpload("studentId", e.target.files?.[0] || null)}
            />
            {formData.studentId && (
              <p className="mt-1 text-green-600">{formData.studentId.name} selected</p>
            )}
          </div>

          <div className="flex gap-4">
            <Button variant="outline" onClick={() => setStep(2)}>
              Back
            </Button>
            <Button onClick={handleSubmit}>Submit Verification</Button>
          </div>
        </div>
      )}
    </div>
  );
}
