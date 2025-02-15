import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Switch key={location}>
        <Route 
          path="/" 
          component={() => (
            <PageTransition>
              <Home />
            </PageTransition>
          )} 
        />
        <Route 
          component={() => (
            <PageTransition>
              <NotFound />
            </PageTransition>
          )} 
        />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;