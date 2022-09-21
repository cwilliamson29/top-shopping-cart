import '../assets/css/main.css';

export default function Main() {
	const mainStyle = {
		backgroundImage: 'url(https://iili.io/iOqfSV.jpg)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'auto',
	};
	return (
		<div className="mainHeader">
			<div style={mainStyle} className="announcements">
				<h1></h1>
			</div>
		</div>
	);
}
