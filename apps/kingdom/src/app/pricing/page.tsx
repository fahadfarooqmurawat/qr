"use client"

import { useState } from "react"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"

const CheckIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const CrownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 16l3-8 5.5 3L19 8l-4 8H5z" />
  </svg>
)

const CastleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 21h18M5 21V7l1-1h2l1 1v2l1-1h2l1 1v2l1-1h2l1 1v14M9 21v-4a2 2 0 114 0v4M7 13h2m6 0h2"
    />
  </svg>
)

const BarChart3Icon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="12" y1="20" x2="12" y2="10" strokeWidth={2} />
    <line x1="18" y1="20" x2="18" y2="4" strokeWidth={2} />
    <line x1="6" y1="20" x2="6" y2="16" strokeWidth={2} />
  </svg>
)

const HistoryIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v5h5" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v5l4 2" />
  </svg>
)

const EyeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
    />
    <circle cx="12" cy="12" r="3" strokeWidth={2} />
  </svg>
)

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <line x1="2" y1="12" x2="22" y2="12" strokeWidth={2} />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
    />
  </svg>
)

const SwordIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    />
  </svg>
)

const ScrollIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
)

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-sparkle">
          <div className="text-accent/50 text-lg">⚔️</div>
        </div>
        <div className="absolute top-40 right-20 animate-sparkle" style={{ animationDelay: "1s" }}>
          <CastleIcon className="h-6 w-6 text-accent/40" />
        </div>
        <div className="absolute bottom-40 left-20 animate-sparkle" style={{ animationDelay: "2s" }}>
          <div className="text-accent/45 text-sm">🏰</div>
        </div>
        <div className="absolute top-60 left-1/2 animate-float">
          <div className="w-2 h-2 bg-accent/20 rounded-full"></div>
        </div>
      </div>

      <header className="border-b border-border bg-card/60 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg transition-transform hover:scale-105">
                <CastleIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-balance">Royal Scrolls</h1>
                <p className="text-sm text-muted-foreground">Kingdom's finest QR code scribes</p>
              </div>
            </div>
            <nav className="flex items-center gap-4">
              <a href="/" className="text-sm font-medium hover:text-accent transition-colors">
                Free QR Code
              </a>
              <a href="/pricing" className="text-sm font-medium text-primary">
                Pricing
              </a>
              <a href="/about" className="text-sm font-medium hover:text-accent transition-colors">
                About
              </a>
              <Button
                variant="outline"
                size="sm"
                className="transition-all hover:scale-105 bg-primary text-primary-foreground border-primary hover:bg-primary/90"
              >
                <CrownIcon className="h-4 w-4 mr-2" />
                Dashboard (Pro)
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="animate-float">
                <div className="p-4 bg-primary rounded-full">
                  <CastleIcon className="h-12 w-12 text-primary-foreground" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-balance">🏰 Join the Royal Court</h1>
            <p className="text-muted-foreground text-xl mb-8 text-pretty max-w-2xl mx-auto">
              Start as a common citizen with 3 royal scrolls, then become a knight for unlimited access and powerful
              analytics
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
                Monthly Knighthood
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  isYearly ? "bg-primary" : "bg-muted"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
                Yearly Knighthood
              </span>
              {isYearly && (
                <Badge variant="secondary" className="ml-2 bg-accent text-accent-foreground">
                  Save 17% 🏰
                </Badge>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 relative border-border hover:border-accent/40 transition-all">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <ScrollIcon className="h-6 w-6 text-accent" />
                  Common Citizen
                </CardTitle>
                <div className="text-4xl font-bold">$0</div>
                <CardDescription>Perfect for trying the royal scribes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckIcon />
                    <span>3 royal scrolls for life</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon />
                    <span>All scroll content types</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon />
                    <span>PNG & SVG downloads</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon />
                    <span>Royal quality craftsmanship</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-8 border-border hover:border-accent text-primary bg-transparent"
                >
                  Start as Citizen
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 relative bg-primary text-primary-foreground">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-accent text-accent-foreground px-4 py-1">🏰 Become a Knight</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <CrownIcon className="h-6 w-6 text-primary-foreground" />
                  Royal Knight
                </CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">
                    {isYearly ? (
                      <>
                        $49.99<span className="text-lg text-primary-foreground/80">/year</span>
                      </>
                    ) : (
                      <>
                        $4.99<span className="text-lg text-primary-foreground/80">/month</span>
                      </>
                    )}
                  </div>
                  {isYearly && <div className="text-sm text-primary-foreground/80">$4.17/month when paid annually</div>}
                </div>
                <CardDescription className="text-primary-foreground/90">
                  Unlimited scrolls and royal privileges
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckIcon />
                    <span>Unlimited royal scrolls</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HistoryIcon className="h-5 w-5 text-primary-foreground" />
                    <span>Royal archives access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart3Icon className="h-5 w-5 text-primary-foreground" />
                    <span>Court analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <EyeIcon className="h-5 w-5 text-primary-foreground" />
                    <span>Royal surveillance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <UsersIcon className="h-5 w-5 text-primary-foreground" />
                    <span>Audience insights</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GlobeIcon className="h-5 w-5 text-primary-foreground" />
                    <span>Kingdom-wide data</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CrownIcon className="h-5 w-5 text-primary-foreground" />
                    <span>Royal court support</span>
                  </div>
                </div>
                <div className="space-y-3 mt-8">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <SwordIcon className="h-4 w-4 mr-2" />
                    Become Knight {isYearly ? "Yearly" : "Monthly"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-8">🏰 Royal Court Wisdom</h2>
            <div className="grid gap-6 max-w-2xl mx-auto text-left">
              <Card className="p-6 border-border">
                <h3 className="font-semibold mb-2">Can I step down from knighthood?</h3>
                <p className="text-muted-foreground">
                  Yes, you can renounce your knighthood anytime. You'll continue to have royal privileges until the end
                  of your current term.
                </p>
              </Card>
              <Card className="p-6 border-border">
                <h3 className="font-semibold mb-2">What happens to my royal archives if I step down?</h3>
                <p className="text-muted-foreground">
                  Your scroll history and court analytics will be preserved in the royal archives for 30 days, giving
                  you time to export any important records.
                </p>
              </Card>
              <Card className="p-6 border-border">
                <h3 className="font-semibold mb-2">Does the kingdom offer refunds?</h3>
                <p className="text-muted-foreground">
                  The royal court is generous! We offer a 30-day satisfaction guarantee for all knighthood
                  subscriptions. If our services don't meet your expectations, contact us for a full refund.
                </p>
              </Card>
              <Card className="p-6 border-border">
                <h3 className="font-semibold mb-2">How do I know when I've used my 3 citizen scrolls?</h3>
                <p className="text-muted-foreground">
                  The royal scribes keep careful count of your scrolls and will let you know how many remain. Once
                  you've used all 3, they'll invite you to join the knighthood for unlimited access.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
