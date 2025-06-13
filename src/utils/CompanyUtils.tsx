import * as Constants from "../constants";
import type { CompanyType } from "../types/CompanyType";

const fetchCompanies = async (
  setCompanies: (data: CompanyType[]) => void,
  setLoading: (flag: boolean) => void
) => {
  try {
    const response = await fetch(Constants.API_URL + "/companies");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setCompanies(data);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

export default fetchCompanies;
