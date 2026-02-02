import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <Card className="w-full max-w-xl mx-auto bg-card border border-white/10">
            <CardContent className="pt-6">
              <div className="flex mb-4 gap-3 items-start">
                <AlertCircle className="h-7 w-7 text-destructive shrink-0" />
                <div>
                  <h1 className="text-2xl font-bold text-white">Page not found</h1>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The page you’re looking for doesn’t exist.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-accent text-white text-sm font-semibold hover:bg-accent/90 transition-colors"
                >
                  Go home
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
