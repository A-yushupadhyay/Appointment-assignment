// components/PopupModal.tsx
import { IDoctor, IAppointment } from "@/types";
import { useState } from "react";
import { X } from "lucide-react";

interface BookingForm {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
}

type Props = {
  doctor: IDoctor;
  slot: IAppointment;
  onClose: () => void;
  onBook: (form: BookingForm) => void;
};

export default function PopupModal({
  doctor,
  slot,
  onClose,
  onBook,
}: Props) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: slot.date,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-lg animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-primary mb-4">
          Book Appointment
        </h2>

        {/* Doctor Info */}
        <div className="text-sm mb-4 text-gray-700 space-y-1">
          <div>
            <strong>Doctor:</strong> {doctor.name} ({doctor.department})
          </div>
          <div>
            <strong>Time:</strong> {slot.time}
          </div>
          <div className="flex items-center gap-2">
            <strong>Date:</strong>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="border px-2 py-1 rounded text-sm"
            />
          </div>
        </div>

        {/* Patient Input Fields */}
        <div className="space-y-3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-sm"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-sm"
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={() => onBook(form)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow"
          >
            Book Appointment
          </button>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
