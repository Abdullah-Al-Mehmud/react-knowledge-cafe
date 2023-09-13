import Profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="lg:mx-40 md:mx-10 mx-14 flex justify-between items-center py-5 gap-11 border-b-2">
      <h1 className="text-3xl">Knowledge Cafe</h1>
      <img src={Profile} alt="" />
    </header>
  );
};

export default Header;
