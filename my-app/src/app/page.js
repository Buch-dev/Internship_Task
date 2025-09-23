import Footer from "./components/Footer";
import Generate from "./components/Generate";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center dark:bg-gray-800 bg-white min-h-screen">
      <Header />
      <ImageSlider />
      <Generate />
      <Footer />
    </div>
  );
}
