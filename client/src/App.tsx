import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import AboutISM from "./pages/AboutISM";
import Blog from "./pages/Blog";
import Research from "./pages/Research";
import Mentor from "./pages/Mentor";
import Projects from "./pages/Projects";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={AboutMe} />
          <Route path="/resume" component={Resume} />
          <Route path="/ism" component={AboutISM} />
          <Route path="/blog" component={Blog} />
          <Route path="/research" component={Research} />
          <Route path="/mentor" component={Mentor} />
          <Route path="/projects" component={Projects} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
