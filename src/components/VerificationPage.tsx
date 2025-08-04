import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  CheckCircle, 
  Clock, 
  ArrowLeft, 
  FileText, 
  CreditCard,
  Sparkles,
  AlertCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const VerificationPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    university: "",
    studyCountry: "",
    homeCountry: "",
    course: "",
    studentStatus: "",
    bio: "",
    idDocument: null as File | null,
    studentId: null as File | null,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field: string, file: File | null) => {
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    toast.success("Verification request submitted! 🎉", {
      description: "We'll review your application within 24-48 hours"
    });
  };

  const progress = (step / 3) * 100;

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <Card className="glass-card p-8 max-w-md mx-auto text-center relative z-10">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Verification Submitted! ✨
          </h2>
          <p className="text-muted-foreground mb-6">
            Thanks for submitting your verification! Our team will review your application 
            within 24-48 hours. We'll send you an email once you're approved.
          </p>
          <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary border-primary/30">
            Status: Under Review
          </Badge>
          <div className="space-y-3">
            <Button 
              variant="glass" 
              className="w-full"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="absolute left-0 top-0"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-accent mr-2" />
            <h1 className="text-3xl font-bold gradient-text">Student Verification</h1>
          </div>
          <p className="text-muted-foreground">
            Help us verify you're an international student to join our community
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-2 mb-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span className={step >= 1 ? "text-primary" : ""}>Personal Info</span>
            <span className={step >= 2 ? "text-primary" : ""}>Academic Details</span>
            <span className={step >= 3 ? "text-primary" : ""}>Document Upload</span>
          </div>
        </div>

        <Card className="glass-card p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-2">Tell us about yourself</h2>
                <p className="text-muted-foreground text-sm">Basic information to get started</p>
              </div>
              
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    className="glass-card border-glass-border"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@university.edu"
                    className="glass-card border-glass-border"
                  />
                </div>
                
                <div>
                  <Label htmlFor="bio">About You</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    placeholder="Tell us a bit about yourself, your interests, hobbies..."
                    className="glass-card border-glass-border"
                    rows={3}
                  />
                </div>
              </div>
              
              <Button 
                variant="gradient" 
                className="w-full"
                onClick={() => setStep(2)}
                disabled={!formData.fullName || !formData.email}
              >
                Continue to Academic Info
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-2">Academic Information</h2>
                <p className="text-muted-foreground text-sm">Details about your studies</p>
              </div>
              
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="university">University/Institution *</Label>
                  <Input
                    id="university"
                    value={formData.university}
                    onChange={(e) => handleInputChange("university", e.target.value)}
                    placeholder="e.g., University of Toronto"
                    className="glass-card border-glass-border"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="studyCountry">Study Country *</Label>
                    <Input
                      id="studyCountry"
                      value={formData.studyCountry}
                      onChange={(e) => handleInputChange("studyCountry", e.target.value)}
                      placeholder="e.g., Canada"
                      className="glass-card border-glass-border"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="homeCountry">Home Country *</Label>
                    <Input
                      id="homeCountry"
                      value={formData.homeCountry}
                      onChange={(e) => handleInputChange("homeCountry", e.target.value)}
                      placeholder="e.g., India"
                      className="glass-card border-glass-border"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="course">Course/Major *</Label>
                  <Input
                    id="course"
                    value={formData.course}
                    onChange={(e) => handleInputChange("course", e.target.value)}
                    placeholder="e.g., Computer Science"
                    className="glass-card border-glass-border"
                  />
                </div>
                
                <div>
                  <Label htmlFor="studentStatus">Student Status *</Label>
                  <select
                    id="studentStatus"
                    value={formData.studentStatus}
                    onChange={(e) => handleInputChange("studentStatus", e.target.value)}
                    className="w-full p-3 rounded-md glass-card border border-glass-border bg-transparent text-foreground"
                  >
                    <option value="" className="bg-background">Select status</option>
                    <option value="current" className="bg-background">Current Student</option>
                    <option value="incoming" className="bg-background">Incoming Student</option>
                    <option value="recent-graduate" className="bg-background">Recent Graduate</option>
                  </select>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="glass" 
                  className="flex-1"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button 
                  variant="gradient" 
                  className="flex-1"
                  onClick={() => setStep(3)}
                  disabled={!formData.university || !formData.studyCountry || !formData.homeCountry || !formData.course || !formData.studentStatus}
                >
                  Continue to Documents
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-2">Document Verification</h2>
                <p className="text-muted-foreground text-sm">Upload documents to verify your student status</p>
              </div>
              
              <div className="space-y-4">
                <div className="border-2 border-dashed border-glass-border rounded-lg p-6 text-center">
                  <CreditCard className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Student ID or Passport</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Upload a clear photo of your student ID card or passport
                  </p>
                  <Button variant="glass" size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Choose File
                  </Button>
                  {formData.idDocument && (
                    <div className="mt-2 flex items-center justify-center text-sm text-primary">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      File uploaded
                    </div>
                  )}
                </div>
                
                <div className="border-2 border-dashed border-glass-border rounded-lg p-6 text-center">
                  <FileText className="w-12 h-12 text-secondary mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Additional Student Document</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Enrollment letter, transcript, or any official student document
                  </p>
                  <Button variant="glass" size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Choose File
                  </Button>
                  {formData.studentId && (
                    <div className="mt-2 flex items-center justify-center text-sm text-secondary">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      File uploaded
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-primary mb-1">Privacy & Security</p>
                    <p className="text-muted-foreground">
                      Your documents are securely encrypted and only used for verification. 
                      They'll be permanently deleted after approval.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="glass" 
                  className="flex-1"
                  onClick={() => setStep(2)}
                >
                  Back
                </Button>
                <Button 
                  variant="gradient" 
                  className="flex-1"
                  onClick={handleSubmit}
                >
                  Submit for Review
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default VerificationPage;