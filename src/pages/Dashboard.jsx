export default function Dashboard() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-2">
          🎉 Welcome!
        </h2>
        <p className="text-gray-600">
          You are successfully logged in.
        </p>
      </div>
    </div>
  );
}