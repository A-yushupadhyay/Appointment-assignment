import {
  FaCalendarAlt,
  FaUserMd,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { AppointmentFilterState } from "@/types";

type Props = {
  filters: AppointmentFilterState;
  onChange: (field: keyof AppointmentFilterState, value: string) => void;
};

export default function AppointmentFilters({ filters, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm">
        <FaCalendarAlt className="text-gray-500 mr-2" />
        <input
          type="date"
          value={filters.date}
          onChange={(e) => onChange("date", e.target.value)}
          className="w-full focus:outline-none"
        />
      </div>

      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm">
        <FaUserMd className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Department"
          value={filters.department}
          onChange={(e) => onChange("department", e.target.value)}
          className="w-full focus:outline-none"
        />
      </div>

      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm">
        <MdAssignment className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Agent"
          value={filters.agent}
          onChange={(e) => onChange("agent", e.target.value)}
          className="w-full focus:outline-none"
        />
      </div>

      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm">
        <FaUser className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Patient Name"
          value={filters.patientName}
          onChange={(e) => onChange("patientName", e.target.value)}
          className="w-full focus:outline-none"
        />
      </div>

      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm">
        <FaSearch className="text-gray-500 mr-2" />
        <select
          value={filters.status}
          onChange={(e) => onChange("status", e.target.value)}
          className="w-full bg-white focus:outline-none"
        >
          <option value="">All Statuses</option>
          <option value="booked">Booked</option>
          <option value="unbooked">Unbooked</option>
        </select>
      </div>
    </div>
  );
}
