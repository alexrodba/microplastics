import type React from "react"
interface SectionHeadingProps {
  children: React.ReactNode
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold">{children}</h2>
      <div className="mt-4 mx-auto w-24 h-1 bg-cyan-600 rounded-full"></div>
    </div>
  )
}
