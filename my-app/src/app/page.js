import Header from "./components/Header";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center dark:bg-gray-800 bg-white min-h-screen">
      <Header />
      <div className="p-8">
        <h1 className="text-2xl font-bold dark:text-yellow-300 text-blue-700">
          Theme Test: This text should change color in dark mode!
        </h1>
      </div>
    </div>
  );
}
