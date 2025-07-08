"use client";

import { useState } from "react";
import DoctorCard from "@/components/DoctorCard";
import { doctors as mockDoctors, appointments } from "@/utils/mockData";
import { User, Stethoscope } from "lucide-react";

export default function SchedulePage() {
  const [search, setSearch] = useState("");

  const filteredDoctors = mockDoctors.filter((doc) =>
    `${doc.name} ${doc.department}`.toLowerCase().includes(search.toLowerCase())
  );

  const totalDepartments = Array.from(
    new Set(mockDoctors.map((d) => d.department))
  ).length;

  const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

  // Determine which doctors are on duty today
  const doctorOnDutyToday = new Set(
    appointments
      .filter((slot) => slot.date === today)
      .map((slot) => slot.doctorId)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-primary flex items-center justify-center gap-2">
            <Stethoscope className="w-8 h-8" />
            Doctor Duty Schedule
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            View and manage your doctors availability. You can filter by name or department to find who’s on duty today.
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white rounded-lg p-4 border shadow-sm flex items-center gap-3">
            <User className="text-primary w-5 h-5" />
            <span>
              <strong>{mockDoctors.length}</strong> Total Doctors
            </span>
          </div>
          <div className="bg-white rounded-lg p-4 border shadow-sm flex items-center gap-3">
            <Stethoscope className="text-primary w-5 h-5" />
            <span>
              <strong>{totalDepartments}</strong> Departments
            </span>
          </div>
          <div className="bg-white rounded-lg p-4 border shadow-sm flex items-center gap-3">
            <span className="text-primary font-bold">🩺</span>
            <span>Filtered: <strong>{filteredDoctors.length}</strong></span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name or department..."
            className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Doctor Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doc) => (
              <div key={doc.id} className="relative">
                {/* ✅ DoctorCard */}
                <DoctorCard doctor={doc} />

                {/* ✅ Today On Duty Badge */}
                {doctorOnDutyToday.has(doc.id) && (
                  <span className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded shadow-sm">
                    Today On Duty
                  </span>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-sm">No doctors found for your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}
