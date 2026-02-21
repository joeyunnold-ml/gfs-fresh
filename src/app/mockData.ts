import { Member, Visit, BookedVisit, Event, GuestPass, MembershipTier, TicketType, TicketFlowStep, MembershipType } from './types';
import imgFeaturedBanner from "../assets/812d952efda787a47c2af5d2990685f9bb475b24.png";
import imgAvatar from "../assets/f4c3c5628f6037f61ffccc463010b72844a570fa.png";

// Placeholder QR code from Unsplash
const qrCodeUrl = "https://images.unsplash.com/photo-1762372701427-314b341aa7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxciUyMGNvZGUlMjBzcXVhcmUlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8fHx8MTc3MTMzNzUwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export const currentUser = {
  name: "Tom",
  avatar: imgAvatar,
};

export const members: Member[] = [
  {
    id: "29834928_1",
    name: "Tom Smith",
    type: "Individual Plus Member",
    status: "ACTIVE",
    memberSince: "2002",
    expires: "May 5, 2026",
    displayId: "29834928_1",
  },
  {
    id: "29834928_2",
    name: "Jane Smith",
    type: "Individual Plus Member", // Assuming family members share plan type
    status: "ACTIVE",
    memberSince: "2002",
    expires: "May 5, 2026",
    displayId: "29834928_2",
  },
  {
    id: "29834928_2_2", // Using unique ID
    name: "Emily Smith",
    type: "Child",
    status: "ACTIVE",
    memberSince: "2015",
    expires: "May 5, 2026",
    displayId: "29834928_2",
  },
  {
    id: "29834928_3",
    name: "Michael Smith",
    type: "Child",
    status: "ACTIVE",
    memberSince: "2018",
    expires: "May 5, 2026",
    displayId: "29834928_3",
  },
  {
    id: "29834928_4",
    name: "Sarah Smith",
    type: "Child",
    status: "ACTIVE",
    memberSince: "2020",
    expires: "May 5, 2026",
    displayId: "29834928_4",
  },
];

export const visits: Visit[] = [
  {
    id: "1",
    date: "Aug. 7, 2025",
    formattedDate: "Aug 7",
    time: "9:30 AM",
    title: "Noodle Mountain Activation",
    tickets: "2 Adult Member",
    fee: "Included",
    status: "upcoming",
    description: "Explore an immersive installation featuring oversized sculptural noodle forms winding through the landscape. This interactive activation invites visitors to walk through, climb, and engage with the art.",
  },
  {
    id: "2",
    date: "Aug. 15, 2025",
    formattedDate: "Aug 15",
    time: "6:00PM - 8:00PM",
    title: "Painting Under the Stars",
    tickets: "1 Adult Member, 1 Child",
    fee: "Included",
    status: "upcoming",
    description: "Join us for an evening of plein air painting as the sun sets over the grounds. All materials are provided, and instructors will be on hand to guide painters of all skill levels.",
  },
  {
    id: "3",
    date: "Sep. 25, 2025",
    formattedDate: "Sep 25",
    time: "10:00AM - 12:00PM",
    title: "Nature Hike Adventure",
    tickets: "2 Adult Member",
    fee: "Included",
    status: "upcoming",
    description: "A guided two-hour hike through the preserve trails led by our resident naturalist. Learn about the native flora and fauna while enjoying the scenic overlooks.",
  },
  {
    id: "4",
    date: "May. 5, 2024",
    formattedDate: "May 5",
    time: "10:00AM - 12:00PM",
    title: "Past Exhibition Tour",
    tickets: "2 Adult Member",
    fee: "Included",
    status: "past",
    description: "A docent-led tour through our spring exhibition featuring works from emerging regional artists. The tour covered three gallery spaces and the outdoor sculpture garden.",
  },
];

export const bookedVisits: BookedVisit[] = [
  {
    title: "Yoga",
    date: "August 16",
    time: "10:30 — 11:30AM",
    info: "A limited number of mats are available to borrow, but attendees are encouraged to bring their own.",
  },
];

export const memberMornings: Event[] = [
  {
    title: "Member Mornings",
    date: "August 16",
    time: "9:00AM",
    tag: "Members Only",
  },
  {
    title: "Member Mornings",
    date: "August 16", // Duplicated date in screenshot? No, it's just multiple times/events. I'll stick to screenshot.
    time: "9:00AM",
    tag: "Members Only",
  },
  {
    title: "Member Mornings",
    date: "August 16",
    time: "9:00AM",
    tag: "Members Only",
  },
];

