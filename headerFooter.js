class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<section class="header" id="home">
  <nav class="navbar navbar-expand-lg bg-body-tertiary header">
      <div class="container">
        <div class="col-lg-6 col-6" id="home">
          <a href="/"><img src="images/logo.svg" alt="" class="logo"></a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="col-lg-6 col-6 nav-list">
          <div class="collapse navbar-collapse navbar" id="navbarNavDropdown">
              <ul class="navbar-nav menu-list">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="blog.html">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </nav>
</section>`
    }
}




class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Start Contact Section -->
<section class="contact">
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-3 col-md-3">
        <div class="top-contain">
          <i class="fa-solid fa-life-ring"></i>
          <a href="">Support<br>24x7x365</a>
        </div>
      </div>
      <div class="col-12 col-lg-3 col-md-3 ">
        <div class="top-contain">
          <i class="fa-solid fa-envelope"></i>
          <a href="">Email<br>lab@lab.com</a>
        </div>
      </div>
      <div class="col-12 col-lg-3 col-md-3">
        <div class="top-contain">
          <i class="fa-solid fa-phone"></i>
          <a href="">Phone<br>+0-342-222-1111</a>
        </div>
      </div>
      <div class="col-12 col-lg-3 col-md-3">
        <div class="top-contain">
          <i class="fa-solid fa-comments"></i>
          <a href="">Talk<br>Live Chat</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="top-footer">
  <div class="container py-5">
    <div class="row">
      <div class="col-12 col-lg-3 col-sm-3 text-center">
        <div class="heading" style="color: #f44336;">HOSTING</div>
        <ul class="footer-menu">
          <li class="menu-item "><a href="">Shared Hosting</a></li>
          <li class="menu-item"><a href="">Reseller Hosting</a></li>
          <li class="menu-item"><a href="">Cloud VPS</a></li>
          <li class="menu-item"><a href="">Dedicated Server</a></li>
          <li class="menu-item"><a href="">Domains</a></li>
        </ul>
      </div>

      <div class="col-12 col-lg-3 col-sm-3">
        <div class="heading" style="color: #f44336;">COMPANY</div>
        <ul class="footer-menu">
        <li class="menu-item"><a href="about.html">About Us</a></li>
          <li class="menu-item"><a href="contact.html">Contact Us</a></li>
          <li class="menu-item"><a href="Blog.html">Blog</a></li>
          <li class="menu-item"><a href="">Our Team</a></li>
          <li class="menu-item"><a href="">Eaq</a></li>
        </ul>
      </div>

      <div class="col-12 col-lg-3 col-sm-3">
        <div class="heading" style="color: #f44336;">SUPPORT</div>
        <ul class="footer-menu">
          <li class="menu-item"><a href="">Login</a></li>
          <li class="menu-item"><a href="">Get Satarted</a></li>
          <li class="menu-item"><a href="">Countdown</a></li>
          <li class="menu-item"><a href="">Knowledgebase</a></li>
          <li class="menu-item"><a href="">Free Migration</a></li>
        </ul>
      </div>

      <div class="col-12 col-lg-3 col-sm-3">
        <img src="images/logo-light.png" alt="" class="footer-logo">
        <div class="copyright">
          ©2023 HostLab - All rights reserved.
        </div>
        <div class="social">Stay Connected</div>
        <div class="footer-icon">
          <a href=""><i class="fa-brands fa-facebook-f"></i></a>
          <a href=""><i class="fa-brands fa-google-plus-g"></i></a>
          <a href=""><i class="fa-brands fa-twitter"></i></a>
          <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 col-sm-6">
          <ul class="footer-menu pt-3">
            <li class="menu-item">Legal</li>
            <li class="menu-item">Sitemap</li>
            <li class="menu-item">PrivacyPolicy</li>
          </ul>
        </div>
        <div class="col-12 col-lg-6 col-sm-6">
          <ul class="payment-list">
            <li>
              <p>Payment We Accept</p>
            </li>
            <li><i class="fa-brands fa-cc-paypal"></i></li>
            <li><i class="fa-brands fa-cc-visa"></i></li>
            <li><i class="fa-brands fa-cc-mastercard"></i></li>
            <li><i class="fa-solid fa-credit-card"></i></li>
            <li><i class="fa-brands fa-cc-discover"></i></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>`
    }
}


customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)