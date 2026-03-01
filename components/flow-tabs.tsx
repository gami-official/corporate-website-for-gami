"use client"

import { useState } from "react"

interface FlowStep {
  step: string
  title: string
  description: string
  noBreakPhrases?: string[]
}

function FlowDescription({
  text,
  noBreakPhrases,
}: {
  text: string
  noBreakPhrases?: string[]
}) {
  if (!noBreakPhrases?.length) return <>{text}</>
  const phrase = noBreakPhrases[0]
  if (!text.includes(phrase)) {
    return <FlowDescription text={text} noBreakPhrases={noBreakPhrases.slice(1)} />
  }
  const [before, after] = text.split(phrase)
  return (
    <>
      <FlowDescription text={before} noBreakPhrases={noBreakPhrases.slice(1)} />
      <span className="whitespace-nowrap">{phrase}</span>
      <FlowDescription text={after} noBreakPhrases={noBreakPhrases.slice(1)} />
    </>
  )
}

interface FlowTabsProps {
  flowOrganize: FlowStep[]
  flowBuy: FlowStep[]
}

export function FlowTabs({ flowOrganize, flowBuy }: FlowTabsProps) {
  const [active, setActive] = useState<"organize" | "buy">("organize")
  const flow = active === "organize" ? flowOrganize : flowBuy

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="mb-8 flex w-full border-b-2 border-border">
        <button
          type="button"
          onClick={() => setActive("organize")}
          className={`-mb-0.5 flex-1 border-b-2 py-4 text-center text-sm font-medium tracking-wider transition-colors sm:text-base ${
            active === "organize"
              ? "border-amber-500 text-amber-600"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          片付け・整理の流れ
        </button>
        <button
          type="button"
          onClick={() => setActive("buy")}
          className={`-mb-0.5 flex-1 border-b-2 py-4 text-center text-sm font-medium tracking-wider transition-colors sm:text-base ${
            active === "buy"
              ? "border-amber-500 text-amber-600"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          買取の流れ
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-8">
        {flow.map((f) => (
          <div key={f.step} className="flex flex-col gap-3 sm:flex-row sm:gap-6">
            <span className="shrink-0 font-serif text-3xl tracking-wider aurora-gradient-text">
              {f.step}
            </span>
            <div>
              <h3 className="font-medium tracking-wider text-foreground">
                {f.title}
              </h3>
              <p className="mt-1 text-sm leading-8 tracking-wide text-muted-foreground">
                <FlowDescription
                  text={f.description}
                  noBreakPhrases={f.noBreakPhrases}
                />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
