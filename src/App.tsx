import { PopupChatbot } from "./components/chatbot";
import { motion } from "framer-motion";
import { Bot, Code2, Sparkles, Zap, ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}

function CodeBlock() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'popup' | 'full'>('popup');

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const codes = {
    popup: `import { PopupChatbot } from "chatui";

export default function App() {
  return (
    <PopupChatbot
      url="http://localhost:8080"
      agent="research-assistant"
      position="bottom-right"
      header={{
        title: "Research Assistant",
        avatar: "https://github.com/shadcn.png",
      }}
    />
  );
}`,
    full: `import { Chatbot } from "chatui";

export default function ChatPage() {
  return (
    <div className="h-screen w-full">
      <Chatbot
        url="http://localhost:8080"
        agent="research-assistant"
        header={{
          title: "Research Assistant",
          show: true
        }}
      />
    </div>
  );
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codes[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden bg-[#0A0A0B] border border-white/10 shadow-2xl">
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>

          <div className="flex space-x-1 bg-black/20 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('popup')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${activeTab === 'popup'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-primary/20'
                }`}
            >
              Popup Widget
            </button>
            <button
              onClick={() => setActiveTab('full')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${activeTab === 'full'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-primary/20'
                }`}
            >
              Full Page
            </button>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="text-zinc-400 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>

      <div className="relative">
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="p-6 overflow-x-auto text-sm font-mono"
        >
          <pre className="text-zinc-300">
            {codes[activeTab]}
          </pre>
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="chatbot-theme min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-40" />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles size={14} />
              <span>v1.0 Now Available</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Modern Chat UI<br />
              <span className="text-primary">Voice Enabled</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              A premium, customizable chatbot component for React.
              Built with Tailwind CSS and Framer Motion for seamless AI integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Get Started <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors">
                View Documentation
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:pl-10"
          >
            <CodeBlock />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why use ChatUI?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built for developers who want to add a polished chat interface to their applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Bot}
              title="AI Ready"
              description="Designed to connect easily with any AI backend or LLM API. Handles message pools, streaming, and tool calls out of the box."
            />
            <FeatureCard
              icon={Code2}
              title="Easy Integration"
              description="Drop-in component that works with any React application. Styled with Tailwind CSS for easy customization."
            />
            <FeatureCard
              icon={Zap}
              title="Voice Enabled"
              description="Built-in speech-to-text and text-to-speech capabilities for a modern, accessible user experience. (Chromium only)"
            />
          </div>
        </div>
      </section>

      {/* Demo Section Hint */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Try it yourself</h2>
          <p className="text-muted-foreground mb-8">
            Interact with the chatbot in the bottom right corner to see how it works.
            It's configured to answer questions about this AI Assistant.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 ChatUI. Open source and free to use.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://github.com/anujjoshi3105/chatui" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="#" className="hover:text-foreground transition-colors">Docs</a>
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          </div>
        </div>
      </footer>

      <PopupChatbot
        url="http://localhost:8080"
        position="bottom-right"
        placeholder="Ask me about anything..."
        tooltip="Chat with AI Assistant"
        userId="019c4bfa-71fc-7937-ad35-8b161da9fdde"
        stream={true}
        header={{
          show: true,
          title: "Research Assistant",
          subtitle: "Ask me anything",
          avatar: "https://github.com/shadcn.png",
          allowMaximize: true
        }}
        starter={{
          message: "👋 Hello! I'm here to help you. Ask me anything!",
        }}
        footer={{
          show: true,
          text: "AI Protocol",
        }}
        width={450}
        height={600}
      />
    </div>
  );
}
