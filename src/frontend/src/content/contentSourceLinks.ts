/**
 * Content Source Links
 * 
 * This file documents the canonical Google Drive document URLs used as manual content sources
 * for each page in the application. These links are for developer reference only.
 * 
 * IMPORTANT: No Google API integration is implemented. Content must be manually extracted
 * from these documents and added to the pages.ts content registry.
 */

export const contentSourceLinks = {
  home: 'https://docs.google.com/document/d/1X1EW6aMVU96N561e67KS-TiT0INt2xyQcCGnahy9nT8/edit?usp=drive_link',
  contact: 'https://docs.google.com/document/d/1sStidfjoepzi__JzsJN70fsYFZfQJK3an122KIegZvQ/edit?usp=drive_link',
  
  // Our Solutions
  solutions: 'https://docs.google.com/document/d/1jOi0NYWEU__Q91Kg39WvGHACZ5jXIeZs7ac79E1MD-8/edit?usp=drive_link',
  'workplace-collaboration': 'https://docs.google.com/document/d/1mP67ay7kQLL-rKtcHO2lek3W4DheegnsSsz43aA4zs8/edit?usp=drive_link',
  'professional-sound': 'https://docs.google.com/document/d/1YI1oYcQr-lZSmRigTVZlifRdh6tmLOWzjeMVtSVR32E/edit?usp=drive_link',
  'display-visualization': 'https://docs.google.com/document/d/16DGEX9ABQ9b9Bk-5VCENB7olMD2_CqUavrKCDrh0wYs/edit?usp=drive_link',
  'networking-connectivity': 'https://docs.google.com/document/d/1cLIp1qZsBdr-iq5GfGGNbAVBPN3JA3Dv9GVjKVeO_js/edit?usp=drive_link',
  'intelligent-systems': 'https://docs.google.com/document/d/1XWu0JO5TH8TmW3Nnly8SHKTWmO7wdEAHPCLWLfBawNI/edit?usp=drive_link',
  'lifecycle-support': 'https://docs.google.com/document/d/1vuo0QLgy9bT6KR13PuJHnYMBifQkltnyL6tdc7suHy0/edit?usp=drive_link',
  
  // Industries We Serve
  industries: 'https://docs.google.com/document/d/1bXsU1B0ELC7ZjpIyo9gXmooKJjEwBy48WXB03mDaBYA/edit?usp=drive_link',
  'corporate-enterprise': 'https://docs.google.com/document/d/1KnpYE_u4m-9TmuBH_x5dUYmI1dlOOl5698OAykoTl80/edit?usp=drive_link',
  'education': 'https://docs.google.com/document/d/1jonpw1xPdtcQCfSYkZlxiRzjUqCzzTGsE8Ig9TwGu50/edit?usp=drive_link',
  'healthcare': 'https://docs.google.com/document/d/16OlQ6UACKpxpOUxHjke3peO3JigTOsAjH1qbvhSXDRY/edit?usp=drive_link',
  'manufacturing': 'https://docs.google.com/document/d/1F7inrTBfXJrYbPILWlkOkRyVQqOt89Jha4yIGooC9dY/edit?usp=drive_link',
  'government': 'https://docs.google.com/document/d/1Jfg00lT0zcjbjVKSh6i8_avIVwhrAx4JD9Ov8Y99zgo/edit?usp=drive_link',
  'hospitality': 'https://docs.google.com/document/d/1j9FlvLNOLf6kAiuIlWW0Iyopd1yWm7VVLetVYx7ium4/edit?usp=drive_link',
  'banking': 'https://docs.google.com/document/d/1juKTMzsTAsSxrLEpbpaavOFS0ZifFMQn3yLrvJRQsKw/edit?usp=drive_link',
  'training-centers': 'https://docs.google.com/document/d/1OQJQ9LGoTeAfy48uK7nv81_A7ouKcQF_n_YBq3b5HI4/edit?usp=drive_link',
  'retail': 'https://docs.google.com/document/d/1MaL-y1KRhqlDecHxNdXvP9R8rxRxNBH-sDGb2kPSELA/edit?usp=drive_link',
  'live-events': 'https://docs.google.com/document/d/1bL4YsniEjeAoQqV2bDWmDW5qKaXsEKz_g9jUgp-ocxE/edit?usp=drive_link',
  
  // About Us
  about: 'https://docs.google.com/document/d/1DtYtEw4L3iVF3ytvlqTGy8rOM1J033cu8G4jir6YII4/edit?usp=drive_link',
  'our-organization': 'https://docs.google.com/document/d/1DtYtEw4L3iVF3ytvlqTGy8rOM1J033cu8G4jir6YII4/edit?usp=drive_link',
  'why-choose-us': 'https://docs.google.com/document/d/1GYXT-68JRgLraJmCVe9jxSKYuyTs779H22_yn5W9uPw/edit?usp=drive_link',
  'case-studies': 'https://docs.google.com/document/d/1i4p3Flt3wQ4GWNcNhxEXXrfc9JN3hp97jTjJ4P8XOAo/edit?usp=drive_link',
  'careers': 'https://docs.google.com/document/d/1JGnreLdGER8yLpMA1fX8SBWP2MHuxVeorJFnKGHCATI/edit?usp=drive_link',
};

/**
 * Helper function to get the source link for a given page ID
 */
export function getContentSourceLink(pageId: string): string | undefined {
  return contentSourceLinks[pageId as keyof typeof contentSourceLinks];
}

/**
 * Helper function to get all page IDs that have source links
 */
export function getAllPageIdsWithSources(): string[] {
  return Object.keys(contentSourceLinks);
}
