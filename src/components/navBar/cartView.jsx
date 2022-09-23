import React, { useState } from 'react';
import styled from 'styled-components';

const SideBarNav = styled.div`
	background: grey;
	width: ${(props) => props.size};
	height: 100vh;
	display: block;
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
			<SideBarNav cartView={cartView} className="aria-expanded" size={size}>
				<h1 onClick={() => setCartView(!cartView)}>X</h1>
				<p>asdf</p>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
				<h1>asdf</h1>
			</SideBarNav>
		</div>
	);
}
