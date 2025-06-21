import * as Constants from "../constants";
import type { ApplicationType } from "../types/Types";

const fetchApplications = async (
  companyId: number,
  setApplications: (data: ApplicationType[]) => void,
  setLoading: (flag: boolean) => void
) => {
  try {
    const response = await fetch(
      Constants.API_URL + "/applications/company/" + companyId
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setApplications(data);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

const fetchAllApplications = async (
  setApplications: (data: ApplicationType[]) => void,
  setLoading: (flag: boolean) => void
) => {
  try {
    const response = await fetch(Constants.API_URL + "/applications");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setApplications(data);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

const deleteApplication = async (applicationId: number) => {
  try {
    const response = await fetch(
      Constants.API_URL + "/applications/" + applicationId,
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

const addApplication = async (
  application: ApplicationType,
  setApplications: (application: ApplicationType) => void
) => {
  try {
    const response = await fetch(Constants.API_URL + "/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(application),
    });

    if (!response.ok) {
      throw new Error("Failed to add company");
    }

    const result = await response.json();
    setApplications(result);
  } catch (error: unknown) {
    console.log(error);
  }
};

export {
  fetchApplications,
  fetchAllApplications,
  deleteApplication,
  addApplication,
};
