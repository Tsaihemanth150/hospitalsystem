


function Navbar(){
    return(
       
        <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="/">Hospital Management system (HMS)</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Customer
          </a>
          <ul class="dropdown-menu">
            
            <li><a class="dropdown-item" href="/Login">Login</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/Signup">Signup</a></li>
          </ul>
        </li>
            <li class="nav-item active">
              <a class="nav-link" href="/Faclity">Facility</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Contactus">Contact Us</a>
            </li>
            
          </ul>
         

        
</div>

<form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </nav>
    );
}


export default Navbar;