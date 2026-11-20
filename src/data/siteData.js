import {
  BarChart3,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Copy,
  Download,
  FileSpreadsheet,
  FormInput,
  Layers,
  MessageCircle,
  QrCode,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Users,
  Wifi,
  WifiOff,
} from 'lucide-react'

export const APP_URL = 'https://quick-lead-jet.vercel.app/'
export const SUPPORT_EMAIL = 'info@datagenix.in'

/**
 * Android APK on Google Drive.
 * 1. Upload APK to Drive → Share → “Anyone with the link”.
 * 2. Copy the file ID from the link:
 *    https://drive.google.com/file/d/PASTE_THIS_ID/view
 * 3. Put only PASTE_THIS_ID below (or set ANDROID_APK_DOWNLOAD_URL to a full URL instead).
 */
export const ANDROID_APK_DRIVE_FILE_ID = ''

/** Optional: full direct link (overrides Drive ID). e.g. self-hosted /QuickLeads.apk */
export const ANDROID_APK_DOWNLOAD_URL = '/QuickLeads/v1.0.0/QuickLeads.apk'

export const ANDROID_APK_FILENAME = 'QuickLeads.apk'

export function getAndroidApkDownloadUrl() {
  if (ANDROID_APK_DOWNLOAD_URL) return ANDROID_APK_DOWNLOAD_URL
  if (ANDROID_APK_DRIVE_FILE_ID) {
    return `https://drive.google.com/uc?export=download&id=${ANDROID_APK_DRIVE_FILE_ID}`
  }
  return ''
}

/** “Download App” buttons — uses APK when configured, else falls back to web app. */
export const androidApkDownloadHref = getAndroidApkDownloadUrl() || APP_URL

/** Contact details from https://www.datagenix.in */
export const DATAGENIX = {
  company: 'DatagenixAI',
  legalName: 'DatagenixAI LLP',
  email: 'info@datagenix.in',
  phone: '+91 73852 56569',
  phoneTel: '+917385256569',
  website: 'https://www.datagenix.in',
  logoSrc: '/datagenix-logo.png',
  hours: 'Mon – Sat, 9 AM – 7 PM IST',
}

export const navLinks = [
  { label: 'How it works', href: '#how' },
  { label: 'Roles', href: '#roles' },
  { label: 'Features', href: '#features' },
  { label: 'Product', href: '#product' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Help', href: '/help.html' },
]

export const steps = [
  {
    n: 1,
    icon: FormInput,
    title: 'Create a form',
    desc: 'Start from a template. First name, last name, mobile and inquiry are built-in. Add custom questions and set event dates.',
    outcome: 'An event-ready lead form in minutes',
  },
  {
    n: 2,
    icon: Users,
    title: 'Invite your salesmen',
    desc: 'Invite each salesman by mobile number. They accept in the app and you assign them to the forms they work on.',
    outcome: 'Sales team assigned & ready',
  },
  {
    n: 3,
    icon: ScanLine,
    title: 'Capture at the stall',
    desc: 'Salesmen add leads in a few taps. Visitors can also scan the salesman’s printed A4 QR code and fill the form themselves.',
    outcome: '100% offline & online capture',
  },
  {
    n: 4,
    icon: BarChart3,
    title: 'Follow up & export',
    desc: 'Filter leads by form, salesman, inquiry or date. Call or WhatsApp from the lead, or export everything to Excel & CSV.',
    outcome: 'Instant conversion & clean exports',
  },
]

export const features = [
  {
    icon: WifiOff,
    title: 'Offline lead capture',
    desc: 'Leads save safely on the phone without internet signal and sync automatically when connection returns — with zero duplicates.',
  },
  {
    icon: QrCode,
    title: 'Salesman QR codes',
    desc: 'Each salesman’s personal QR credits every scan to them. Print it directly on A4 sheets, ready for your exhibition stall.',
  },
  {
    icon: Copy,
    title: 'Duplicate lead alerts',
    desc: 'The same visitor mobile number captured multiple times is automatically flagged for the admin to keep data clean.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp follow-up',
    desc: 'Open WhatsApp with a ready pre-filled message, or automatically send visitors instant branded confirmation messages.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Excel & CSV export',
    desc: 'Export exactly what you filtered, with every custom answer in its own dedicated column ready for CRM upload.',
  },
  {
    icon: ClipboardList,
    title: 'Incomplete forms saved',
    desc: 'If a visitor stops halfway through the QR form, partial contact info is preserved so your sales team never loses a warm prospect.',
  },
  {
    icon: FormInput,
    title: 'Form templates',
    desc: 'Pre-built exhibition inquiry and demo request templates get your forms created and active in less than two minutes.',
  },
  {
    icon: ShieldCheck,
    title: 'Activity & audit logs',
    desc: 'See when each salesman logged in and out, and view an audit trail of who exported which file and when.',
  },
  {
    icon: Building2,
    title: 'Company group management',
    desc: 'Organise multiple brands or exhibition booths into separate groups with isolated role permissions and clear boundaries.',
  },
]

export const useCases = [
  {
    title: 'Exhibition Organisers',
    desc: 'Run multiple exhibitor lead flows from one central dashboard with live event metrics and export logs.',
    accent: 'from-sky-800 to-sky-500',
  },
  {
    title: 'Sales & Marketing Teams',
    desc: 'Equip every rep with personal QR codes, follow-up tracking, and live conversion leaderboards.',
    accent: 'from-sky-700 to-sky-400',
  },
  {
    title: 'Business Owners',
    desc: 'See immediate trade show ROI — who captured which lead, peak booth hours, and team performance.',
    accent: 'from-sky-900 to-sky-500',
  },
  {
    title: 'Event Management Companies',
    desc: 'Standardise lead capture across client exhibitions with branded forms, OTP logins, and clean CSV exports.',
    accent: 'from-sky-600 to-sky-300',
  },
  {
    title: 'Trade Show Exhibitors',
    desc: 'Turn fast booth footfall into qualified opportunities before competitors even finish typing business cards.',
    accent: 'from-sky-800 to-sky-400',
  },
  {
    title: 'Agencies & Service Providers',
    desc: 'Capture qualified enquiries at partner expos — segment by service line, assign reps by zone, and export for CRM in minutes.',
    accent: 'from-sky-700 to-sky-500',
  },
]

export const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    badge: null,
    highlight: false,
    priceLabel: '₹0',
    priceNote: 'Get started at no cost',
    cta: 'Download App',
    limits: [
      '1 lead capture form',
      '1 salesman account',
      '50 leads total',
      '50 WhatsApp confirmations',
      'Core dashboard & review screen',
    ],
  },
  {
    id: 'event-pass',
    name: 'Event Pass',
    badge: 'One show',
    highlight: true,
    priceLabel: '₹1,499',
    priceNote: 'per event (7 days validity)',
    cta: 'Get Event Pass',
    limits: [
      '1 form for 7 days',
      'Up to 5 salesmen',
      '500 leads total',
      '500 WhatsApp confirmations',
      'Excel & CSV export included',
      'Printed A4 QR generation',
    ],
  },
  {
    id: 'silver',
    name: 'Silver',
    badge: null,
    highlight: false,
    priceLabel: '₹999',
    priceNote: 'per month',
    cta: 'Choose Silver',
    limits: [
      '3 active forms',
      '5 salesmen accounts',
      '1,000 leads per month',
      '500 WhatsApp alerts / month',
      'Full Excel & CSV exports',
      'Priority email support',
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    badge: 'Teams',
    highlight: false,
    priceLabel: '₹2,999',
    priceNote: 'per month',
    cta: 'Choose Gold',
    limits: [
      '3 company groups, 10 forms',
      '20 salesmen accounts',
      '5,000 leads per month',
      '2,500 WhatsApp alerts / month',
      'Duplicate lead alerts',
      'Salesman activity & export logs',
    ],
  },
]

