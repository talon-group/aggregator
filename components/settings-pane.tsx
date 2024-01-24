/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/mJpDr55GVeL
 */
import { Toggle } from "@/components/ui/toggle"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SettingsPane() {
  return (
    <div className="mx-auto max-w-sm grid gap-6">
      <header>
        <h1 className="text-2xl font-bold">Settings</h1>
      </header>
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <span className="text-base font-medium">Enable Notifications</span>
          <Toggle />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <MessagesSquareIcon className="w-4 h-4" />
            <span className="text-sm font-medium">New Messages</span>
            <Toggle className="ml-auto" />
          </div>
          <div className="flex items-center">
            <UserPlusIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Friend Requests</span>
            <Toggle className="ml-auto" />
          </div>
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Event Invitations</span>
            <Toggle className="ml-auto" />
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <form className="grid gap-2">
          <div className="grid gap-1">
            <Label className="text-sm" htmlFor="email">
              Email
            </Label>
            <Input defaultValue="mike@example.com" id="email" type="email" />
          </div>
          <Button type="submit">Save Changes</Button>
        </form>
      </div>
      <footer className="grid gap-2 text-center text-sm">
        <p className="grid place-items-center">© 2023 Acme Inc. All rights reserved.</p>
        <div className="grid gap-2 mx-auto max-w-xs">
          <Link href="#">Terms of Service</Link>
          <Link href="#">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  )
}


function MessagesSquareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
    </svg>
  )
}


function UserPlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  )
}


function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}