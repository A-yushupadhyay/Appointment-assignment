// utils/mockData.ts
import { IDoctor, IAppointment } from "@/types";

// --- Doctors Data ---
export const doctors: IDoctor[] = [
  {
    id: 1,
    name: "Dr. Ayush Upadhyay",
    department: "Cardiology",
    dutyTimings: "08:00 am - 05:00 pm",
    isOnDuty: true,
  },
  {
    id: 2,
    name: "Dr. Meera Sharma",
    department: "Neurology",
    dutyTimings: "10:00 am - 06:00 pm",
    isOnDuty: false,
  },
  {
    id: 3,
    name: "Dr. Rohan Kapoor",
    department: "Orthopedics",
    dutyTimings: "09:00 am - 03:00 pm",
    isOnDuty: true,
  },
  {
    id: 4,
    name: "Dr. Priya Desai",
    department: "Pediatrics",
    dutyTimings: "12:00 pm - 08:00 pm",
    isOnDuty: true,
  },
  {
    id: 5,
    name: "Dr. Anil Menon",
    department: "Dermatology",
    dutyTimings: "07:00 am - 02:00 pm",
    isOnDuty: false,
  },
];


// --- Appointments Data ---
export const appointments: IAppointment[] = [
  {
    id: 1,
    patientName: "John Doe",
    doctorId: 1,
    date: "2025-07-08",
    time: "10:00",
    status: "booked",
    department: "Cardiology",
    agent: "Agent A",
  },
  {
    id: 2,
    patientName: "",
    doctorId: 2,
    date: "2025-07-08",
    time: "11:00",
    status: "unbooked",
    department: "Neurology",
    agent: "Agent B",
  },
  {
    id: 3,
    patientName: "Simran Kaur",
    doctorId: 3,
    date: "2025-07-08",
    time: "09:30",
    status: "booked",
    department: "Orthopedics",
    agent: "Agent A",
  },
  {
    id: 4,
    patientName: "",
    doctorId: 4,
    date: "2025-07-08",
    time: "01:00",
    status: "unbooked",
    department: "Pediatrics",
    agent: "Agent C",
  },
  {
    id: 5,
    patientName: "Anita Joseph",
    doctorId: 5,
    date: "2025-07-08",
    time: "08:00",
    status: "booked",
    department: "Dermatology",
    agent: "Agent A",
  },
  {
    id: 6,
    patientName: "",
    doctorId: 1,
    date: "2025-07-09",
    time: "11:00",
    status: "unbooked",
    department: "Cardiology",
    agent: "Agent B",
  },
  {
    id: 7,
    patientName: "Rahul Singh",
    doctorId: 2,
    date: "2025-07-09",
    time: "02:00",
    status: "booked",
    department: "Neurology",
    agent: "Agent A",
  },
  {
    id: 8,
    patientName: "",
    doctorId: 3,
    date: "2025-07-09",
    time: "12:30",
    status: "unbooked",
    department: "Orthopedics",
    agent: "Agent C",
  },
];