export const membershipTiers: MembershipTier[] = [
  {
    id: "individual-plus",
    name: "Individual Plus",
    price: "$150",
    priceInterval: "per year",
    isCurrent: true,
    expires: "October 5, 2026",
    benefits: [
      "$100 tax deduction",
      "2 Adult Unlimited year-round admission to the park and indoor galleries",
      "2 Guest Passes (one-time use)",
      "Invitation to Member Preview Day",
      "10% discount at Museum Shop, Van Gogh Café, The Peacock Café, and",
      "Discounts on most ticketed events, classes, workshops, and lectures",
      "Access to exclusive member-only day trips",
    ],
  },
  {
    id: "family",
    name: "Family",
    price: "$175",
    priceInterval: "per year",
    benefits: [
      "$100 tax deduction",
      "2 Adult Unlimited year-round admission to the park and indoor galleries",
      "4 Guest Passes (one-time use)",
      "Invitation to Member Preview Day",
      "10% discount at Museum Shop, Van Gogh Café, The Peacock Café, and",
      "Discounts on most ticketed events, classes, workshops, and lectures",
      "Access to exclusive member-only day trips",
    ],
  },
  {
    id: "family-plus",
    name: "Family Plus",
    price: "$215",
    priceInterval: "per year",
    benefits: [
      "$115 tax deduction",
      "2 Adult Unlimited year-round admission to the park and indoor galleries",
      "4 Guest Passes (one-time use)",
      "Invitation to Member Preview Day",
      "10% discount at Museum Shop, Van Gogh Café, The Peacock Café, and",
      "Discounts on most ticketed events, classes, workshops, and lectures",
      "Access to exclusive member-only day trips",
    ],
  },
  {
    id: "sustainer",
    name: "Sustainer",
    price: "$500",
    priceInterval: "per year",
    benefits: [
      "$300 tax deduction",
      "6 Adult Unlimited year-round admission to the park and indoor galleries",
      "8 Guest Passes (one-time use)",
      "Invitation to Member Preview Day",
      "10% discount at Museum Shop, Van Gogh Café, The Peacock Café, and",
      "Discounts on most ticketed events, classes, workshops, and lectures",
      "Access to exclusive member-only day trips",
    ],
  },
];

export const guestPassPolicy = {
  total: 2,
  remaining: 1,
  description: "As a member, you receive 2 complimentary guest passes per year. Share a pass with a friend or family member to give them a full day of access to the grounds, exhibitions, and programs.",
};

export const guestPasses: GuestPass[] = [
  {
    id: "gp-1",
    expires: "October 5, 2026",
    status: "available",
  },
  {
    id: "gp-2",
    expires: "October 5, 2026",
    dateUsed: "7/20/2025",
    status: "used",
  },
];

export const primaryProfile = {
  firstName: "Tom",
  lastName: "Smith",
  email: "tom.smith@email.com",
  phone: "(555) 123-4567",
  street: "123 Main Street",
  city: "Anytown",
  state: "NY",
  zip: "10001",
};

export const assets = {
  heroBanner: imgFeaturedBanner,
  qrCode: qrCodeUrl,
};

export const ticketFlowSteps: TicketFlowStep[] = [
  { number: 1, label: 'Visit date & entry time', status: 'completed' },
  { number: 2, label: 'Select type of ticket', status: 'active' },
  { number: 3, label: 'Checkout', status: 'pending' },
];

export const initialTickets: TicketType[] = [
  {
    id: 'adult',
    title: 'Adult',
    description: 'General admission for ages 18+. Includes outdoor sculptures and indoor galleries.',
    price: 25,
    quantity: 0,
    category: 'standard',
  },
  {
    id: 'child',
    title: 'Child',
    description: 'Ages 6\u201317. Children under 6 are free. Must be with an adult.',
    price: 15,
    quantity: 0,
    category: 'standard',
  },
  {
    id: 'senior',
    title: 'Senior',
    description: 'Ages 65+. Valid ID may be required.',
    price: 20,
    quantity: 0,
    category: 'discounted',
  },
  {
    id: 'veteran',
    title: 'Veteran',
    description: 'Active military and veterans. Military ID required at entry.',
    price: 12,
    quantity: 0,
    category: 'discounted',
  },
  {
    id: 'member-adult',
    title: 'Adult',
    description: 'Free for Grounds For Sculpture members. Membership card required at entry.',
    price: 0,
    quantity: 0,
    category: 'member',
    isFree: true,
  },
];

export const ticketFlowOrderDefaults = {
  selectedDate: 'Aug. 7, 2025',
  selectedTime: '9:30 AM',
};

export const initialMembershipTypes: MembershipType[] = [
  { id: 'young-adult', title: 'Young Adult (18-25)', description: 'Admits one adult aged 18-25', price: 45, quantity: 0, category: 'individual' },
  { id: 'individual', title: 'Individual', description: 'Unlimited admission for 1 adult + 2 single-use guest passes.', price: 95, quantity: 0, category: 'individual' },
  { id: 'individual-plus', title: 'Individual Plus', description: 'Admission for 2 adults + 2 guest passes + member discounts.', price: 150, quantity: 0, category: 'individual' },
  { id: 'family', title: 'Family', description: '2 adults + children under 18, 2 guest passes, shop & dining discounts.', price: 75, quantity: 0, category: 'family' },
  { id: 'family-plus', title: 'Family Plus', description: 'Family benefits + 4 guest passes and extra event discounts.', price: 215, quantity: 0, category: 'family' },
  { id: 'sustainer', title: 'Sustainer', description: 'Supporter benefits + 8 guest passes, exclusive previews & access.', price: 500, quantity: 0, category: 'other' },
  { id: 'benefactor', title: 'Benefactor', description: 'Sustainer benefits + 10 guest passes + VIP recognition & select events.', price: 1500, quantity: 0, category: 'other' },
];
