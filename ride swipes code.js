import React, { useState } from "react";

export default function Home() {
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      make: "Ford",
      model: "Mustang",
      year: 2020,
      price: "$28,500",
      image: "https://source.unsplash.com/featured/?ford,mustang",
    },
    {
      id: 2,
      make: "Tesla",
      model: "Model 3",
      year: 2022,
      price: "$38,900",
      image: "https://source.unsplash.com/featured/?tesla,model3",
    },
  ]);

  const [query, setQuery] = useState("");

  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.make.toLowerCase().includes(query.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#e60023", textAlign: "center" }}>
        Ride Swipes
      </h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Find your perfect match on four wheels
      </p>

      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <input
          type="text"
          placeholder="Search by make or model..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "80%",
            maxWidth: "400px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {filteredVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            style={{
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <img
              src={vehicle.image}
              alt={`${vehicle.make} ${vehicle.model}`}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h2 style={{ color: "#e60023" }}>
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h2>
              <p style={{ fontWeight: "bold" }}>{vehicle.price}</p>
              <button
                style={{
                  marginTop: "1rem",
                  backgroundColor: "#e60023",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
