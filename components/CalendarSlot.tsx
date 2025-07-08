// components/CalendarSlot.tsx
import { IAppointment } from "@/types";
import { CalendarCheck, Clock } from "lucide-react";

type Props = {
  slot: IAppointment;
  onClick: () => void;
};

export default function CalendarSlot({ slot, onClick }: Props) {
  const isBooked = slot.status === "booked";

  return (
    <div
      onClick={!isBooked ? onClick : undefined}
      className={`rounded-lg p-3 text-center text-sm border transition duration-200 cursor-pointer select-none ${
        isBooked
          ? "bg-green-100 text-green-800 cursor-not-allowed border-green-300"
          : "bg-white hover:shadow-md hover:border-primary border-gray-200"
      }`}
    >
      <div className="flex items-center justify-center gap-1 text-primary font-semibold mb-1">
        <Clock size={14} />
        {slot.time}
      </div>
      <div className="text-xs font-medium">
        {isBooked ? (
          <span className="text-green-700 flex items-center justify-center gap-1">
            <CalendarCheck size={14} /> {slot.patientName}
          </span>
        ) : (
          <span className="text-gray-500">Available</span>
        )}
      </div>
    </div>
  );
}
