interface CompanyType {
  id: number | null;
  name: string;
}

interface ApplicationType {
  id: number | null;
  companyId: number | null;
  role: string;
  dateApplied: string;
  verdict: string;
}

export type { CompanyType, ApplicationType };
