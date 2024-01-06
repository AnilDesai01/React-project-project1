import styles from "./Navigation.module.css"

const Navigation = () => {

  console.log(styles)
  return (
    <nav className= {`${styles.navigation} container`}>
      <div className="logo">
        <img src="/images/phone.png" alt="phone logo" height={60} width={80} />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
