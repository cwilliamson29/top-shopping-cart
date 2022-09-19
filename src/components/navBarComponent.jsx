import '../assets/css/nav.css';
import logo from '../assets/img/logo.png';

export default function NavBarRender() {
	return (
		<div className="appNav">
			<div className="navAlertBar">Always free shipping on orders over $37, see details</div>
			<div className="container">
				<img src={logo} alt="Logo" />
			</div>
		</div>
	);
}
