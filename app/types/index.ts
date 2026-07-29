export interface Listing {
  id: string;
  plate: string;
  brand: string;
  model: string;
  year: string;
  km: string;
  engine: string;
  transmission: "Manuel" | "Otomatik";
  location: string;
  price: string;
  status: "Satılık" | "Koleksiyonda" | "Satıldı";
  tag: string;
  description: string;
  gradient: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface Car {
  brand: string;
  model: string;
  year: string;
  engine: string;
  tag: string;
  description: string;
  gradient: string;
  km?: string;
  status?: string;
}

export interface Event {
  id: string;
  date: string;
  title: string;
  location: string;
  description: string;
  type: "Buluşma" | "Festival" | "Konvoy" | "Fuar" | "Müzayede";
  attendees: number;
  capacity: number;
  created_at: string;
}

export interface BlogPost {
  id: string;
  category: "Restorasyon" | "Miras" | "Rehber" | "Teknoloji";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export interface UserProfile {
  id: string;
  username: string;
  full_name: string;
  city: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface CommunityMember {
  name: string;
  email: string;
  city: string;
  cars: number;
  active: boolean;
}

export interface ApprovalItem {
  type: "İlan" | "Üye";
  title: string;
  user: string;
  date: string;
}

export interface DashboardStat {
  label: string;
  value: string;
  change: string;
  color: string;
}
