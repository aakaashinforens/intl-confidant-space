import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  MessageCircle, 
  Send, 
  Heart, 
  Reply, 
  Search,
  Bot,
  Globe,
  GraduationCap,
  MapPin,
  BookOpen,
  Plus,
  Filter
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CommunityPage = () => {
  const navigate = useNavigate();
  const [selectedCommunity, setSelectedCommunity] = useState("university");
  const [newQuery, setNewQuery] = useState("");
  const [newResponse, setNewResponse] = useState("");
  const [selectedQuery, setSelectedQuery] = useState<number | null>(null);

  const communities = [
    {
      id: "university",
      name: "University of Toronto",
      icon: GraduationCap,
      members: 1248,
      online: 89,
      color: "text-primary"
    },
    {
      id: "country",
      name: "Students from India",
      icon: Globe,
      members: 2156,
      online: 234,
      color: "text-accent"
    },
    {
      id: "city",
      name: "Toronto Students",
      icon: MapPin,
      members: 892,
      online: 67,
      color: "text-primary"
    },
    {
      id: "course",
      name: "Computer Science",
      icon: BookOpen,
      members: 1567,
      online: 123,
      color: "text-accent"
    }
  ];

  const sampleQueries = [
    {
      id: 1,
      user: "Priya Sharma",
      avatar: "PS",
      time: "2 hours ago",
      content: "Hey everyone! I'm looking for good places to find affordable furniture in Toronto. Any recommendations for a new international student?",
      likes: 12,
      responses: 8,
      category: "Housing"
    },
    {
      id: 2,
      user: "Alex Chen",
      avatar: "AC",
      time: "4 hours ago", 
      content: "Has anyone taken CSC373 with Prof. Johnson? How's the workload and what should I expect?",
      likes: 6,
      responses: 4,
      category: "Academics"
    },
    {
      id: 3,
      user: "Maria Rodriguez",
      avatar: "MR",
      time: "6 hours ago",
      content: "Planning to visit Niagara Falls this weekend. Anyone interested in joining? We can split the cost!",
      likes: 18,
      responses: 12,
      category: "Social"
    }
  ];

  const sampleResponses = [
    {
      id: 1,
      user: "David Kim",
      avatar: "DK",
      time: "1 hour ago",
      content: "IKEA is great for basics! Also check Facebook Marketplace and Kijiji for second-hand furniture. I found amazing deals there."
    },
    {
      id: 2,
      user: "Norry AI",
      avatar: "🤖",
      time: "1 hour ago",
      content: "Hi! I can help with furniture shopping tips. Toronto has several affordable options: IKEA (as mentioned), The Brick for sales, and don't forget student housing groups on Facebook for free/cheap furniture from graduating students!",
      isAI: true
    }
  ];

  const handlePostQuery = () => {
    if (!newQuery.trim()) return;
    
    toast.success("Query posted successfully! 🎉", {
      description: "Norry and community members will help you soon!"
    });
    setNewQuery("");
  };

  const handlePostResponse = () => {
    if (!newResponse.trim()) return;
    
    toast.success("Response posted! 👍", {
      description: "Thanks for helping a fellow student!"
    });
    setNewResponse("");
    setSelectedQuery(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="absolute inset-0 overflow-hidden inforens-pattern"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold gradient-text mb-2">Community Hub</h1>
            <p className="text-muted-foreground">Connect, ask questions, and help fellow international students</p>
          </div>
          <Button variant="inforens" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - Communities */}
          <div className="lg:col-span-1">
            <Card className="warm-card p-4 border border-primary/20 mb-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary" />
                Your Communities
              </h3>
              <div className="space-y-2">
                {communities.map((community) => (
                  <button
                    key={community.id}
                    onClick={() => setSelectedCommunity(community.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedCommunity === community.id 
                        ? 'bg-primary/20 border border-primary/30' 
                        : 'hover:bg-primary/10'
                    }`}
                  >
                    <div className="flex items-center mb-1">
                      <community.icon className={`w-4 h-4 mr-2 ${community.color}`} />
                      <span className="font-medium text-sm">{community.name}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {community.members} members • {community.online} online
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Norry AI Helper */}
            <Card className="warm-card p-4 border border-primary/20">
              <div className="flex items-center mb-3">
                <Bot className="w-6 h-6 text-primary mr-2" />
                <span className="font-semibold text-primary">Norry AI</span>
                <Badge variant="secondary" className="ml-2 text-xs bg-primary/20 text-primary">Online</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                I'm here to help clarify questions and provide guidance on student life!
              </p>
              <Button variant="warm" size="sm" className="w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Ask Norry
              </Button>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Post New Query */}
            <Card className="warm-card p-6 border border-primary/20 mb-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Plus className="w-5 h-5 mr-2 text-primary" />
                Ask the Community
              </h3>
              <div className="space-y-4">
                <Textarea
                  value={newQuery}
                  onChange={(e) => setNewQuery(e.target.value)}
                  placeholder="What would you like to ask the community? Be specific to get better help!"
                  className="warm-card border-primary/20"
                  rows={3}
                />
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">Housing</Badge>
                    <Badge variant="outline" className="text-xs">Academics</Badge>
                    <Badge variant="outline" className="text-xs">Social</Badge>
                    <Badge variant="outline" className="text-xs">Career</Badge>
                  </div>
                  <Button variant="inforens" onClick={handlePostQuery}>
                    <Send className="w-4 h-4 mr-2" />
                    Post Query
                  </Button>
                </div>
              </div>
            </Card>

            {/* Search and Filter */}
            <div className="flex gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search queries..." 
                  className="pl-10 warm-card border-primary/20"
                />
              </div>
              <Button variant="warm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Queries Feed */}
            <div className="space-y-6">
              {sampleQueries.map((query) => (
                <Card key={query.id} className="warm-card p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary/20 text-primary">
                        {query.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">{query.user}</span>
                        <Badge variant="outline" className="text-xs">{query.category}</Badge>
                        <span className="text-sm text-muted-foreground">{query.time}</span>
                      </div>
                      <p className="text-foreground mb-4">{query.content}</p>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <button className="flex items-center gap-1 text-muted-foreground hover:text-primary">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{query.likes}</span>
                        </button>
                        <button 
                          onClick={() => setSelectedQuery(selectedQuery === query.id ? null : query.id)}
                          className="flex items-center gap-1 text-muted-foreground hover:text-primary"
                        >
                          <Reply className="w-4 h-4" />
                          <span className="text-sm">{query.responses} responses</span>
                        </button>
                      </div>

                      {/* Responses */}
                      {selectedQuery === query.id && (
                        <div className="border-t border-primary/20 pt-4 mt-4 space-y-4">
                          {sampleResponses.map((response) => (
                            <div key={response.id} className="flex items-start gap-3">
                              <Avatar className="w-8 h-8">
                                <AvatarImage src="" />
                                <AvatarFallback className={`text-xs ${response.isAI ? 'bg-primary text-white' : 'bg-accent/20 text-accent'}`}>
                                  {response.avatar}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-sm font-medium">{response.user}</span>
                                  {response.isAI && (
                                    <Badge variant="secondary" className="text-xs bg-primary/20 text-primary">AI</Badge>
                                  )}
                                  <span className="text-xs text-muted-foreground">{response.time}</span>
                                </div>
                                <p className="text-sm text-foreground">{response.content}</p>
                              </div>
                            </div>
                          ))}
                          
                          {/* Add Response */}
                          <div className="flex gap-3 mt-4">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="bg-primary/20 text-primary text-xs">You</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 space-y-2">
                              <Textarea
                                value={newResponse}
                                onChange={(e) => setNewResponse(e.target.value)}
                                placeholder="Share your thoughts or help..."
                                className="warm-card border-primary/20 text-sm"
                                rows={2}
                              />
                              <Button variant="inforens" size="sm" onClick={handlePostResponse}>
                                <Send className="w-3 h-3 mr-1" />
                                Reply
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;