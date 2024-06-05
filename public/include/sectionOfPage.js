class FormRenderer {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
    }
/**
 * Login form
 * login form must be inclde user name password 
 * OR email and password
 */
    renderLoginForm() {
      const loginFormHtml = `
        <form>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Username" required>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" required>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Login</button>
        </form>
      `;
      this.container.innerHTML = loginFormHtml;
    }
  
    navigationBar() {
      const navbarfn = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Admin Panel</a>
  
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  
    <div class="nav-sidebar collapse" id="sidebarMenu">
      <!-- Add your navigation links here -->
      <ul class="list-unstyled">
        <li><a href="#dashboard" class="nav-link">Dashboard</a></li>
        <li><a href="#users" class="nav-link">Users</a></li>
        <li><a href="#settings" class="nav-link">Settings</a></li>
      </ul>
    </div>
      `;
      this.container.innerHTML = navbarfn;
    }
  
    renderContactForm() {
      const contactFormHtml = `
        <form>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Name" required>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" required>
          </div>
          <div class="form-group">
            <textarea class="form-control" rows="4" placeholder="Message" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Send</button>
        </form>
      `;
      this.container.innerHTML = contactFormHtml;
    }
  }
  
  export default FormRenderer;
  