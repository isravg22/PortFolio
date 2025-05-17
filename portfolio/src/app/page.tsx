
import Footer from "./Components/Footer/page";
import Header from "./Components/Header/page";
import Main from "./Components/Main/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-200 text-gray-800 font-sans">
      <Header />      
      <Main />
      <Footer />
    </div>
  );
}
