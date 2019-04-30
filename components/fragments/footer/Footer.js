import './Footer.scss';

function Footer() {
  return (
    <footer className="page-footer d-flex justify-content-between">
      <div/>
      <div className="my-auto" style={{marginRight: '-182px'}}>
        <img src="/static/img/searchLogo.png" alt="logo" height={60}/>
      </div>
      <div className="my-auto">
        <a href="mailto:face@gmail.com">Contact: face@gmail.com</a>
      </div>
    </footer>
  )
}

export default Footer;