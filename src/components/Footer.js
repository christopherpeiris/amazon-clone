import Image from "next/image";

function Footer() {
	return (
		<div>
			{/* back to top */}
			<div>
				<a href="#topMost">
					<div className="bg-amazon_blue-light p-3 text-center text-white cursor-pointer w-full text-xs">
						Back to top
					</div>
				</a>
			</div>
			<div className="bg-amazon_blue flex  p-3 flex-grow">
				<div className="flex flex-col flex-grow text-white p-3 ">
					<p>Get to Know Us</p>
					<a className="footerLinks m-1" href="#">
						Careers
					</a>
					<a className="footerLinks m-1" href="#">
						Blog
					</a>
					<a className="footerLinks m-1" href="#">
						About Amazon
					</a>
					<a className="footerLinks m-1" href="#">
						Investor Relations
					</a>
					<a className="footerLinks m-1" href="#">
						Amazon Devices
					</a>
					<a className="footerLinks m-1" href="#">
						Amazon Tours
					</a>
				</div>
				<div className="flex flex-col flex-grow text-white p-3 ">
					<p>Make Money with Us</p>
					<a className="footerLinks m-1" href="#">
						Sell products on Amazon
					</a>
					<a className="footerLinks m-1" href="#">
						Sell on Amazon Business
					</a>
					<a className="footerLinks m-1" href="#">
						Sell apps on Amazon
					</a>
					<a className="footerLinks m-1" href="#">
						Become an Affiliate
					</a>
					<a className="footerLinks m-1" href="#">
						Advertise Your Products
					</a>
					<a className="footerLinks m-1" href="#">
						Self-Publish with Us
					</a>
					<a className="footerLinks m-1" href="#">
						Host an Amazon Hub
					</a>
				</div>
				<div className="flex flex-col flex-grow text-white p-3 ">
					<p>Amazon Payment Products</p>
					<a className="footerLinks m-1" href="#">
						Amazon Business Card
					</a>
					<a className="footerLinks m-1" href="#">
						Shop with Points
					</a>
					<a className="footerLinks m-1" href="#">
						Reload Your Balance
					</a>
					<a className="footerLinks m-1" href="#">
						Amazon Currency Converter
					</a>
				</div>
				<div className="flex flex-col flex-grow text-white p-3 ">
					<p>Let Us Help You</p>
					<a className="footerLinks m-1" href="#">
						Let Us Help You Amazon and COVID-19
					</a>
					<a className="footerLinks m-1" href="#">
						Your Account
					</a>
					<a className="footerLinks m-1" href="#">
						Shipping Rates & Policies
					</a>
					<a className="footerLinks m-1" href="#">
						Returns & Replacements
					</a>
					<a className="footerLinks m-1" href="#">
						Manage Your Content and Devices
					</a>
					<a className="footerLinks m-1" href="#">
						Amazon Assistant
					</a>
					<a className="footerLinks m-1" href="#">
						Help
					</a>
				</div>
			</div>
			<div className="flex items-center flex-grow sm:flex-grow-0 bg-amazon_blue ">
				<Image
					src="https://links.papareact.com/f90"
					width={150}
					height={40}
					objectFit="contain"
					className="cursor-pointer "
				/>
			</div>
		</div>
	);
}

export default Footer;
