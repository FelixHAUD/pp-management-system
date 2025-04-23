export default function Rewards() {
  const currentPoints = 620; // Replace with dynamic value later

  return (
    <div className="p-6 min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">🎉 Your Rewards</h1>

      {/* Current Points */}
      <div className="bg-white p-6 rounded shadow mb-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">You have</h2>
        <p className="text-5xl text-green-600 font-bold mt-2 mb-4">{currentPoints} pts</p>
        <p className="text-gray-600 text-sm">Earn more points by using services. Redeem them for exclusive perks!</p>
      </div>

      {/* Redeemable Rewards */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">🎁 Redeem with Points</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { item: "Free Bath", cost: 500 },
            { item: "10% Off Next Grooming", cost: 300 },
            { item: "One Free Daycare Session", cost: 700 },
            { item: "Training Class Discount", cost: 400 },
            { item: "15% Off Boarding", cost: 600 },
            { item: "Free Nail Trim", cost: 250 },
          ].map((reward) => (
            <div key={reward.item} className="bg-white p-4 rounded shadow border text-center">
              <h3 className="font-bold text-blue-700">{reward.item}</h3>
              <p className="text-sm text-gray-600 mt-2">{reward.cost} pts</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Earn Points */}
      <section>
        <h2 className="text-xl font-semibold text-blue-600 mb-4">💰 Earn Points</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>+150 pts per Grooming Appointment</li>
          <li>+100 pts per Boarding Day</li>
          <li>+80 pts per Daycare Day</li>
          <li>+120 pts per Training Class</li>
          <li>+50 pts for referring a friend</li>
        </ul>
      </section>
    </div>
  );
}
