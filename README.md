# 🩺 Healthcare Appointment Booking System

A fully responsive and well-structured healthcare appointment system built with **Next.js**, **TypeScript**, and **Tailwind CSS**, featuring doctor schedules, appointments filtering, smart booking, and a dynamic popup booking modal.

See How it Look Like !

![Screenshot (382)](https://github.com/user-attachments/assets/c9a81784-7249-4bc2-a091-1f85dee2ffca)


![Screenshot (383)](https://github.com/user-attachments/assets/74aa5e26-fa96-40ea-aa62-382899ed8aa4)


![Screenshot (384)](https://github.com/user-attachments/assets/21366401-df36-4f19-a509-47b91613a2ae)




![Screenshot (385)](https://github.com/user-attachments/assets/421626aa-963e-46cf-8bbb-1e003215d6f2)




---

## 🚀 Features

- 📅 **Doctor Schedule**
  - View all doctors with name, department, and duty timings.
  - “Today On Duty” badge displayed dynamically.
  - Filter by name and department.
  - Responsive card-based grid layout.

- 📖 **All Appointments**
  - Table listing all appointments with:
    - Filters: date, department, agent, patient name, status.
    - Sticky header with filters and booking button.
    - Booked slots show patient name; unbooked remain blank.
  - Responsive and scrollable table layout.

- 🗓️ **Booking Page**
  - Grid of available slots grouped by doctor.
  - Clicking a slot opens a **popup modal**.
  - Modal includes:
    - Doctor details
    - Slot info
    - Patient info form (first name, last name, email)
    - Book & Cancel actions

- 🧩 **Reusable Components**
  - `DoctorCard`
  - `CalendarSlot`
  - `PopupModal`
  - `AppointmentFilters`
  - Fully typed using TypeScript interfaces (`IDoctor`, `IAppointment`, etc.)

- ⚡ **Optimizations**
  - Debounced filtering using `lodash.debounce`
  - Conditional rendering for performance
  - Clean state management with `useState`, `useEffect`, `useMemo`

- 📱 **Responsive Design**
  - Tailwind CSS-based grid system for all screen sizes
  - Mobile-friendly components and layouts

---

## 🛠️ Tech Stack

- **Next.js** (v14+)
- **TypeScript**
- **Tailwind CSS**
- **Lucide Icons**
- **Lodash.debounce** for optimized filtering

---

## 📁 Project Structure

```bash
📦 root
├── components
│   ├── AppointmentFilters.tsx
│   ├── CalendarSlot.tsx
│   ├── DoctorCard.tsx
│   ├── PopupModal.tsx
│   └── ...
├── pages
│   ├── appointments.tsx
│   ├── booking.tsx
│   ├── schedule.tsx
│   └── index.tsx
├── styles
│   └── globals.css (includes Open Sans + Tailwind)
├── utils
│   └── mockData.ts (dummy doctor + appointment data)
├── types
│   └── index.ts (TypeScript interfaces)
└── ...
```


📦 Getting Started
```
# Clone this repo
git clone https://github.com/your-username/healthcare-booking.git

# Install dependencies
npm install

# Run dev server
npm run dev
Then visit http://localhost:3000

```

🚀 Developer Tech Stack & Skills
Category	Technologies / Tools
Frontend	Next.js, React, TypeScript, Tailwind CSS
Backend	Node.js, Express.js
Database	MongoDB, Mongoose
AI Integration	OpenAI API, LangChain
Styling	Tailwind CSS, Open Sans, Responsive UI
Tools & Dev	Git, GitHub, VS Code, Postman
Others	REST API, ESM Modules, Debouncing, Modals


👨‍💻 Author
Ayush Upadhyay ||       
Full Stack + AI Developer | Next.js • Node.js • TypeScript • MongoDB • OpenAI • Python • Tailwind
