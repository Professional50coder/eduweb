"use client"

import { Linkedin, Mail, X } from "lucide-react"

export default function AIFooter() {
  return (
    <footer className="border-t border-border/50 bg-gradient-to-t from-primary/5 to-transparent py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold mb-2 text-white">ai2easy4u</div>
            <p className="text-sm text-white/70">AI automation for real businesses solving real problems.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  AI Agents
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Automation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Decision Systems
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg hover:bg-primary/20 transition-all group">
                <Mail className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-primary/20 transition-all group">
                <Linkedin className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-primary/20 transition-all group">
                <X className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-sm text-white/60">
          <p>© 2026 ai2easy4u. Building AI systems for makers and founders.</p>
        </div>
      </div>
    </footer>
  )
}
