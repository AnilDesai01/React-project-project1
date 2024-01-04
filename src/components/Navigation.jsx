const Navigation = () => {

    return (
        <nav className="container">
        <div className="logo">
          <img src="/images/nike-logo.png" alt="nike-log"width={100} height={100} />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>  
      );
}


export default Navigation;