import ThreeScene from '@/components/ThreeScene';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <ThreeScene />
      <h1 className="text-5xl font-bold mb-4">Welcome to My Software Development Company</h1>
      <p className="text-xl mb-8">We provide innovative solutions to help your business thrive.</p>
      <a href="/contact" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
        Get in Touch
      </a>
    </div>
  );
};

export default HomePage;