export const appScreenshots = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    src: '/screenshots/dashboard.png',
    alt: 'QuickLeads lead dashboard with KPIs, charts, and lead sources',
    width: 3840,
    height: 2160,
  },
  {
    id: 'forms',
    label: 'Forms',
    src: '/screenshots/forms.png',
    alt: 'QuickLeads forms list for exhibitions with QR codes and assignments',
    width: 3840,
    height: 2160,
  },
  {
    id: 'leads',
    label: 'Leads',
    src: '/screenshots/leads.png',
    alt: 'QuickLeads leads table with search, filters, and export',
    width: 3840,
    height: 2160,
  },
  {
    id: 'analytics',
    label: 'Analytics',
    src: '/screenshots/analytics.png',
    alt: 'QuickLeads analytics with salesman leaderboard and busiest hours',
    width: 3840,
    height: 2160,
  },
  {
    id: 'notifications',
    label: 'Notifications',
    src: '/screenshots/notifications.png',
    alt: 'QuickLeads notifications for invitations and lead alerts',
    width: 3840,
    height: 2160,
  },
]

export const mobileScreenshots = [
  {
    id: 'group',
    label: 'Group home',
    src: '/Mobile-Screenshots/group.jpg',
    alt: 'QuickLeads Android app group home with KPIs, salesmen, and invite actions',
    width: 1080,
    height: 769,
  },
  {
    id: 'forms',
    label: 'Forms',
    src: '/Mobile-Screenshots/forms.jpg',
    alt: 'QuickLeads Android forms list with live events, QR codes, and add lead',
    width: 1080,
    height: 769,
  },
  {
    id: 'leads',
    label: 'Leads',
    src: '/Mobile-Screenshots/leads.jpg',
    alt: 'QuickLeads Android leads list with search, tags, and quick add',
    width: 1080,
    height: 769,
  },
  {
    id: 'notifications',
    label: 'Notifications',
    src: '/Mobile-Screenshots/notifications.jpg',
    alt: 'QuickLeads Android notifications for expiries, duplicates, and invites',
    width: 1080,
    height: 769,
  },
]

export const trustBadges = [
  { icon: WifiOff, label: 'Works offline in crowded halls' },
  { icon: Smartphone, label: 'Android & Web' },
  { icon: ShieldCheck, label: 'Free plan to start' },
]
