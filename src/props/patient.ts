import { PatientRecord, Role } from "@/model/user";

export interface PatientTableProps {
  data: PatientRecord[];
  role: Role;
}