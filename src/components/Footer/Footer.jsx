import styles from './Footer.module.css';

export default function Footer(props) {
  return (
    <footer className={styles.footerComponent}>
      <div>
        <h1>Event Assembly</h1>
        <p>
          EventAssembly is an intuitive event management application designed to simplify event planning. 
          Made with ❤️
        </p>
      </div>
      <aside>
        <p id="footer-info">Copyright &copy; 2023 <span>Bryan Santos</span> All Rights Reserved</p>
        <hr />
      </aside>
      <div className={styles.personalInfo}>
        <div className={styles.connectWith}>Connect With Bryan</div>
        <div>
          <a href="https://www.linkedin.com/in/bryandevelops" target='_blank'>LinkedIn</a>
          &nbsp;|&nbsp;
          <a href="https://www.github.com/bryandevelops" target='_blank'>GitHub</a>
          &nbsp;|&nbsp;
          <a href="https://bryandevelops.github.io/Portfolio-Site" target='_blank'>Portfolio</a>
        </div>
      </div>
    </footer>
  );
}


{/* <footer className={styles.footerComponent}>
  <p>Made with ❤️</p>
  <p id="footer-info">Copyright &copy; 2023 <span>Bryan Santos</span> All Rights Reserved</p>
  <div>
    <a href="https://www.linkedin.com/in/bryandevelops" target='_blank'>LinkedIn</a>
    &nbsp;|&nbsp;
    <a href="https://www.github.com/bryandevelops" target='_blank'>GitHub</a>
    &nbsp;|&nbsp;
    <a href="https://bryandevelops.github.io/Portfolio-Site" target='_blank'>Portfolio</a>
  </div>
</footer> */}