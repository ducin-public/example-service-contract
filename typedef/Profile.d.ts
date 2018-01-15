// Auto-generated with `raml-to-typescript`/`json-schema-to-typescript`

/**
 * http://json-schema-faker.js.org/#gist/6ef1ec072dab55e86822e01b785503c9/0.4.1
 */
export interface Profile {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  preferredName?: string;
  email: string;
  alternateEmails: string[];
  phone: {
    office?: string;
    home?: string;
    mobile?: string;
  };
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  locale: "pl-PL" | "en-US";
  timezone: "Central European Standard Time" | "Romance Standard Time" | "GMT Standard Time" | "UTC";
  photoURL?: string;
  principalName: string;
  name: string;
  officeAddress: string;
  company: string;
  description: string;
  fax: string;
  initials: string;
  manager: string;
  notes: string;
  title: string;
  webPage: string;
}
