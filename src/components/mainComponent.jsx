import '../assets/css/main.css';
import img from '../assets/img/bg-main.jpg';

export default function Main() {
	const mainStyle = {
		backgroundImage: 'url(https://iili.io/iOqfSV.jpg)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'auto',
	};
	return (
		<div style={mainStyle} className="mainHeader">
			<h1></h1>
		</div>
	);
}
