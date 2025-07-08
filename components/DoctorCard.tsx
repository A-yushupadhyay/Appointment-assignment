import { IDoctor } from "@/types";
import { FaUserMd, FaPhoneAlt, FaMapMarkerAlt, FaHospitalSymbol } from "react-icons/fa";
import { MdError } from "react-icons/md";

type Props = {
  doctor: IDoctor;
};

export default function DoctorCard({ doctor }: Props) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 transition hover:scale-[1.03] duration-300 border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        {/* Avatar and Name */}
        <div className="flex items-center gap-4">
          <div className="bg-primary text-white p-3 rounded-full">
            <FaUserMd size={20} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{doctor.name}</h2>
            <p className="text-sm text-gray-500">{doctor.department}</p>
          </div>
        </div>

        {/* Duty Status */}
        {!doctor.isOnDuty ? (
          <span
            title="Not on duty"
            className="inline-flex items-center gap-1 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full"
          >
            <MdError size={14} />
            Off Duty
          </span>
        ) : (
          <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
            On Duty Today
          </span>
        )}
      </div>

      {/* Timing */}
      <p className="text-sm text-gray-600 mb-2">
        <span className="font-medium text-gray-700">Shift:</span>{" "}
        {doctor.dutyTimings}
      </p>

      {/* Contact + Info */}
      <div className="text-sm text-gray-500 space-y-1 mt-2">
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-primary" size={14} />
          +91-98765-43210
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-primary" size={14} />
          Banjara Hills, Hyderabad
        </div>
        <div className="flex items-center gap-2">
          <FaHospitalSymbol className="text-primary" size={14} />
          PrimeCare Hospital
        </div>
      </div>
    </div>
  );
}
