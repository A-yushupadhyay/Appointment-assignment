"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import debounce from "lodash.debounce";

import { appointments as mockAppointments } from "@/utils/mockData";
import AppointmentFilters from "@/components/AppointmentFilters";
import { AppointmentFilterState } from "@/types";

export default function AllAppointmentsPage() {
  const [filters, setFilters] = useState<AppointmentFilterState>({
    date: "",
    department: "",
    agent: "",
    patientName: "",
    status: "",
  });

  const [filtered, setFiltered] = useState(mockAppointments);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const paginatedAppointments = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Debounced filtering logic to improve performance
  const debouncedFilter = useMemo(() => {
    return debounce((nextFilters: AppointmentFilterState) => {
      const result = mockAppointments.filter((appt) => {
        const matchesDate = nextFilters.date
          ? appt.date.includes(nextFilters.date)
          : true;
        const matchesDepartment = nextFilters.department
          ? appt.department.toLowerCase().includes(nextFilters.department.toLowerCase())
          : true;
        const matchesAgent = nextFilters.agent
          ? appt.agent.toLowerCase().includes(nextFilters.agent.toLowerCase())
          : true;
        const matchesPatient = nextFilters.patientName
          ? appt.patientName.toLowerCase().includes(nextFilters.patientName.toLowerCase())
          : true;
        const matchesStatus = nextFilters.status
          ? appt.status === nextFilters.status
          : true;

        return (
          matchesDate &&
          matchesDepartment &&
          matchesAgent &&
          matchesPatient &&
          matchesStatus
        );
      });

      setFiltered(result);
      setCurrentPage(1); // Reset pagination on filter
    }, 300);
  }, []);

  useEffect(() => {
    debouncedFilter(filters);
    return () => debouncedFilter.cancel();
  }, [filters, debouncedFilter]);

  const handleFilterChange = (
    field: keyof AppointmentFilterState,
    value: string
  ) => {
    setFilters((prev: AppointmentFilterState) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Top Bar */}
      <div className="sticky top-0 z-10 bg-gray-50 border-b shadow-sm px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-primary">All Appointments</h1>
          <Link
            href="/booking"
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
          >
            New Appointment
          </Link>
        </div>

        {/* Filters */}
        <AppointmentFilters filters={filters} onChange={handleFilterChange} />
      </div>

      {/* Appointment Table */}
      <div className="px-4 py-6 max-w-7xl mx-auto">
        {paginatedAppointments.length > 0 ? (
          <div className="overflow-x-auto rounded-lg shadow bg-white">
            <table className="min-w-full table-auto text-sm text-left">
              <thead className="bg-primary text-white text-xs uppercase">
                <tr>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Time</th>
                  <th className="px-6 py-3">Department</th>
                  <th className="px-6 py-3">Agent</th>
                  <th className="px-6 py-3">Patient</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedAppointments.map((appt) => (
                  <tr key={appt.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">{appt.date}</td>
                    <td className="px-6 py-4">{appt.time}</td>
                    <td className="px-6 py-4">{appt.department}</td>
                    <td className="px-6 py-4">{appt.agent}</td>
                    <td className="px-6 py-4">
                      {appt.status === "booked" ? appt.patientName : "-"}
                    </td>
                    <td className="px-6 py-4 capitalize">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          appt.status === "booked"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {appt.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">📭 No appointments found for selected filters.</p>
          </div>
        )}

        {/* Pagination Controls */}
        {filtered.length > itemsPerPage && (
          <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
            <span>
              Showing {(currentPage - 1) * itemsPerPage + 1}–
              {Math.min(currentPage * itemsPerPage, filtered.length)} of{" "}
              {filtered.length} bookings
            </span>
            <div className="space-x-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
