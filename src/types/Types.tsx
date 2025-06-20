interface CompanyType {
  id: number;
  name: string;
}

interface ApplicationType {
  id: number;
  companyId: number;
  role: string;
  dateApplied: string;
  verdict: string;
}

export type { CompanyType, ApplicationType };
