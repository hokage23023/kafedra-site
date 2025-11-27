import MainInformation from "../ui/MainInformation";
import NavMenu from "../ui/NavMenu";
import Sidebar from "../ui/Sidebar";

function MainPage() {
  return (
    <div className="main-grid">
      <NavMenu />
      <Sidebar />
      <MainInformation />
    </div>
  );
}

export default MainPage;
