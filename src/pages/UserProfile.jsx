import { useParams } from "react-router-dom";
import { useState } from "react";

export default function UserProfile() {
  const { id } = useParams();

  // Mock user data
  const [user, setUser] = useState({
    name: "Alice Wu",
    email: "alice@gmail.com",
    rewards: 450,
    dogs: [
      { name: "Buddy", breed: "Golden Retriever", age: 3 },
      { name: "Luna", breed: "Shih Tzu", age: 2 },
    ],
  });

  const [editingUser, setEditingUser] = useState(false);
  const [editingDogs, setEditingDogs] = useState([]);

  const toggleDogEdit = (index) => {
    setEditingDogs((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const handleDogChange = (index, field, value) => {
    const updatedDogs = [...user.dogs];
    updatedDogs[index][field] = value;
    setUser({ ...user, dogs: updatedDogs });
  };

  const handleUserChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">User Profile: {user.name}</h1>

      {/* User Info Section */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-2">User Info</h2>
          <button
            onClick={() => setEditingUser(!editingUser)}
            className="text-blue-600 hover:underline text-sm"
          >
            {editingUser ? "Save" : "Edit"}
          </button>
        </div>
        <div className="mb-2">
          <strong>Email:</strong>{" "}
          {editingUser ? (
            <input
              type="email"
              value={user.email}
              onChange={(e) => handleUserChange("email", e.target.value)}
              className="ml-2 border px-2 py-1 rounded"
            />
          ) : (
            user.email
          )}
        </div>
        <div>
          <strong>Rewards:</strong>{" "}
          {editingUser ? (
            <input
              type="number"
              value={user.rewards}
              onChange={(e) => handleUserChange("rewards", Number(e.target.value))}
              className="ml-2 border px-2 py-1 rounded"
            />
          ) : (
            `${user.rewards} pts`
          )}
        </div>
      </div>

      {/* Dog Profiles Section */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Dog Profiles</h2>
        {user.dogs.map((dog, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{dog.name}</h3>
              <button
                onClick={() => toggleDogEdit(index)}
                className="text-blue-600 hover:underline text-sm"
              >
                {editingDogs.includes(index) ? "Save" : "Edit"}
              </button>
            </div>
            <div className="mt-2">
              <p>
                <strong>Name:</strong>{" "}
                {editingDogs.includes(index) ? (
                  <input
                    type="text"
                    value={dog.name}
                    onChange={(e) => handleDogChange(index, "name", e.target.value)}
                    className="ml-2 border px-2 py-1 rounded"
                  />
                ) : (
                  dog.name
                )}
              </p>
              <p>
                <strong>Breed:</strong>{" "}
                {editingDogs.includes(index) ? (
                  <input
                    type="text"
                    value={dog.breed}
                    onChange={(e) => handleDogChange(index, "breed", e.target.value)}
                    className="ml-2 border px-2 py-1 rounded"
                  />
                ) : (
                  dog.breed
                )}
              </p>
              <p>
                <strong>Age:</strong>{" "}
                {editingDogs.includes(index) ? (
                  <input
                    type="number"
                    value={dog.age}
                    onChange={(e) => handleDogChange(index, "age", Number(e.target.value))}
                    className="ml-2 border px-2 py-1 rounded"
                  />
                ) : (
                  dog.age
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
