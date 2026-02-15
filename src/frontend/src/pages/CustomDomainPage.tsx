import { usePageTitle } from '../hooks/usePageTitle';
import { Copy, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CustomDomainPage() {
  usePageTitle('Custom Domain Setup');
  const [copied, setCopied] = useState(false);
  const currentHostname = typeof window !== 'undefined' ? window.location.hostname : 'your-app.ic0.app';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentHostname);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Custom Domain Setup</h1>
          <p className="text-lg text-muted-foreground">
            Connect your own domain name to your Caffeine app with these step-by-step instructions.
          </p>
        </div>

        <Alert className="mb-8">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Current Deployment Hostname</AlertTitle>
          <AlertDescription>
            <div className="flex items-center gap-2 mt-2">
              <code className="bg-muted px-3 py-1 rounded text-sm font-mono flex-1">
                {currentHostname}
              </code>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="shrink-0"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            <p className="text-sm mt-2">
              You'll need this hostname when configuring your DNS records.
            </p>
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Prerequisites</CardTitle>
              <CardDescription>
                Before you begin, make sure you have:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>A registered domain name (e.g., from GoDaddy, Namecheap, Cloudflare, etc.)</li>
                <li>Access to your domain's DNS management panel</li>
                <li>Your current deployment hostname (shown above)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 1: Configure DNS for Subdomain (www)</CardTitle>
              <CardDescription>
                Set up a CNAME record to point your www subdomain to your app
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Add a CNAME Record</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Log in to your domain registrar's DNS management panel and add the following CNAME record:
                </p>
                <div className="bg-muted p-4 rounded-lg space-y-2 text-sm font-mono">
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="text-muted-foreground">Type:</span>
                    <span>CNAME</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="text-muted-foreground">Name:</span>
                    <span>www</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="text-muted-foreground">Value:</span>
                    <span className="break-all">{currentHostname}</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="text-muted-foreground">TTL:</span>
                    <span>3600 (or Auto)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 2: Configure Apex/Root Domain (Optional)</CardTitle>
              <CardDescription>
                Set up your root domain (e.g., example.com) to work with your app
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  Root domain configuration depends on your DNS provider's capabilities. Choose one of the options below:
                </AlertDescription>
              </Alert>

              <div>
                <h4 className="font-semibold mb-2">Option A: ALIAS or ANAME Record (Recommended)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  If your DNS provider supports ALIAS or ANAME records (Cloudflare, DNSimple, DNS Made Easy, etc.):
                </p>
                <div className="bg-muted p-4 rounded-lg space-y-2 text-sm font-mono">
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="text-muted-foreground">Type:</span>
                    <span>ALIAS or ANAME</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="text-muted-foreground">Name:</span>
                    <span>@ (or leave blank)</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="text-muted-foreground">Value:</span>
                    <span className="break-all">{currentHostname}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Option B: Redirect Apex to www</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  If ALIAS/ANAME is not available, set up a redirect from your apex domain to www:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Configure a 301 redirect from example.com to www.example.com</li>
                  <li>Most registrars offer this as "Domain Forwarding" or "URL Redirect"</li>
                  <li>Enable "Forward with masking" or "Permanent redirect (301)" if available</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 3: Verify DNS Configuration</CardTitle>
              <CardDescription>
                Check that your DNS records are properly configured
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Using Command Line Tools</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  You can verify your DNS configuration using these commands:
                </p>
                <div className="bg-muted p-4 rounded-lg space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Check CNAME record:</p>
                    <code className="text-sm font-mono">dig www.yourdomain.com CNAME</code>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Or using nslookup:</p>
                    <code className="text-sm font-mono">nslookup -type=CNAME www.yourdomain.com</code>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Using Online Tools</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  You can also use online DNS lookup tools:
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://mxtoolbox.com/SuperTool.aspx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-link hover:text-link-hover inline-flex items-center gap-1"
                    >
                      MXToolbox DNS Lookup
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dnschecker.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-link hover:text-link-hover inline-flex items-center gap-1"
                    >
                      DNS Checker (Global Propagation)
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Troubleshooting</CardTitle>
              <CardDescription>
                Common issues and solutions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">DNS Propagation Time</h4>
                <p className="text-sm text-muted-foreground">
                  DNS changes can take anywhere from a few minutes to 48 hours to propagate globally. 
                  Most changes are visible within 1-4 hours. Be patient and check periodically.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">HTTPS/TLS Certificate Issuance</h4>
                <p className="text-sm text-muted-foreground">
                  After DNS propagation completes, HTTPS certificates may take additional time to be 
                  issued and activated. This process is automatic but can take up to 24 hours.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Cached DNS Records</h4>
                <p className="text-sm text-muted-foreground">
                  If you're not seeing changes, try clearing your browser cache and DNS cache:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mt-2">
                  <li>Windows: <code className="bg-muted px-1 rounded">ipconfig /flushdns</code></li>
                  <li>macOS: <code className="bg-muted px-1 rounded">sudo dscacheutil -flushcache</code></li>
                  <li>Linux: <code className="bg-muted px-1 rounded">sudo systemd-resolve --flush-caches</code></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">CNAME Flattening</h4>
                <p className="text-sm text-muted-foreground">
                  Some DNS providers (like Cloudflare) automatically "flatten" CNAME records at the root level. 
                  This is normal and should work correctly. Ensure "Proxy status" is set to "DNS only" (gray cloud) 
                  if using Cloudflare.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Still Having Issues?</h4>
                <p className="text-sm text-muted-foreground">
                  If you continue to experience problems after 48 hours:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mt-2">
                  <li>Double-check your DNS records for typos</li>
                  <li>Verify you're editing the correct domain zone</li>
                  <li>Contact your DNS provider's support team</li>
                  <li>Consider using a guided setup service like{' '}
                    <a
                      href="https://caffbrew.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link hover:text-link-hover"
                    >
                      CaffBrew
                    </a>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Need Help?</AlertTitle>
            <AlertDescription>
              For guided custom domain setup with expert support, visit{' '}
              <a
                href="https://caffbrew.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link hover:text-link-hover font-medium"
              >
                CaffBrew.com
              </a>
              {' '}— the official setup partner for Caffeine apps.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}
