'use client' 
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
// import { Link } from "react-scroll";
import Link from 'next/link'
import Image from "next/image";
import Logo from "../public/menu.svg";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className=" shadow-sm fixed  bg-black text-white w-full z-10">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between md:justify-evenly w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-bold text-xl cursor-pointer">
									<span className="text-blue-600"><Link href="/" > blue</Link></span> <Link href="/">learn</Link>
								</h1>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4 ">
									<Link
										href="/"
										className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
									>
										Events
									</Link>
									<Link
										href="/about"
										className="cursor-pointer hover:bg-blue-600 text-white hover:text-white px-3 py-2 rounded-md text-sm  font-semibold"
									>
										About us
									</Link>


									<Link
										href="/hire-talent"
										className="cursor-pointer hover:bg-blue-600 text-white hover:text-white px-3 py-2 rounded-md text-sm  font-semibold"
									>
										Hire Talent
									</Link>

									<Link
										
										href="/find-work"
										className="cursor-pointer hover:bg-blue-600 text-white hover:text-white px-3 py-2 rounded-md text-sm  font-semibold"
									>
										Find Work
									</Link>

									<Link
										href="/"
										className="cursor-pointer bg-[#8695FA] text-white px-6 py-2 rounded-full text-black text-sm  hover:bg-black font-semibold"
									>
										Download app
									</Link>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden  min-h-screen" id="mobile-menu">
							<div
								ref={ref}
								className="bg-black px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link
									href="/"
									
									className="cursor-pointer hover:bg-blue-600 text-white hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
								>
									Events
								</Link>
								<Link
									href="/about"
									
									className="cursor-pointer hover:bg-blue-600 text-white hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
								>
									About us
								</Link>

								<Link
									href="/hire-talent"
									
									className="cursor-pointer hover:bg-blue-600 text-white hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
								>
									Hire Talent
								</Link>
								<Link
									href="/find-work"
									
									className="cursor-pointer hover:bg-blue-600 text-white hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
								>
									Find Work
								</Link>

								<Link
									href="/"
									
									className="cursor-pointer hover:bg-blue-600 text-white hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
								>
									Download app
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;