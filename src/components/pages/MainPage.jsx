import MainInformation from "../ui/MainInformation";
import Sidebar from "../ui/Sidebar";
import Footer from "../layout/Footer";

function MainPage() {
  return (
    <div className="main-grid">
      <MainInformation />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default MainPage;
