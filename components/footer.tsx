"use client"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const footerLinks = {
  Learn: ["AI Basics", "Tools", "Productivity", "Scam Awareness"],
  Resources: ["Blog", "Tutorials", "FAQ", "Contact"],
  Company: ["About", "Privacy", "Terms", "Changelog"],
}

export default function Footer() {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
                <span className="text-white text-sm font-bold">AI</span>
              </div>
              <span className="font-bold text-lg">ai2easy4u</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              AI explained simply — for students & professionals.
            </p>
            <div className="flex gap-4 pt-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-lg bg-secondary/20 hover:bg-primary/20 text-foreground/60 hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-semibold text-foreground">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-foreground/50 text-sm">© 2025 ai2easy4u. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-foreground/50">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
