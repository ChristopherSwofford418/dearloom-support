import { Route, Router, Switch, Link, useLocation } from "wouter";
import {
  ArrowRight,
  Crown,
  Heart,
  LockKeyhole,
  Mail,
  MessageCircleHeart,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Trash2,
} from "lucide-react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

const APP_ICON = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663911058939/FnudHPkrkyZrCYwS.png";
const SUPPORT_EMAIL = "christopher.swofford@gmail.com";
const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link href="/" className="brand-link" aria-label="Dearloom home">
          <img src={APP_ICON} alt="" className="brand-icon" />
          <span className="brand-copy">
            <strong>Dearloom</strong>
            <small>Private Love Message</small>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <Link className={location === "/support" ? "active" : ""} href="/support">Support</Link>
          <Link className={location === "/privacy" ? "active" : ""} href="/privacy">Privacy</Link>
        </nav>
      </header>
      {children}
      <footer>
        <div>
          <strong>Private Love Message: Dearloom</strong>
          <span>Made by ClearPass Technologies LLC</span>
        </div>
        <div className="footer-links">
          <Link href="/support">Support</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <a href={`mailto:${SUPPORT_EMAIL}`}>Contact</a>
        </div>
        <p>© 2026 ClearPass Technologies LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><Sparkles size={15} aria-hidden="true" />{children}</p>;
}

