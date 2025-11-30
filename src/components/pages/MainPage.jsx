import MainBlock from "../ui/MainBlock";
import Sidebar from "../ui/Sidebar";
import Footer from "../layout/Footer";

function MainPage() {
  return (
    <div className="page-grid">
      <MainBlock />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default MainPage;
