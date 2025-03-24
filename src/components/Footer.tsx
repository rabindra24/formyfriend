import {
  Facebook,
  GitBranch,
  GitBranchPlus,
  Instagram,
  LinkedinIcon,
} from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="text-2xl font-semibold tracking-tight mb-4">
              <a href="/" className="text-2xl font-semibold tracking-tight">
                <img src="/logo.png" alt="Sahana M" className="w-20" />
              </a>{" "}
            </div>
            <p className="text-muted-foreground mb-4 max-w-sm">
            Yupp! If you want to talk about coding, music, or just need a Flutter fix, I’m always happy to connect! 🎶💻, Or just send me a message—I promise I’ll reply faster than a poorly optimized SQL query! 😆🚀
            </p>
          </div>

          <div>
            <div className="flex gap-5 h-full items-center justify-center">
              <GitBranch />
              <LinkedinIcon />
              <Instagram />
              <Facebook />
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Sahana M. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Twitter", "GitHub", "Instagram", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
