import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gradient mb-2">
              Portfolio
            </h3>
            <p className="text-muted-foreground">
              Building the future through technology and education
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-1 text-muted-foreground">
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};