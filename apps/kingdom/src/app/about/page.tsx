import { Button } from "@workspace/ui/components/button"
import { Card } from "@workspace/ui/components/card"

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

const CrownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 16l3-8 5.5 3L19 8l-4 8H5z" />
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

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    />
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

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const BarChart3Icon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="12" y1="20" x2="12" y2="10" strokeWidth={2} />
    <line x1="18" y1="20" x2="18" y2="4" strokeWidth={2} />
    <line x1="6" y1="20" x2="6" y2="16" strokeWidth={2} />
  </svg>
)

const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
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
              <a href="/pricing" className="text-sm font-medium hover:text-accent transition-colors">
                Pricing
              </a>
              <a href="/about" className="text-sm font-medium text-primary">
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
            <h1 className="text-4xl font-bold mb-4 text-balance">🏰 About Royal Scrolls</h1>
            <p className="text-muted-foreground text-xl mb-8 text-pretty max-w-2xl mx-auto">
              We're the kingdom's most trusted scribes, dedicated to crafting the finest QR code scrolls for citizens
              and knights alike
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Kingdom's Story</h2>
              <p className="text-muted-foreground mb-4">
                In the digital realm, royal scrolls have become essential for connecting the physical and virtual
                worlds. We noticed that most scroll creators were either too complex for common citizens, too slow for
                urgent royal decrees, or lacked the analytics that knights and nobles require.
              </p>
              <p className="text-muted-foreground mb-4">
                That's why we established Royal Scrolls - a service that combines the simplicity needed by citizens with
                the power demanded by knights. Whether you're a merchant sharing your shop details or a royal advisor
                tracking campaign effectiveness, our scribes serve all ranks of the kingdom.
              </p>
              <p className="text-muted-foreground">
                Our royal scribes craft millions of scrolls every month, helping citizens, merchants, and nobles connect
                with their audiences across the entire kingdom and beyond.
              </p>
            </div>
            <div className="bg-primary/10 rounded-2xl p-8 text-center">
              <ScrollIcon className="h-24 w-24 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-bold mb-2">1M+ Royal Scrolls</h3>
              <p className="text-muted-foreground">Crafted by our scribes across the kingdom</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Royal Scribes?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <SwordIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Swift as Knights</h3>
                <p className="text-muted-foreground">
                  Our royal scribes craft scrolls with the speed of mounted knights charging into battle
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <ShieldIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Royal Security</h3>
                <p className="text-muted-foreground">
                  Your secrets are protected by the kingdom's strongest defenses. We never store or track your scroll
                  contents
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <GlobeIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Kingdom-Wide Reach</h3>
                <p className="text-muted-foreground">
                  Trusted by citizens and nobles in over 150 kingdoms across the realm
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <UsersIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Citizen Focused</h3>
                <p className="text-muted-foreground">
                  Built based on feedback from thousands of loyal citizens and knights
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <BarChart3Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Court Analytics</h3>
                <p className="text-muted-foreground">
                  Comprehensive tracking and insights for knights and royal advisors
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <HeartIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Crafted with Honor</h3>
                <p className="text-muted-foreground">
                  Every scroll is thoughtfully designed with the honor and precision of royal craftsmanship
                </p>
              </Card>
            </div>
          </div>

          <div className="text-center bg-primary/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Join the Kingdom?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of citizens and knights who trust Royal Scrolls for their QR code needs. Start
              commissioning professional scrolls today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/">Commission Your First Scroll</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/pricing">View Kingdom Pricing</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