function Home() {
  return (
    <Layout>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <Eyebrow>A quieter place for meaningful words</Eyebrow>
            <h1>Write it privately.<br /><em>Send it deliberately.</em></h1>
            <p className="lede">Dearloom helps you shape a thoughtful note in your own words, save it privately on your device, and choose when to place it in Messages.</p>
            <div className="hero-actions">
              <Link href="/support" className="primary-action">Get support <ArrowRight size={18} /></Link>
              <Link href="/privacy" className="secondary-action">Read our privacy promise</Link>
            </div>
            <div className="trust-row">
              <span><LockKeyhole size={16} /> No account</span>
              <span><ShieldCheck size={16} /> Local-first</span>
              <span><MessageCircleHeart size={16} /> You choose Send</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Dearloom app icon">
            <div className="halo halo-one" />
            <div className="halo halo-two" />
            <img src={APP_ICON} alt="Private Love Message: Dearloom app icon" />
            <div className="paper-note">
              <Heart size={18} fill="currentColor" />
              <p>“A small thing I noticed today…”</p>
            </div>
          </div>
        </section>

        <section className="promise-section">
          <div className="section-heading">
            <Eyebrow>Designed around your agency</Eyebrow>
            <h2>Your note stays yours at every step.</h2>
          </div>
          <div className="feature-grid">
            <article><span className="feature-number">01</span><LockKeyhole /><h3>Draft in private</h3><p>No sign-in, no social feed, and no access to your contacts or conversations.</p></article>
            <article><span className="feature-number">02</span><Heart /><h3>Make it personal</h3><p>Gentle prompts help you find a real detail. Dearloom never writes or rewrites the note for you.</p></article>
            <article><span className="feature-number">03</span><MessageCircleHeart /><h3>Choose the moment</h3><p>Open Apple’s Messages composer, select a recipient, review your note, and tap Send yourself.</p></article>
          </div>
        </section>

        <section className="paper-library">
          <div className="library-card">
            <div><Eyebrow>Optional Paper Library</Eyebrow><h2>More ways to make a note feel special.</h2><p>A one-time purchase unlocks Linen, Dusk Ink, and Pressed Line treatments. Core writing and texting remain free.</p><Link href="/support#purchases" className="text-link">Purchase help <ArrowRight size={17} /></Link></div>
            <div className="paper-stack" aria-hidden="true"><span /><span /><span /><Crown size={34} /></div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function Support() {
  return (
    <Layout>
      <main className="content-page">
        <section className="page-intro">
          <Eyebrow>Help when you need it</Eyebrow>
          <h1>Dearloom Support</h1>
          <p>Find quick answers for writing, texting, purchases, privacy, and troubleshooting.</p>
          <a className="primary-action" href={`mailto:${SUPPORT_EMAIL}?subject=Dearloom%20Support`}>Email support <Mail size={18} /></a>
        </section>

        <div className="support-grid">
          <aside className="support-index">
            <p>On this page</p>
            <a href="#texting">Send a text</a>
            <a href="#imessage">Use the iMessage extension</a>
            <a href="#purchases">Paper Library</a>
            <a href="#privacy-controls">Privacy controls</a>
            <a href="#troubleshooting">Troubleshooting</a>
          </aside>
          <section className="support-articles">
            <article id="texting"><div className="article-icon"><Smartphone /></div><div><h2>Send a note by text</h2><ol><li>Create or open a note.</li><li>Choose <strong>Preview and send</strong>.</li><li>Tap <strong>Text this note</strong>.</li><li>Choose a recipient in Apple’s Messages composer.</li><li>Review the message and tap Apple’s Send button when ready.</li></ol><p>Dearloom never chooses a recipient or sends automatically.</p></div></article>
            <article id="imessage"><div className="article-icon"><MessageCircleHeart /></div><div><h2>Use the iMessage extension</h2><ol><li>In Dearloom, preview a note and choose <strong>Make available in Messages</strong>.</li><li>Open a conversation in Messages.</li><li>Open the Dearloom extension from the Messages app drawer.</li><li>Select the note and tap <strong>Add to message</strong>.</li><li>Use Messages’ Send button.</li></ol></div></article>
            <article id="purchases"><div className="article-icon"><Crown /></div><div><h2>Paper Library purchase</h2><p>Paper Library is a one-time purchase that unlocks three decorative paper treatments. Core writing, saving, and texting do not require a purchase.</p><h3>Restore a purchase</h3><p>Open <strong>Settings → Paper Library</strong>, then choose <strong>Restore Purchases</strong>. Use the same Apple Account that made the purchase.</p><p>Purchases are processed by Apple. Dearloom does not receive your payment-card information.</p></div></article>
            <article id="privacy-controls"><div className="article-icon"><Trash2 /></div><div><h2>Export or delete private data</h2><p>Open <strong>Settings → Your private data</strong> to export a local copy or delete all Dearloom data stored by the app. You can also delete individual notes and Note Kits.</p></div></article>
            <article id="troubleshooting"><div className="article-icon"><RefreshCw /></div><div><h2>Troubleshooting</h2><h3>Messages composer does not open</h3><p>Text composition requires an iPhone or iPad configured for Messages. Check Settings → Apps → Messages and confirm an account or cellular text service is available.</p><h3>The iMessage extension is not visible</h3><p>Open Messages, start a conversation, tap the plus button, and look for Dearloom. Restart Messages after installing an update if needed.</p><h3>A purchase is still locked</h3><p>Confirm network access, reopen Dearloom, then use Restore Purchases. If the issue continues, email support with your device model and iOS version—never send payment details.</p></div></article>
          </section>
        </div>
      </main>
    </Layout>
  );
}

function Privacy() {
  return (
    <Layout>
      <main className="content-page policy-page">
        <section className="page-intro">
          <Eyebrow>Plain-language privacy</Eyebrow>
          <h1>Privacy Policy</h1>
          <p>Effective September 27, 2026 · ClearPass Technologies LLC</p>
        </section>
        <div className="policy-layout">
          <aside className="policy-promise"><ShieldCheck /><h2>The short version</h2><p>Your notes are private, local-first, and never used for advertising. Dearloom has no account system and does not read your conversations or contacts.</p></aside>
          <article className="policy-copy">
            <p>Private Love Message: Dearloom (“Dearloom”) is a private note-writing app with an iMessage extension. Dearloom is designed to work without an account.</p>
            <h2>Information stored on your device</h2>
            <p>Dearloom stores the note text you create, optional prompt responses, Note Kit titles, author-created prompts, visual treatment choices, optional revision history, app-lock preference, and optional local reminder data on your device. You control those items through editing, export, and deletion.</p>
            <p>Notes remain in Dearloom’s host-app storage unless you explicitly choose <strong>Make available in Messages</strong>. That action creates a minimal encrypted shared copy so Dearloom’s iMessage extension can show the note to you in Messages. The extension can add your chosen note to the active conversation. You choose whether to use Messages’ own Send control.</p>
            <h2>Information Dearloom does not access</h2>
            <p>Dearloom does not access your contacts, chats, recipient identity, message history, camera, microphone, photos, clipboard, location, calendar, Bluetooth, Health data, or advertising identifier.</p>
            <h2>Analytics and crash information</h2>
            <p>Analytics and crash collection are off by default. If you separately choose to help improve Dearloom from Settings, the app may send limited, content-free operational event categories described in the in-app disclosure. Dearloom does not send note text, Note Kit names, message text, recipient information, visual treatment, or identity to analytics services. You can turn this option off at any time; deleting all private data also turns it off.</p>
            <h2>Purchases</h2>
            <p>Optional Paper Library purchases are processed by Apple through the App Store. Dearloom does not receive or store your payment-card information. Apple may process purchase and transaction information under Apple’s own privacy policy.</p>
            <h2>No sale, tracking, account, or public sharing</h2>
            <p>Dearloom does not sell personal information, use data for cross-app tracking, run advertising, create a social graph, or publish notes. It has no account system or app server for your note content.</p>
            <h2>Retention and deletion</h2>
            <p>You can delete a note, Note Kit, extension-accessible draft, local reminder, or all local Dearloom data in Settings. Deleting local data cannot promise removal from device backups or system services Dearloom does not control.</p>
            <h2>Children</h2>
            <p>Dearloom is a general-audience writing utility and is not directed to children under 13. The app does not knowingly collect personal information from children.</p>
            <h2>Changes to this policy</h2>
            <p>If this policy materially changes, we will update the effective date and the in-app privacy information before the change applies.</p>
            <h2>Contact</h2>
            <p>For privacy questions, contact ClearPass Technologies LLC at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
          </article>
        </div>
      </main>
    </Layout>
  );
}

function NotFound() {
  return <Layout><main className="not-found"><Heart size={42} /><h1>That page isn’t here.</h1><Link href="/" className="primary-action">Return home</Link></main></Layout>;
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <Router base={BASE_PATH}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/support" component={Support} />
            <Route path="/privacy" component={Privacy} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
