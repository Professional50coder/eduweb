"use client"

import { Card } from "@/eduweb/components/ui/card"
import { Button } from "@/eduweb/components/ui/button"
import { Input } from "@/eduweb/components/ui/input"
import { SettingsIcon, Save, Zap } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <SettingsIcon className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">Settings</h1>
        </div>
        <p className="text-muted-foreground">Manage your account and content settings</p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Profile Settings */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold mb-2 block">Display Name</label>
              <Input placeholder="Your name" defaultValue="AI Educator" />
            </div>
            <div>
              <label className="text-sm font-semibold mb-2 block">Bio</label>
              <textarea
                placeholder="Write a short bio about yourself"
                defaultValue="Passionate about making AI simple and accessible"
                className="w-full h-24 p-3 bg-input border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
            <div>
              <label className="text-sm font-semibold mb-2 block">Email</label>
              <Input placeholder="your@email.com" defaultValue="creator@ai2easy4u.com" disabled />
            </div>
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </Card>

        {/* Content Settings */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6">Content Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div>
                <p className="font-semibold">Auto-save drafts</p>
                <p className="text-sm text-muted-foreground">Automatically save posts every 60 seconds</p>
              </div>
              <input type="checkbox" defaultChecked className="h-5 w-5 rounded accent-primary" />
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div>
                <p className="font-semibold">Show article previews</p>
                <p className="text-sm text-muted-foreground">Display preview images in article lists</p>
              </div>
              <input type="checkbox" defaultChecked className="h-5 w-5 rounded accent-primary" />
            </div>
          </div>
        </Card>

        {/* API Settings */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap className="h-5 w-5 text-accent" />
            Integrations
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-semibold">Medium Feed</p>
                  <p className="text-sm text-muted-foreground">Automatically fetch from gopanihitansh5.medium.com</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">Connected</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="p-6 border-destructive/30 bg-destructive/5">
          <h2 className="text-2xl font-bold mb-6 text-destructive">Danger Zone</h2>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">These actions cannot be undone. Please be careful.</p>
            <Button
              variant="outline"
              className="w-full border-destructive/50 text-destructive hover:bg-destructive/10 bg-transparent"
            >
              Delete all drafts
            </Button>
            <Button
              variant="outline"
              className="w-full border-destructive/50 text-destructive hover:bg-destructive/10 bg-transparent"
            >
              Delete account
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
