import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Globe, GraduationCap, MessageCircle, ArrowRight, Bot, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Globe, label: "Countries", value: "150+", color: "text-accent" },
    { icon: Users, label: "Online Now", value: "2.8K", color: "text-primary" },
    { icon: GraduationCap, label: "Students", value: "47K+", color: "text-primary-dark" },
    { icon: MessageCircle, label: "Messages Today", value: "12K+", color: "text-accent" },
  ];

  const features = [
    {
      title: "University Groups",
      description: "Connect with students from your university worldwide",
      icon: "🏫"
    },
    {
      title: "Country Communities", 
      description: "Chat with people from your home country",
      icon: "🌍"
    },
    {
      title: "Course Discussions",
      description: "Get help and share knowledge in your field of study",
      icon: "📚"
    },
    {
      title: "City Meetups",
      description: "Find students in your current city for real connections",
      icon: "📍"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background to-muted">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden inforens-pattern"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">
              Inforens Student Community
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6">
            The vibrant global hub where international students connect, share experiences, 
            and build lifelong friendships across borders 🌟
          </p>
          <div className="warm-card p-4 max-w-md mx-auto rounded-xl border border-primary/20">
            <div className="flex items-center justify-center mb-2">
              <Bot className="w-6 h-6 text-primary mr-2" />
              <span className="text-lg font-semibold text-primary">Meet Norry</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your AI companion ready to help clarify any questions you post in our community chats!
            </p>
          </div>
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="warm-card p-6 text-center hover-glow border border-primary/10">
              <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <Card className="warm-card p-8 max-w-2xl mx-auto border border-primary/20">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Ready to Join the Community?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Get verified as an international student and unlock access to exclusive 
              communities tailored to your journey
            </p>
            <Button 
              variant="inforens" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => navigate('/verification')}
            >
              Begin Verification <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
            Why Choose Inforens Community?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="warm-card p-6 hover-glow border border-primary/10">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <Card className="warm-card p-8 mb-16 border border-primary/20">
          <h3 className="text-2xl font-bold text-center mb-6 gradient-text">
            Built for International Students, By International Students
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Badge variant="secondary" className="mb-3 bg-primary/20 text-primary border-primary/30">
                Verified Members Only
              </Badge>
              <p className="text-muted-foreground">
                Every member is verified as a real international student for authentic connections
              </p>
            </div>
            <div className="text-center">
              <Badge variant="secondary" className="mb-3 bg-accent/20 text-accent border-accent/30">
                AI-Powered Help
              </Badge>
              <p className="text-muted-foreground">
                Norry, our AI assistant, helps clarify questions and guides discussions
              </p>
            </div>
            <div className="text-center">
              <Badge variant="secondary" className="mb-3 bg-primary/30 text-primary-dark border-primary/30">
                Safe & Moderated
              </Badge>
              <p className="text-muted-foreground">
                Our community guidelines ensure a respectful and supportive environment
              </p>
            </div>
          </div>
        </Card>

        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Join thousands of international students already part of our community
          </p>
          <Button 
            variant="warm" 
            size="lg"
            onClick={() => navigate('/verification')}
          >
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;