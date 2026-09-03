import type { IconName } from '../components/Icon'

export interface Service {
  slug: string
  icon: IconName
  title: string
  text: string
  cta: { label: string; to: string }
}

export const services: Service[] = [
  {
    slug: 'housing',
    icon: 'home',
    title: 'Affordable housing',
    text: 'Safe, secure apartment homes for veterans and seniors across seven communities in Washington, with services extending to Alabama.',
    cta: { label: 'See communities', to: '/housing' },
  },
  {
    slug: 'counseling',
    icon: 'heart',
    title: 'Behavioral health counseling',
    text: 'Compassionate, professional counseling so veterans and seniors have the emotional support they need through life transitions.',
    cta: { label: 'Ask about counseling', to: '/contact?topic=services' },
  },
  {
    slug: 'food',
    icon: 'basket',
    title: 'Food assistance',
    text: 'Connecting residents with food resources and assistance programs so essential needs are met.',
    cta: { label: 'Ask about food help', to: '/contact?topic=services' },
  },
  {
    slug: 'medical',
    icon: 'medical',
    title: 'Medical care coordination',
    text: 'Helping veterans and seniors access the medical care, benefits, and resources they are entitled to.',
    cta: { label: 'Ask about medical care', to: '/contact?topic=services' },
  },
  {
    slug: 'jobs',
    icon: 'briefcase',
    title: 'Job training',
    text: 'Job training and employment-readiness resources that support self-sufficiency and stable income.',
    cta: { label: 'Ask about job training', to: '/contact?topic=services' },
  },
  {
    slug: 'partners',
    icon: 'hands',
    title: 'Community partnerships',
    text: 'We work hand in hand with local nonprofits and agencies so services are reliable and matched to local needs.',
    cta: { label: 'How we partner', to: '/partners' },
  },
]
