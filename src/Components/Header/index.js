import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <div className="header-content flex flex-c text-center text-white">
          <h3 className="header-title text-capitalize flex">
            <ImportContactsIcon /> BookWorm
          </h3>
          <SearchBar />
        </div>
      </header>
    </div>
  );
};

export default Header;
