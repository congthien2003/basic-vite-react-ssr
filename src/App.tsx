import React from "react";
import "./App.css";

function App() {
	const technologies = [
		{
			name: ".NET Aspire",
			description:
				"Cloud-native application framework giúp xây dựng ứng dụng microservices hiệu quả",
			icon: "🚀",
			color: "#512BD4",
			features: [
				"Cloud-native development",
				"Microservices architecture",
				"Built-in observability",
			],
		},
		{
			name: ".NET",
			description:
				"Framework phát triển ứng dụng đa nền tảng mạnh mẽ từ Microsoft",
			icon: "⚡",
			color: "#512BD4",
			features: [
				"Cross-platform development",
				"High performance",
				"Rich ecosystem",
			],
		},
		{
			name: "Redis",
			description:
				"In-memory data structure store, database, cache và message broker",
			icon: "🔴",
			color: "#DC382D",
			features: [
				"In-memory caching",
				"Data structures",
				"Pub/Sub messaging",
			],
		},
		{
			name: "RabbitMQ",
			description: "Message broker mạnh mẽ cho kiến trúc microservices",
			icon: "🐰",
			color: "#FF6600",
			features: [
				"Message queuing",
				"Routing patterns",
				"Reliable delivery",
			],
		},
		{
			name: "MassTransit",
			description:
				"Message bus framework cho .NET với hỗ trợ nhiều transport",
			icon: "📨",
			color: "#00A1F1",
			features: [
				".NET message bus",
				"Multiple transports",
				"Saga patterns",
			],
		},
		{
			name: "DDD",
			description:
				"Domain-Driven Design - phương pháp thiết kế phần mềm tập trung vào business logic",
			icon: "🏗️",
			color: "#FF6B35",
			features: [
				"Domain modeling",
				"Bounded contexts",
				"Ubiquitous language",
			],
		},
	];

	return (
		<div className="app">
			<main className="main">
				<section className="hero">
					<div className="hero-content">
						<h1 className="hero-title">
							Khám phá các công nghệ nổi bật trong phát triển phần
							mềm hiện đại
						</h1>
						<p className="hero-subtitle">
							Từ .NET Aspire, .NET, Redis, RabbitMQ, MassTransit
							đến DDD - những nền tảng và phương pháp giúp xây
							dựng hệ thống mạnh mẽ, linh hoạt, dễ mở rộng.
						</p>
					</div>
				</section>

				<section className="tech-section">
					<h2 className="section-title">Công nghệ nổi bật</h2>
					<div className="tech-grid-full">
						{technologies.map((tech) => (
							<div key={tech.name} className="tech-card-full">
								<div className="tech-header">
									<span className="tech-icon-large">
										{tech.icon}
									</span>
									<h3 className="tech-title">{tech.name}</h3>
								</div>
								<p className="tech-description">
									{tech.description}
								</p>
								<ul className="tech-features">
									{tech.features.map((f) => (
										<li key={f}>{f}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>
			</main>

			<footer className="footer">
				<p>
					&copy; 2024 TechStack Hub. Được xây dựng với ❤️ và React +
					TypeScript
				</p>
			</footer>
		</div>
	);
}

export default App;
