import Navbar from '../components/navbar';


function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to my portfolio</h1>
        <p className="text-lg mb-8 max-w-xl">
          I’m Mohamed, a Computer Engineering student passionate about building digital experiences.
        </p>
      </section>
    </div>
  );
}

export default Home;
