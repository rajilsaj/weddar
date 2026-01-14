export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface EventInfo {
  date: string;
  time: string;
  venue: string;
  address: string;
}

export interface WeddingDetails {
  ceremony: EventInfo;
  reception: EventInfo;
}

export interface WishlistItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
}

export interface SectionProps {
  onLayout?: (event: any) => void;
}
