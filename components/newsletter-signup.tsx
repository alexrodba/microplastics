"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, AlertCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setStatus("error")
      setMessage("Si us plau, introdueix el teu correu electrònic.")
      return
    }

    setStatus("loading")

    // Simulating form submission - in a real app, you would connect this to your newsletter service
    // like Mailchimp, ConvertKit, etc.
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Success simulation
      setStatus("success")
      setMessage("Gràcies per subscriure't! Aviat rebràs notícies nostres.")
      setEmail("")
    } catch (error) {
      setStatus("error")
      setMessage("Hi ha hagut un error. Si us plau, torna-ho a provar més tard.")
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="El teu correu electrònic"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white text-slate-900 h-12"
            disabled={status === "loading" || status === "success"}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-cyan-700 h-12 text-lg"
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" ? "Enviant..." : "Subscriu-me"}
        </Button>

        {status === "success" && (
          <div className="flex items-center text-cyan-300 bg-cyan-900/50 p-3 rounded-md">
            <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0" />
            <p>{message}</p>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center text-red-300 bg-red-900/50 p-3 rounded-md">
            <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
            <p>{message}</p>
          </div>
        )}
      </form>
    </div>
  )
}
