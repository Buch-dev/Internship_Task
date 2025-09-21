import Generate from "./components/Generate";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center dark:bg-gray-800 bg-white min-h-screen">
      <Header />
      <Generate />
    </div>
  );
}
