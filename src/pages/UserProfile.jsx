import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams();

  // Later: fetch user info with the id
  const mockUser = {
    name: "Alice Wu",
    email: "alice@gmail.com",
    rewards: 450,
    dogs: [
      { name: "Buddy", breed: "Golden Retriever", age: 3 },
      { name: "Luna", breed: "Shih Tzu", age: 2 },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">User Profile: {mockUser.name}</h1>

      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">User Info</h2>
        <p><strong>Email:</strong> {mockUser.email}</p>
        <p><strong>Rewards:</strong> {mockUser.rewards} pts</p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Dog Profiles</h2>
        {mockUser.dogs.map((dog, index) => (
          <div key={index} className="mb-3 border-b pb-2">
            <p><strong>Name:</strong> {dog.name}</p>
            <p><strong>Breed:</strong> {dog.breed}</p>
            <p><strong>Age:</strong> {dog.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
