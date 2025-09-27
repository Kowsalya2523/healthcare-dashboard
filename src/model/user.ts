export type Role = "admin" | "reviewer" | "viewer" | "";

export interface PatientRecord {
  PatientID: string;
  "ServiceCode (CPT)": string;
  Gender: string;
  Status: string;
  Amount: number;
  "Date of service": string;
}

export interface User {
  id?: string;
  username: string;
  password: string;
  role: Role
}