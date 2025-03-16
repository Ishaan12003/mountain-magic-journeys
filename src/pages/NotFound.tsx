
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mountain } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-mountain-50 to-white dark:from-mountain-900 dark:to-mountain-950 px-4">
      <div className="text-center max-w-md">
        <div className="mx-auto w-24 h-24 rounded-full bg-mountain-100 dark:bg-mountain-800 flex items-center justify-center mb-6">
          <Mountain className="h-12 w-12 text-mountain-700 dark:text-mountain-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">404</h1>
        <p className="text-xl md:text-2xl font-serif mb-6">Path Not Found</p>
        <p className="text-muted-foreground mb-8">
          The mountain trail you're looking for seems to have vanished into the mist. Let's guide you back to the main path.
        </p>
        <Button asChild size="lg" className="bg-mountain-700 hover:bg-mountain-600">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
