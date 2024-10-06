import rafael from '../assets/images/rafael.jpeg';

function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col md:flex-row items-center p-4 justify-around space-y-6 md:space-y-0 md:space-x-6">
      <h1 className="text-white text-3xl w-full md:w-[750px] h-auto text-center md:text-left">
        Hello, I'm Rafael Viana, a programming student and mathematics teacher. 
        I'm passionate about developing innovative solutions and sharing knowledge 
        to help others grow.
      </h1>
      <img 
        src={rafael} 
        alt="foto rafael"
        className="rounded-full w-[300px] h-auto object-cover md:w-[385px] md:h-[563px] mt-4 md:mt-0"
      />
    </div>
  );
}

export default Home;

