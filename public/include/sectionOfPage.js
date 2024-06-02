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
  
    renderRegistrationForm() {
      const registrationFormHtml = `
        <form>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Username" required>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" required>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" required>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Register</button>
        </form>
      `;
      this.container.innerHTML = registrationFormHtml;
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
  