// Auto-generated with `raml-to-typescript`/`json-schema-to-typescript`

export type Profiles = {
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
}[];

/**
 * http://json-schema-faker.js.org/#gist/f568d8b9d21b9404b4bbf504ffdead4a/0.4.3
 */
export interface ProfilesIterator {
  nextPageToken?: string;
  records?: Profiles;
}
