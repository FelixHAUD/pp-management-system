import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Mock dog profiles for selection
const mockUser = {
  name: "Alice Wu",
  email: "alice@gmail.com",
  dogs: [
    { name: "Buddy", id: 1 },
    { name: "Luna", id: 2 },
  ],
};

const [slots, setSlots] = useState({
  grooming: {
    "2025-04-28": ["10:00 AM", "11:30 AM", "2:00 PM"],
    "2025-04-29": ["9:00 AM", "1:00 PM"],
  },
  boarding: {
    "2025-04-28": ["Drop-off: Anytime", "Pick-up: 5:00 PM"],
    "2025-04-30": ["Drop-off: Anytime", "Pick-up: 3:00 PM"],
  },
  training: {
    "2025-04-29": ["12:00 PM", "4:00 PM"],
    "2025-05-01": ["11:00 AM", "1:00 PM"],
  },
});


export default function Reservations() {
  const [service, setService] = useState("grooming");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDog, setSelectedDog] = useState("");

  const dateKey = selectedDate.toISOString().split("T")[0];
  const availableSlots = slots[service]?.[dateKey] || [];


  const handleBookingSubmit = (e) => {
    e.preventDefault();
  
    // Remove the selected slot
    const updated = { ...slots };
    updated[service][dateKey] = updated[service][dateKey].filter(
      (s) => s !== selectedSlot
    );
    setSlots(updated);
  
    alert(`Booking Confirmed!
    Name: ${mockUser.name}
    Dog: ${selectedDog}
    Date: ${selectedDate.toDateString()}
    Time: ${selectedSlot}
    Service: ${service}`);
  
    setSelectedSlot(null);
    setSelectedDog("");
  };
  

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">🗓️ Book a Reservation</h1>

      {/* Service Filter */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-1">Choose Service</label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="grooming">Grooming</option>
          <option value="boarding">Boarding</option>
          <option value="training">Training</option>
        </select>
      </div>

      {/* Calendar & Slot Info */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div>
          <Calendar onChange={setSelectedDate} value={selectedDate} />
        </div>

        {/* Available Slots */}
        <div className="bg-white p-4 rounded shadow flex-1">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            Available Slots on {selectedDate.toDateString()}
          </h2>
          {availableSlots.length > 0 ? (
            <ul className="list-disc ml-5">
              {availableSlots.map((slot, i) => (
                <li
                  key={i}
                  className="mb-1 text-blue-600 cursor-pointer hover:underline"
                  onClick={() => setSelectedSlot(slot)}
                >
                  {slot}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No available slots for this day.</p>
          )}
        </div>
      </div>

      {/* Booking Form */}
      {selectedSlot && (
        <div className="mt-10 bg-white p-6 rounded shadow max-w-xl">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">📋 Complete Your Booking</h2>
          <form onSubmit={handleBookingSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                value={mockUser.name}
                readOnly
                className="w-full px-3 py-2 border rounded bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value={mockUser.email}
                readOnly
                className="w-full px-3 py-2 border rounded bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Dog Profile</label>
              <select
                value={selectedDog}
                onChange={(e) => setSelectedDog(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">Select a dog</option>
                {mockUser.dogs.map((dog) => (
                  <option key={dog.id} value={dog.name}>
                    {dog.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Confirm Booking for {selectedSlot}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
