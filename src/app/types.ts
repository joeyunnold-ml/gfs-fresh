export interface Member {
  id: string;
  name: string;
  type: string;
  status: 'ACTIVE' | 'EXPIRED';
  memberSince: string;
  expires: string;
  displayId: string;
}

export interface Visit {
  id: string;
  date: string;
  time: string;
  title: string;
  tickets: string;
  fee: string;
  status: 'upcoming' | 'past';
  formattedDate?: string;
  description?: string;
}

export interface ActionCard {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  link?: string;
}

export interface BookedVisit {
  title: string;
  date: string;
  time: string;
  info?: string;
}

export interface Event {
  title: string;
  date: string;
  time: string;
  tag?: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  price: string;
  priceInterval: string;
  benefits: string[];
  isCurrent?: boolean;
  expires?: string;
}

export interface GuestPass {
  id: string;
  expires: string;
  dateUsed?: string;
  status: 'available' | 'used';
}

export interface TicketType {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  category: 'standard' | 'discounted' | 'member';
  isFree?: boolean;
}

export interface TicketFlowStep {
  number: number;
  label: string;
  status: 'completed' | 'active' | 'pending';
}
