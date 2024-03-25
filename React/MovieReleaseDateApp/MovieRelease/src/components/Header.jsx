import Logo from "../assets/lickytongueLogo.png";
import styles from "../css/header.module.css";
function Header({
  searchStartDate,
  searchEndDate,
  setSearchStartDate,
  setSearchEndDate,
}) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={Logo} alt="Logo" className={styles.logo} />
          <h1>LickyMovie</h1>
        </div>
        <div className={styles.dateInputs}>
          <input
            type="date"
            onChange={(e) => setSearchStartDate(e.target.value)}
            value={searchStartDate}
          />
          <input
            type="date"
            onChange={(e) => setSearchEndDate(e.target.value)}
            value={searchEndDate}
          />
        </div>
      </header>
    </>
  );
}
export default Header;
