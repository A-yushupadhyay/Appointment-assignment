"use client";

import { useState } from "react";
import { doctors, appointments } from "@/utils/mockData";
import { IDoctor, IAppointment } from "@/types";
import CalendarSlot from "@/components/CalendarSlot";
import PopupModal from "@/components/PopupModal";

// Booking form type for modal input
export type BookingForm = {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
};

export default function BookingPage() {
  const [selectedSlot, setSelectedSlot] = useState<IAppointment | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<IDoctor | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [filterDept, setFilterDept] = useState("");

  // Extract unique departments
  const departments = Array.from(new Set(doctors.map((d) => d.department)));

  const handleSlotClick = (slot: IAppointment) => {
    const doc = doctors.find((d) => d.id === slot.doctorId)!;
    setSelectedSlot(slot);
    setSelectedDoctor(doc);
    setShowModal(true);
  };

  const handleBooking = (form: BookingForm) => {
    console.log("Booking confirmed:", form);
    setShowModal(false);
  };

  // Filter logic for doctors
  const filteredDoctors = filterDept
    ? doctors.filter((d) => d.department === filterDept)
    : doctors;

  // Summary statistics
  const totalSlots = appointments.length;
  const bookedSlots = appointments.filter((a) => a.patientName).length;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Book Appointment</h1>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Browse available slots and book appointments with our <strong>{doctors.length}</strong> top-rated doctors.
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white rounded-lg p-4 border shadow-sm">
            <strong>{doctors.length}</strong> Doctors Available
          </div>
          <div className="bg-white rounded-lg p-4 border shadow-sm">
            <strong>{totalSlots}</strong> Total Slots
          </div>
          <div className="bg-white rounded-lg p-4 border shadow-sm">
            <strong>{bookedSlots}</strong> Slots Already Booked
          </div>
        </div>

        {/* Department Filter */}
        <div className="flex justify-end">
          <select
            className="border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            value={filterDept}
            onChange={(e) => setFilterDept(e.target.value)}
          >
            <option value="">All Departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Doctor Cards */}
        <div className="space-y-10">
          {filteredDoctors.map((doc) => {
            const docSlots = appointments.filter((a) => a.doctorId === doc.id);

            return (
              <div key={doc.id} className="bg-white rounded-xl shadow p-6 border">
                <h2 className="text-xl font-semibold text-primary mb-4">
                  {doc.name}{" "}
                  <span className="text-gray-500 text-sm">({doc.department})</span>
                </h2>

                {docSlots.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {docSlots.map((slot) => (
                      <CalendarSlot
                        key={slot.id}
                        slot={slot}
                        onClick={() => handleSlotClick(slot)}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No slots available at this time.</p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Pop-up Booking Modal */}
      {showModal && selectedSlot && selectedDoctor && (
        <PopupModal
          doctor={selectedDoctor}
          slot={selectedSlot}
          onClose={() => setShowModal(false)}
          onBook={handleBooking}
        />
      )}
    </div>
  );
}
