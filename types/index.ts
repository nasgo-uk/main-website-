
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export type UserType = 'Customer' | 'Provider' | 'Company';
