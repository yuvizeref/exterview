import * as Constants from "../constants";
import type { CompanyType } from "../types/Types";

const fetchCompanies = async (
  setCompanies: (data: CompanyType[]) => void,
  setLoading: (flag: boolean) => void,
  setFilteredCards: (data: CompanyType[]) => void
) => {
  try {
    const response = await fetch(Constants.API_URL + "/companies");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setCompanies(data);
    setFilteredCards(data);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

const addCompany = async (
  company: CompanyType,
  setCompanies: (company: CompanyType) => void
) => {
  try {
    const response = await fetch(Constants.API_URL + "/companies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(company),
    });

    if (!response.ok) {
      throw new Error("Failed to add company");
    }

    const result = await response.json();
    setCompanies(result);
  } catch (error: unknown) {
    console.log(error);
  }
};

const deleteCompany = async (companyId: number) => {
  try {
    const response = await fetch(
      Constants.API_URL + "/companies/" + companyId,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete company");
    }
  } catch (error: unknown) {
    console.log(error);
  }
};

const editCompany = async (company: CompanyType) => {
  try {
    const response = await fetch(Constants.API_URL + "/companies", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(company),
    });
    if (!response.ok) {
      throw new Error("Failed to edit company");
    }
  } catch (error: unknown) {
    console.log(error);
  }
};

export { fetchCompanies, addCompany, deleteCompany, editCompany };
