export interface Member {
  name: string
  role: string
  veteran?: string
  bio: string
}

export const board: Member[] = [
  {
    name: 'Brian Tarrance',
    role: 'Principal and Executive Director',
    veteran: 'U.S. Army veteran',
    bio: 'Founder and Executive Director. A disabled U.S. Army veteran with over 30 years of executive leadership, construction oversight, and government operations experience with the U.S. Department of Defense. He retired as Senior Director of Occupational Safety and Health for Joint Base Lewis-McChord, managing infrastructure projects across the U.S., South Korea, and Afghanistan. Under his leadership Veterans Village has developed and acquired about 1,370 affordable housing units in Washington State.',
  },
  {
    name: 'Tawanda Hill, RN, MSN',
    role: 'President',
    bio: "A retired healthcare professional, educator, and organizational leader with more than 30 years of nursing experience across clinical care, administration, case management, and research, including managing a nationwide study for the Department of Obstetrics and Gynecology at UAB. Her background in compliance monitoring and quality assurance guides the organization's operations.",
  },
  {
    name: 'Sherry Le',
    role: 'Vice President',
    bio: "An entrepreneur, real estate professional, and business leader with experience across operations, healthcare, education, and real estate investment. She holds a B.S. in Biology from the University of Alabama, managed her family's multi-location salon businesses for two decades, and has held compliance roles with Jacksonville State University, Baxter International, and Brookwood Baptist Health. She is a Realtor with Keller Williams Realty Hoover.",
  },
  {
    name: 'T.J. Nguyen',
    role: 'Treasurer',
    bio: 'An educator, community leader, and real estate professional with nearly two decades of experience building programs for underserved communities. A founding team member and Assistant Director of the Southeastern Center of Robotics Education at Auburn University, he helped launch over 400 robotics teams across Alabama. A TEDxBirmingham Educator Fellow, he moved into full-time real estate in 2022 and partners with local nonprofits including The Salvation Army in Birmingham.',
  },
  {
    name: 'Marlon J. Petty',
    role: 'Secretary',
    veteran: 'U.S. Army veteran',
    bio: "A disabled U.S. Army veteran, business owner, and management professional with a background in corporate operations, public sector administration, and entrepreneurship. He holds a Bachelor's in Business Management from Miles College, has held operational management roles with Mercedes-Benz and the Jefferson County Commission, and owns TP's Automotive.",
  },
  {
    name: 'Elijah Piper',
    role: 'Board Member',
    bio: 'A commercial real estate professional specializing in multifamily investment sales, market analysis, and transaction management. He earned his B.S. in Real Estate from California State University, Fresno on a full academic and athletic scholarship and serves on the board of the Curtis Viking Senior Scholarship Program.',
  },
  {
    name: 'Michael Williams',
    role: 'Board Member',
    bio: 'A retired telecommunications executive with more than 30 years of corporate management, strategic planning, and financial leadership experience, including Senior Vice President of Marketing and Sales and Regional Finance Director. He has served on the boards of the Urban League of Broward County and the Boys and Girls Clubs, and as Chairman of the Greater Fort Lauderdale Chamber of Commerce.',
  },
  {
    name: 'Joel Sloan',
    role: 'Board Member',
    veteran: 'U.S. Marine Corps veteran',
    bio: "A U.S. Marine Corps veteran, business leader, and community advocate with experience in operations management, logistics, and transportation budgeting. He holds a Bachelor's in Criminal Justice from the University of Alabama at Birmingham and is committed to civic leadership and neighborhood revitalization in Birmingham.",
  },
]
