import { Link } from "react-router-dom";
import { Appbar } from "../components/Appbar";

const Home = () => {
	return (
		<div>
			<Appbar />
			<div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
				{/* Hero Section */}
				<div className="bg-gray-50 py-16">
					<div className="max-w-4xl mx-auto text-center px-4">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Ready to start your journey?
						</h2>
						<p className="text-xl text-gray-600 mb-8">
							Join millions of readers and writers sharing their stories on
							Medium.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link to="/signup">
								<button className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
									Get started
								</button>
							</Link>
							<Link to="/signin">
								<button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
									Sign in
								</button>
							</Link>
						</div>
					</div>
				</div>

				{/* Features Section */}
				<div className="max-w-6xl mx-auto px-4 py-16">
					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center p-6">
							<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-6 h-6 text-green-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-2">Write your story</h3>
							<p className="text-gray-600">
								Share your thoughts and ideas with the world through engaging
								blog posts.
							</p>
						</div>
						<div className="text-center p-6">
							<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-6 h-6 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 6.044l8.962 3.58-8.962 3.569L3.038 9.624 12 6.044z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 13l8.962 3.569L21 13"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 18l8.962 3.569L21 18"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-2">Discover stories</h3>
							<p className="text-gray-600">
								Explore thousands of stories from writers around the globe on
								any topic.
							</p>
						</div>
						<div className="text-center p-6">
							<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-6 h-6 text-purple-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-2">Join the community</h3>
							<p className="text-gray-600">
								Connect with readers and writers who share your interests and
								passions.
							</p>
						</div>
					</div>
				</div>

				{/* CTA Section */}

				{/* Footer */}
				<footer className="bg-white border-t border-gray-200 py-8">
					<div className="max-w-6xl mx-auto px-4">
						<div className="text-center text-gray-600">
							<p>
								&copy; 2025 Medium Clone. Made with ❤️ for writers and readers.
							</p>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Home;
