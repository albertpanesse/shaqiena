import React from 'react';

class Footer extends React.Component {
	state = {}

	componentDidMount() {
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) { // eslint-disable-line
	}
	
	render() {
		return (
			<footer className="pt-4 my-md-5 pt-md-5 border-top footer-wrapper">
				<div className="row">
					<div className="col-12 col-md">
						<img className="mb-2 logo" src={`${process.env.REACT_APP_IMAGE_URL}/logos/1.png`} alt="logo" />
						<small className="d-block mb-3 text-muted">© 2020 Shaqiena.</small>
					</div>
					<div className="col-6 col-md">
						<h5>Bantuan</h5>
						<ul className="list-unstyled text-small">
							<li><a className="text-muted" href="#">Pertanyaan</a></li>
							<li><a className="text-muted" href="#">Melacak Order</a></li>
							<li><a className="text-muted" href="#">Pengembalian</a></li>
						</ul>
					</div>
					<div className="col-6 col-md">
						<h5>Etalase</h5>
						<ul className="list-unstyled text-small">
							<li><a className="text-muted" href="#">Clothes</a></li>
							<li><a className="text-muted" href="#">Shoes</a></li>
							<li><a className="text-muted" href="#">Bags</a></li>
							<li><a className="text-muted" href="#">Accesories</a></li>
						</ul>
					</div>
					<div className="col-6 col-md">
						<h5>Ikuti Kami</h5>
						<ul className="list-unstyled text-small">
							<li><a className="text-muted" href="#">Instagram</a></li>
							<li><a className="text-muted" href="#">Facebook</a></li>
							<li><a className="text-muted" href="#">Twitter</a></li>
						</ul>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
