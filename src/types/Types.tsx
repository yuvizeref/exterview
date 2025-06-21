interface CompanyType {
  id: number | null;
  name: string;
}

interface ApplicationType {
  id: number | null;
  companyId: number;
  role: string;
  dateApplied: string;
  verdict: string;
}

export type { CompanyType, ApplicationType };
