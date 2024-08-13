import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-800 text-gray-400">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
export default MainLayout;
