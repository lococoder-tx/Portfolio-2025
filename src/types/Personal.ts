export interface PersonalInfo {
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  email: string;
  location: string;
  company: string;
  companyPeriod: string;
  profileImage: string;
  isAvailable: boolean;
  brand: {
    name: string;
    year: string;
  };
}
