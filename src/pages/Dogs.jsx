import { useState } from "react";

export default function Dogs() {
  const [dogs, setDogs] = useState([]);

  const handleChange = (index, field, value) => {
    const updated = [...dogs];
    updated[index][field] = value;
    setDogs(updated);
  };

  const handleAddDog = () => {
    setDogs([
      ...dogs,
      {
        name: "",
        breed: "",
        weight: "",
        food: "",
        notes: "",
        image: null,
        vaccinationFile: null,
      },
    ]);
  };

  const handleImageUpload = (index, file) => {
    const updated = [...dogs];
    updated[index].image = URL.createObjectURL(file);
    setDogs(updated);
  };

  const handleVaccineUpload = (index, file) => {
    const updated = [...dogs];
    updated[index].vaccinationFile = file;
    setDogs(updated);
  };

  const handleSave = () => {
    console.log("Mock saving dog profiles:", dogs);
    alert("Dog profiles saved (mock only)!");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">🐕 Dog Profiles</h1>
        <div className="space-x-4">
          <button
            onClick={handleAddDog}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add New Dog
          </button>
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Save Profiles
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dogs.map((dog, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            {/* Dog Image Upload */}
            <div className="mb-4">
              {dog.image ? (
                <img
                  src={dog.image}
                  alt="Dog Profile"
                  className="w-32 h-32 object-cover rounded-full mb-2"
                />
              ) : (
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mb-2">
                  No Photo
                </div>
              )}
              <label className="block text-sm font-medium text-gray-700">
                Upload Dog Photo:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(index, e.target.files[0])}
                className="mt-1 block w-full text-sm file:mr-4 file:py-2 file:px-4 file:border file:rounded file:border-gray-300 file:bg-white file:text-blue-700 hover:file:bg-blue-50"
              />
            </div>

            {/* Dog Info Fields */}
            <label className="block mb-2">
              <strong>Name:</strong>
              <input
                type="text"
                value={dog.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
                className="block w-full mt-1 border px-2 py-1 rounded"
              />
            </label>
            <label className="block mb-2">
              <strong>Breed:</strong>
              <input
                type="text"
                value={dog.breed}
                onChange={(e) => handleChange(index, "breed", e.target.value)}
                className="block w-full mt-1 border px-2 py-1 rounded"
              />
            </label>
            <label className="block mb-2">
              <strong>Weight (lbs):</strong>
              <input
                type="number"
                value={dog.weight}
                onChange={(e) => handleChange(index, "weight", e.target.value)}
                className="block w-full mt-1 border px-2 py-1 rounded"
              />
            </label>
            <label className="block mb-2">
              <strong>Favorite Food:</strong>
              <input
                type="text"
                value={dog.food}
                onChange={(e) => handleChange(index, "food", e.target.value)}
                className="block w-full mt-1 border px-2 py-1 rounded"
              />
            </label>

            {/* Vaccination Upload */}
            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">
                Vaccination Record:
              </label>
              <input
                type="file"
                accept=".pdf,image/*"
                onChange={(e) => handleVaccineUpload(index, e.target.files[0])}
                className="mt-1 block w-full text-sm file:mr-4 file:py-2 file:px-4 file:border file:rounded file:border-gray-300 file:bg-white file:text-blue-700 hover:file:bg-blue-50"
              />
              {dog.vaccinationFile && (
                <p className="text-xs mt-1 text-gray-500">
                  Uploaded: {dog.vaccinationFile.name}
                </p>
              )}
            </div>

            <label className="block mb-2">
              <strong>Notes:</strong>
              <textarea
                value={dog.notes}
                onChange={(e) => handleChange(index, "notes", e.target.value)}
                className="block w-full mt-1 border px-2 py-1 rounded"
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
