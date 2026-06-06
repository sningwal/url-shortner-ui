export interface INavLink {
    name: string;
    href: string;
}

export interface NavbarProps {
    navlinks: INavLink[];
}

export interface SectionTitleProps {
    text1: string;
    text2: string;
    text3: string;
}

export interface TestimonialCardProps {
    testimonial: ITestimonial;
    index: number;
}

export interface ITestimonial {
    image: string;
    name: string;
    role:string;
    quote: string;
}

export interface IFeature {
    icon: object;
    title: string;
    description: string;
}

export interface IFooter {
    title: string;
    links: IFooterLink[];
}

export interface IFooterLink {
    name: string;
    href: string;
}


export interface PricingCardProps {
    pricing: IPricing;
    index: number;
}

export interface IPricing {
    name: string;
    price: number;
    period: string;
    features: string[];
    mostPopular: boolean;
}

export interface SectionProps {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
}

export interface UTMReq {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

// Analytics Types
export interface Analytics {
  total_clicks: number;
  unique_clicks: number;
  by_country: Record<string, number>;
  by_referrer: Record<string, number>;
  utm_breakdown: {
    utm_source: Record<string, number>;
    utm_medium: Record<string, number>;
    utm_campaign: Record<string, number>;
  };
  clicks_by_date: Record<string, number>;
  device_summary: {
    device_type: Record<string, number>;
    platform: Record<string, number>;
    language: Record<string, number>;
    screen_resolution: Record<string, number>;
    timezone: Record<string, number>;
    user_agents: Record<string, number>;
  };
}
// Redirect Types
export interface DeviceStruct {
  userAgent: string;
  language: string;
  platform: string;
  screenResolution: string;
  timezone: string;
  deviceType: 'mobile' | 'tablet' | 'desktop';
}

export interface RedirectReq {
  device: DeviceStruct;
  referrer: string;
  utm: UTMReq;
  isUnique: boolean;
}