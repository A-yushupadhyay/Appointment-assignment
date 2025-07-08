"use client";

import Link from "next/link";
import { CalendarCheck, Stethoscope, LayoutDashboard } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 md:px-12 flex flex-col items-center">
      <div className="max-w-7xl w-full space-y-12 pb-20">

        {/* Top Intro Section */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Healthcare Appointment System
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Manage doctor schedules, view appointments, and book slots — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/schedule" className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-teal-700 transition">
              View Doctor Schedule
            </Link>
            <Link href="/appointments" className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-teal-700 transition">
              View Appointments
            </Link>
            <Link href="/booking" className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-teal-700 transition">
              Book Appointment
            </Link>
          </div>
        </section>

        {/* What You Can Do Section */}
        <section className="text-center mt-20"> {/* ✅ ADDED SPACING */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">What You Can Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <CalendarCheck className="text-primary w-6 h-6 mx-auto mb-2" />
              <h3 className="font-semibold text-primary">Smart Booking</h3>
              <p className="text-sm text-gray-600">Easily view and book available slots across doctors.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <Stethoscope className="text-primary w-6 h-6 mx-auto mb-2" />
              <h3 className="font-semibold text-primary">Doctor Schedules</h3>
              <p className="text-sm text-gray-600">Filter doctors by department, duty status, and timing.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <LayoutDashboard className="text-primary w-6 h-6 mx-auto mb-2" />
              <h3 className="font-semibold text-primary">Responsive UI</h3>
              <p className="text-sm text-gray-600">Tailwind CSS makes it smooth across all devices.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <span className="text-primary text-2xl">🧠</span>
              <h3 className="font-semibold text-primary mt-1">Easy UX</h3>
              <p className="text-sm text-gray-600">Simple, fast, and intuitive booking interface.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
