export interface IDoctor {
  id: number;
  name: string;
  department: string;
  dutyTimings: string;
  isOnDuty: boolean;
}

export interface IAppointment {
  id: number;
  patientName: string;
  doctorId: number;
  date: string;
  time: string;
  status: "booked" | "unbooked";
  department: string;
  agent: string;
}

// types/index.ts
export interface AppointmentFilterState {
  date: string;
  department: string;
  agent: string;
  patientName: string;
  status: string;
}
