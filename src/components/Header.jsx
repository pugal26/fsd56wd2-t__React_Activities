
export const Header = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-8">
                <nav className="nav mt-3 mx-3">
                    <h3 className="mt-1">Shopping Cart</h3>
                    <a className="nav-link text-body-secondary fs-5" href="#">Home</a>
                    <a className="nav-link disabled text-body-secondary fs-5" href="#">About</a>
                    <a className="nav-link dropdown-toggle disabled fs-5" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Shop</a>
                </nav>
            </div>
        </div>
    </div>
  )
}
