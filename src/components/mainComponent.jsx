import '../assets/css/main.css';
import { products } from './data/products';

export default function Main() {
	return (
		<div className="mainHeader">
			<div className="announcements">
				<div className="annouceTitle">The best prices. The Best Gear.</div>
				<div className="annouceShop">SHOP NOW</div>
			</div>
			{/*<div>
							{products.map((item, i) => {
								return (
									<div>
										<img src={item.img} alt={item.name} width="100%" />
										<h1>{item.name}</h1>
										<p>{item.price}</p>
										<p>{item.desc}</p>
									</div>
								);
							})}
						</div>*/}
		</div>
	);
}
