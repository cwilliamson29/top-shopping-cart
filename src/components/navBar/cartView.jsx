import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillCloseSquare } from 'react-icons/ai';

const SideBarNav = styled.div`
	background: #d3d3d3;
	width: ${(props) => props.size};
	height: 100vh;
	display: block;
	padding: 15px;
	justify-content: center;
	position: fixed;
	top: 0;
	right: ${({ cartView }) => (cartView ? '0' : '-100%')};
	z-index: 999;
	transition: all 0.5s ease-in-out;
	overflow-y: scroll;
`;
const Overlay = styled.div`
	right: ${({ cartView }) => (cartView ? '0' : '-100%')};
	position: fixed;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.7);
	z-index: 0;
	transition: all 0.5s ease-in-out;
`;

export default function CartViewRender({ cartView, setCartView, size }) {
	return (
		<div style={{ position: 'fixed' }}>
			<Overlay cartView={cartView} onClick={() => setCartView(!cartView)} />
			<SideBarNav cartView={cartView} size={size}>
				<h1 onClick={() => setCartView(!cartView)}>
					<AiFillCloseSquare size="1em" />
				</h1>

				<div className="mobiCartMain">
					<div className="mobiCartView">
						<div className="mobiCartViewLeft">My Cart</div>
						<div className="mobiCartViewRight">
							<span>View Wishlist</span>
						</div>
					</div>
					<div className="checkout">CHECKOUT</div>
					<div className="mobiCartProducts">asdf</div>
				</div>
			</SideBarNav>
		</div>
	);
}
