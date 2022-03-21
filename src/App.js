import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goTo = (id) => {
    setIsMenuOpen(false);
    window.location.href = `#${id}`;
  };

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const reviews = [
    {
      name: "Dean Arnold",
      image: "dean.jpeg",
      company: "Australia",
      text: "Valeriy wrote a react app for me. He's very knowledgeable. I like how he made sure to understand the requirements before getting started. Great communication. It was a fast delivery. Quick turn around time. Excellent quality work. His code is clean and easy to understand.",
    },
    {
      name: "Mike Cunningham",
      image: "mike.jpeg",
      company: "Turn 5 Inc., United States",
      text: "Did a great job and provided the exact details requested in the project brief.",
    },
    {
      name: "Andrew Rotherham",
      image: "andrew.jpeg",
      company: "BORN THREADY, Australia",
      text: "Valeriy followed the brief easily with very little direction needed. Just goes to show this guy can follow directions and has firm grasp of data structures and what is needed for his craft. Looking forward to working with Valeriy again. Thanks Champo. Great Job.",
    },
    {
      name: "Danny G",
      image: "Danny.jpeg",
      company: "Sponsino, Germany",
      text: "Valeriy did a perfect work. He has done a free of charge sample within short time. The communication was perfect and also the result. I can recommend him to 100%.",
    },
    {
      name: "David Daniels",
      image: "david.jpeg",
      company: "Bronote, United States",
      text: "Great to work with. Understood the assignment and was flexible to complete changes.",
    },
    {
      name: "Ariel Aziernicki",
      image: "ariel.jpg",
      company: "Zageno, Germany",
      text: "Valeriy delivered an excellent job. He is a great developer and he was always available to provide all the support we needed. I totally recommend him.",
    },
    {
      name: "Jeff Friesen",
      image: "jeff.jpeg",
      company: "Radiant Labs, United States",
      text: "He was very quick and new his stuff. Looking for more projects to work with him on.",
    },
  ];

  const MobileMenu = () => (
    <div className="transition duration-1000 ease-in-out opacity-100">
      <div
        id="mobile_navigation_menu"
        className="w-full bg-gray-800 h-screen px-4"
      >
        <div id="mobile_nav_links" className="nav-list">
          <ul className="flex flex-col">
            <li
              className="border-b py-4 mobile_nav_link cursor-pointer"
              onClick={() => goTo("container-wrapper")}
            >
              <a>
                <p className="text-sm hover:text-primary text-white">Home</p>
              </a>
            </li>
            <li
              className="border-b py-4 mobile_nav_link cursor-pointer"
              onClick={() => goTo("about-wrapper")}
            >
              <a>
                <p className="text-sm hover:text-primary text-white">
                  About Me
                </p>
              </a>
            </li>
            <li
              className="border-b py-4 mobile_nav_link cursor-pointer"
              onClick={() => goTo("service-wrapper")}
            >
              <a>
                <p className="text-sm hover:text-primary text-white">
                  Services
                </p>
              </a>
            </li>
            <li
              className="border-b py-4 mobile_nav_link cursor-pointer"
              onClick={() => goTo("skills-wrapper")}
            >
              <a>
                <p className="text-sm hover:text-primary text-white">Skills</p>
              </a>
            </li>
            <li
              className="border-b py-4 mobile_nav_link cursor-pointer"
              onClick={() => goTo("works-wrapper")}
            >
              <a>
                <p className="text-sm hover:text-primary text-white">Work</p>
              </a>
            </li>
            <li
              className="border-b py-4 mobile_nav_link cursor-pointer"
              onClick={() => goTo("footer")}
            >
              <a>
                <p className="text-sm hover:text-primary text-white">Contact</p>
              </a>
            </li>
            <li className="mt-10 cursor-pointer">
              <a
                className="flex justify-center w-full items-center transition duration-400 ease-in-out text-white border bg-cyan-500 border-cyan-400 hover:bg-cyan-500 px-4 py-2 rounded"
                href="mailto:sid.gamer@gmail.com"
              >
                <p className="text-sm font-medium leading-6 ">
                  Start Your Project
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="transition duration-1000 ease-in-out opacity-100">
      <div>
        <div className="sticky top-0 z-40 bg-white">
          <div className="container mx-auto sm:px-6 lg:px-28 md:space-y-8">
            <div
              id="header-wrapper"
              className="sticky w-full max-w-8xl mx-auto flex-none flex justify-between items-center px-4 md:px-0"
            >
              <div className="logo-image cursor-pointer">
                <img
                  src="images/logo.svg"
                  alt="Valery Sid Logo Image"
                  className="w-20"
                />
              </div>
              <div className="navigation flex items-end">
                <div className="hidden xl:block">
                  <ul className="flex justify-between items-center">
                    <li
                      className="ml-10 cursor-pointer"
                      onClick={() => goTo("container-wrapper")}
                    >
                      <a>
                        <p className="transition duration-500 ease-in-out text-sm font-medium hover:text-primary text-secondary">
                          Home
                        </p>
                      </a>
                    </li>
                    <li
                      className="ml-10 cursor-pointer"
                      onClick={() => goTo("about-wrapper")}
                    >
                      <a>
                        <p className="transition duration-500 ease-in-out text-sm font-medium hover:text-primary text-secondary">
                          About Me
                        </p>
                      </a>
                    </li>
                    <li
                      className="ml-10 cursor-pointer"
                      onClick={() => goTo("service-wrapper")}
                    >
                      <a>
                        <p className="transition duration-500 ease-in-out text-sm font-medium hover:text-primary text-secondary">
                          Services
                        </p>
                      </a>
                    </li>
                    <li
                      className="ml-10 cursor-pointer"
                      onClick={() => goTo("skills-wrapper")}
                    >
                      <a>
                        <p className="transition duration-500 ease-in-out text-sm font-medium hover:text-primary text-secondary">
                          Skills
                        </p>
                      </a>
                    </li>
                    <li
                      className="ml-10 cursor-pointer"
                      onClick={() => goTo("works-wrapper")}
                    >
                      <a>
                        <p className="transition duration-500 ease-in-out text-sm font-medium hover:text-primary text-secondary">
                          Work
                        </p>
                      </a>
                    </li>
                    <li
                      className="ml-10 cursor-pointer"
                      onClick={() => goTo("footer")}
                    >
                      <a>
                        <p className="transition duration-500 ease-in-out text-sm font-medium hover:text-primary text-secondary">
                          Contact
                        </p>
                      </a>
                    </li>
                    <li className="ml-10 cursor-pointer">
                      <a
                        className="flex justify-center w-full items-center transition duration-500 ease-in-out bg-cyan-400 text-white border border-cyan-400 hover:bg-cyan-500 px-4 py-2 rounded"
                        href="mailto:sid.gamer@gmail.com"
                      >
                        <p className="text-sm font-medium leading-6 ">
                          Start Your Project
                        </p>
                        <span className="flex absolute h-3 w-3 top-2 right-0 -mr-1">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="xl:hidden block">
                  <div className="mobile-navigation">
                    <div className="mobile-navigation-button flex items-end">
                      <button
                        id="mobile_navigation"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                      >
                        {isMenuOpen ? (
                          <svg
                            className="fill-current text-primary h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 352 512"
                          >
                            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                          </svg>
                        ) : (
                          <svg
                            className="fill-current text-primary h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile menu here */}
          {isMenuOpen && <MobileMenu />}
        </div>
        <div className="container mx-auto sm:px-6 lg:px-28 md:space-y-8">
          <div
            id="container-wrapper"
            className="flex flex-col w-full mx-auto container px-4 md:px-0"
          >
            <div
              id="hero-wrapper"
              className="wrapper-fill flex flex-col md:flex-row w-full justify-between items-center mt-16 md:mt-28"
            >
              <div className="block md:hidden w-full">
                <div className="flex justify-center mb-8 md:mb-0">
                  <img
                    src="images/react_logo2.png"
                    alt="Engineer's Profissional Desk Setup"
                    className="w-auto"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h1 className="text-3xl md:text-5xl xl:text-6xl font-medium leading-tight md:leading-tight xl:leading-tight text-secondary mb-5">
                  Hello, I'm Valery.
                </h1>
                <h1 className="text-3xl md:text-5xl xl:text-6xl font-semibold leading-tight md:leading-tight xl:leading-tight text-secondary">
                  Senior React JS Web Developer.
                </h1>
                <p className="text-sm text-secondary leading-6 mt-5">
                  I can help you build the best web app project with responsive
                  design, necessary functionality, and user-friendliest design.
                </p>
              </div>
              <div className="hidden md:block w-1/3">
                <div className="flex justify-center">
                  <img
                    src="images/react_logo1.png"
                    alt="Engineer's Profissional Desk Setup"
                    className="w-auto h-auto"
                  />
                </div>
              </div>
            </div>
            <div
              id="about-wrapper"
              className="wrapper-fill flex flex-col md:flex-row w-full justify-between items-center mt-20 md:mt-36"
            >
              <div className="flex flex-col">
                <h3 className="text-2xl md:text-3xl xl:text-4xl font-medium text-secondary mb-8 border-l-4 border-yellow-400 pl-4">
                  About Me
                </h3>
                <div className="description w-full md:w-3/4">
                  <div className="flex flex-col md:flex-row">
                    <div className="profile-avatar md:mr-10">
                      <div className="border border-gray-300 rounded-md max-w-sm w-48 h-full mx-auto">
                        <div className="flex h-full">
                          <div className="flex">
                            <img
                              className="rounded-md object-cover object-center w-full h-full"
                              src="images/me.jpeg"
                              alt="Valery Sid Photo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mt-10 md:mt-0">
                      <p className="text-sm text-secondary leading-6 font-semibold">
                        Hi, I'm Valery Sid,
                      </p>
                      <p className="text-sm text-secondary leading-6 font-normal mt-5">
                        A software engineer working on web development with the
                        latest technology. Over the past years, I have been
                        working on numerous projects, programming, and testing
                        across a variety of platforms and languages. I have
                        passionate about how to use cutting-edge technologies to
                        solve a vast array of problems, from single page
                        applications to serverless static CDN.
                      </p>
                      <p className="text-sm text-secondary leading-6 mt-5">
                        More than ever before software defines how we experience
                        the world. Businesses in every industry are seeking
                        technology-driven innovation. A successful digital
                        transformation requires the right approach to send the
                        message to the expected audience and get the correct
                        response. That is why I’m using an engineering approach
                        for digital transformation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <ul className="flex justify-start items-center">
                    <li className="pr-4">
                      <a
                        href="https://www.upwork.com/freelancers/~01a488671704826d0e"
                        target="_blank"
                      >
                        <img
                          className="w-8 fill-current hover:fill-current hover:text-secondary transition duration-500 ease-in-out"
                          src="https://cdn2.iconfinder.com/data/icons/picons-social/57/79-upwork-512.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="px-4">
                      <a
                        href="https://www.linkedin.com/in/vsidorchuk-python/"
                        target="_blank"
                      >
                        <svg
                          className="fill-current hover:fill-current hover:text-secondary transition duration-500 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          width="26.993"
                          height="26.993"
                        >
                          <path
                            data-name="Icon ionic-logo-linkedin"
                            d="M24.834 0H2.306A2.2 2.2 0 000 2.1v22.58a2.375 2.375 0 002.306 2.313h22.521a2.255 2.255 0 002.166-2.313V2.1A2.07 2.07 0 0024.834 0zM8.367 22.5H4.5V10.477h3.867zm-1.8-13.852h-.028A1.985 1.985 0 014.5 6.574 2 2 0 016.588 4.5a1.992 1.992 0 012.067 2.074 2 2 0 01-2.088 2.074zM22.5 22.5h-3.867v-6.574c0-1.575-.562-2.651-1.962-2.651a2.116 2.116 0 00-1.983 1.425 2.6 2.6 0 00-.134.949V22.5h-3.867V10.477h3.867v1.673a3.915 3.915 0 013.488-1.95c2.538 0 4.458 1.669 4.458 5.276V22.5z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li className="pl-4">
                      <a href="https://github.com/briansid" target="_blank">
                        <svg
                          className="fill-current hover:fill-current hover:text-secondary transition duration-500 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          width="31.5"
                          height="31.5"
                        >
                          <path
                            data-name="Icon ionic-logo-github"
                            d="M15.75 0A15.957 15.957 0 000 16.15a16.12 16.12 0 0010.772 15.322 1.235 1.235 0 00.267.028.762.762 0 00.809-.8c0-.387-.014-1.4-.021-2.749a7.2 7.2 0 01-1.589.19 3.659 3.659 0 01-3.72-2.355 4.265 4.265 0 00-1.751-2.362c-1.371-.963-.007-.991.1-.991h.007a3.386 3.386 0 012.412 1.673 3.092 3.092 0 002.784 1.765 4.426 4.426 0 001.8-.422 3.489 3.489 0 011-2.159c-3.495-.408-7.172-1.793-7.172-7.98a6.321 6.321 0 011.617-4.331 5.945 5.945 0 01.155-4.275 1.311 1.311 0 01.352-.035c.57 0 1.856.218 3.98 1.695a14.64 14.64 0 017.889 0c2.123-1.477 3.41-1.695 3.98-1.695a1.311 1.311 0 01.352.035 5.945 5.945 0 01.155 4.275 6.347 6.347 0 011.617 4.331c0 6.2-3.684 7.566-7.193 7.966a3.916 3.916 0 011.069 2.988c0 2.159-.021 3.9-.021 4.43a.758.758 0 00.8.809 1.361 1.361 0 00.281-.028A16.117 16.117 0 0031.5 16.15 15.957 15.957 0 0015.75 0z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="illustration hidden md:block absolute right-0">
                <svg
                  className="fill-current w-64"
                  xmlns="http://www.w3.org/2000/svg"
                  width="657.759"
                  height="658.56"
                >
                  <g fill="#e0e0e0">
                    <path
                      data-name="Path 3"
                      d="M488.243 494.706c20.222-19.533 40.514-38.982 60.58-58.67 3.285-3.223 9.534-5.593 8.384-10.852-1.354-6.204-8.908-5.19-13.487-7.826-7.112-4.102-11.09 1.144-15.452 5.382-14.026 13.626-28.113 27.188-42.178 40.773-24.18 23.357-48 47.086-72.693 69.876-10.488 9.684-4.387 19.52.711 25.577 6.319 7.508 10.644-3.444 14.621-7.132 20.164-18.696 39.738-38.025 59.514-57.128z"
                    ></path>
                    <path
                      data-name="Path 4"
                      d="M150.874 123.906c8.84 17.196 19.468 18.791 35.516 13.006 43.54-15.7 87.463-30.557 131.942-43.271 18.51-5.29 23.748-14.37 20.424-32.06-62.34 20.682-124.556 41.32-187.882 62.325z"
                    ></path>
                    <path
                      data-name="Path 5"
                      d="M63.097 361.278c32.417 53.433 64.494 106.37 96.664 159.26 2.147 3.534 4.222 12.086 8.774 6.826 3.77-4.352 14.774-5.798 10.603-15.735-2.315-5.525-4.321-11.28-7.388-16.373-24.438-40.565-49.706-80.642-73.362-121.651-8.224-14.26-16.594-21.555-35.291-12.327z"
                    ></path>
                    <path
                      data-name="Path 7"
                      d="M551.213 199.554c-18.37 3.567-22.818 12.788-20.677 30.11q8.661 70.016 13.22 140.507c1.156 18.242 8.432 25.807 26.16 26.76-6.276-66.173-12.482-131.713-18.703-197.377z"
                    ></path>
                    <path
                      data-name="Path 8"
                      d="M190.9 547.393c66.485 8.61 131.491 17.028 196.636 25.46-.204-18.329-8.36-25.346-26.318-27.13q-69.93-6.954-139.404-18.163c-17.272-2.774-26.629 1.414-30.915 19.833z"
                    ></path>
                    <path
                      data-name="Path 9"
                      d="M129.392 144.676C106.399 206.705 83.494 268.5 60.448 330.668c18.26 3.179 27.248-2.87 32.977-20.138q21.586-65.056 47.455-128.65c6.865-16.799 4.637-27.494-11.488-37.204z"
                    ></path>
                    <path
                      data-name="Path 10"
                      d="M445.482 451.04c-16.274 15.72-32.863 31.13-48.697 47.279-8.932 9.104-18.708 12.417-31.289 10.71q-67.21-9.138-134.55-17.313c-13.948-1.666-23.314-7.923-30.484-20.056-22.947-38.822-46.65-77.197-70.019-115.77-6.033-9.958-7.245-20.041-2.964-31.42q24.793-65.888 48.543-132.165c3.878-10.759 10.923-16.88 21.624-20.332 44.084-14.212 88.133-28.548 132-43.411 11.425-3.87 21.707-3.13 31.445 3.23 38.77 25.323 77.19 51.188 116.195 76.15 11.017 7.054 15.55 16.28 16.662 28.552 4.094 45.034 8.179 90.074 12.807 135.054 1.372 13.325-2.333 23.432-12.318 32.487-16.76 15.18-32.685 31.288-48.955 47.005zm-15.552-16.296c15.386-14.862 30.57-29.947 46.267-44.479 5.865-5.43 8.224-10.846 7.37-19.048-4.368-41.919-8.168-83.894-12.056-125.86-.956-10.317-5.694-17.148-14.797-22.861-33.013-20.723-65.812-41.84-97.859-64.008-10.68-7.383-20.713-8.359-31.87-4.719-39.317 12.827-78.46 26.18-117.816 38.875-7.258 2.339-10.802 6.37-13.316 13.338-14.26 39.553-28.97 78.94-43.544 118.374-3.583 9.684-2.523 18.007 3.31 27.282 21.387 34.026 42.056 68.52 62.244 103.274 5.125 8.822 10.886 13.264 21.157 14.466q60.971 7.119 121.742 15.854c10.68 1.552 18.242-.199 25.837-8.258 13.82-14.665 28.822-28.214 43.33-42.23z"
                    ></path>
                    <path
                      data-name="Path 11"
                      d="M488.243 494.706c-19.779 19.106-39.354 38.432-59.514 57.128-3.977 3.689-8.302 14.64-14.621 7.133-5.098-6.057-11.198-15.893-.711-25.577 24.695-22.792 48.516-46.523 72.693-69.876 14.064-13.586 28.152-27.148 42.177-40.774 4.362-4.236 8.34-9.483 15.452-5.382 4.578 2.639 12.137 1.62 13.488 7.826 1.147 5.258-5.103 7.632-8.385 10.853-20.059 19.682-40.357 39.136-60.579 58.669z"
                    ></path>
                    <path
                      data-name="Path 12"
                      d="M150.874 123.906c63.326-21.004 125.54-41.642 187.88-62.324 3.325 17.69-1.913 26.769-20.423 32.06-44.477 12.712-88.408 27.575-131.941 43.27-16.048 5.785-26.672 4.194-35.516-13.006z"
                    ></path>
                    <path
                      data-name="Path 13"
                      d="M63.097 361.278c18.694-9.224 27.067-1.934 35.286 12.336 23.656 41.01 48.923 81.088 73.362 121.65 3.067 5.095 5.073 10.849 7.388 16.374 4.172 9.935-6.834 11.382-10.603 15.735-4.553 5.258-6.628-3.295-8.775-6.826-32.164-52.898-64.24-105.836-96.658-159.27z"
                    ></path>
                    <path
                      data-name="Path 15"
                      d="M551.213 199.554c6.22 65.664 12.427 131.204 18.697 197.379-17.725-.951-25.002-8.517-26.158-26.76q-4.457-70.406-13.218-140.511c-2.14-17.32 2.31-26.54 20.68-30.108z"
                    ></path>
                    <path
                      data-name="Path 16"
                      d="M190.9 547.393c4.285-18.42 13.642-22.607 30.913-19.831q69.388 11.155 139.405 18.162c17.957 1.785 26.113 8.802 26.317 27.13-65.141-8.435-130.15-16.85-196.636-25.46z"
                    ></path>
                    <path
                      data-name="Path 17"
                      d="M129.392 144.676c16.126 9.712 18.353 20.405 11.488 37.203q-25.917 63.448-47.455 128.65c-5.73 17.27-14.717 23.318-32.977 20.14 23.046-62.169 45.953-123.966 68.944-185.993z"
                    ></path>
                    <path
                      data-name="Path 6"
                      d="M535.383 173.465c-55.56-36.186-110.696-72.097-165.983-108.1-9.061 17.646-3.29 26.614 11.103 35.469 39.414 24.241 78.314 49.412 116.267 75.876 14.625 10.193 25.458 10.217 38.613-3.245z"
                    ></path>
                    <path
                      data-name="Path 14"
                      d="M535.383 173.465c-13.153 13.458-23.99 13.436-38.612 3.245-37.951-26.462-76.856-51.634-116.267-75.877-14.395-8.853-20.165-17.823-11.103-35.47 55.286 36.005 110.422 71.916 165.982 108.102z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div
              id="service-wrapper"
              className="wrapper-fill flex flex-col md:flex-row w-full justify-between items-center mt-20 md:mt-36"
            >
              <div className="flex flex-col">
                <h3 className="text-2xl md:text-3xl xl:text-4xl font-medium text-secondary mb-8 border-l-4 border-yellow-400 pl-4">
                  Services
                </h3>
                <div className="flex flex-col md:flex-row items-start">
                  <div className="service-description w-full md:w-2/3 sm:mr-8">
                    <p className="text-sm text-secondary leading-6 font-normal">
                      As the use of technology rises, your business’s digital
                      presence becomes even more important. The most significant
                      difficulty that companies face is keeping up with the
                      digital world. The ideal way is to keep developing
                      cutting-edge software that helps the company to retain a
                      strong development presence.
                    </p>
                    <p className="text-sm text-secondary leading-6 font-normal mt-5">
                      To assist you in your search for a partner, I’ve compiled
                      the list of the top services which I can provide to you to
                      keep your valuable business up to date. This is a
                      remarkable part of my engineering approach. For more
                      information please contact me.
                    </p>
                  </div>
                  <div className="service-list mt-5 md:mt-0 w-full md:w-1/3 flex justify-start md:justify-center">
                    <ul className="flex flex-col">
                      <li className="flex items-center mb-4">
                        <div className="icon mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                          >
                            <path
                              data-name="Icon awesome-bullseye"
                              d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm0 17.419A7.419 7.419 0 1117.419 10 7.415 7.415 0 0110 17.419zm0-12.582a5.161 5.161 0 105.161 5.161A5.161 5.161 0 0010 4.837zm0 7.742a2.581 2.581 0 112.581-2.581A2.584 2.584 0 0110 12.58z"
                              fill="#eb4d4b"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-sm text-secondary leading-6 font-normal">
                          React web app development
                        </p>
                      </li>
                      <li className="flex items-center mb-4">
                        <div className="icon mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                          >
                            <path
                              data-name="Icon awesome-bullseye"
                              d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm0 17.419A7.419 7.419 0 1117.419 10 7.415 7.415 0 0110 17.419zm0-12.582a5.161 5.161 0 105.161 5.161A5.161 5.161 0 0010 4.837zm0 7.742a2.581 2.581 0 112.581-2.581A2.584 2.584 0 0110 12.58z"
                              fill="#eb4d4b"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-sm text-secondary leading-6 font-normal">
                          Migration to React
                        </p>
                      </li>
                      <li className="flex items-center mb-4">
                        <div className="icon mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                          >
                            <path
                              data-name="Icon awesome-bullseye"
                              d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm0 17.419A7.419 7.419 0 1117.419 10 7.415 7.415 0 0110 17.419zm0-12.582a5.161 5.161 0 105.161 5.161A5.161 5.161 0 0010 4.837zm0 7.742a2.581 2.581 0 112.581-2.581A2.584 2.584 0 0110 12.58z"
                              fill="#eb4d4b"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-sm text-secondary leading-6 font-normal">
                          Backend development
                        </p>
                      </li>
                      <li className="flex items-center mb-4">
                        <div className="icon mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                          >
                            <path
                              data-name="Icon awesome-bullseye"
                              d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm0 17.419A7.419 7.419 0 1117.419 10 7.415 7.415 0 0110 17.419zm0-12.582a5.161 5.161 0 105.161 5.161A5.161 5.161 0 0010 4.837zm0 7.742a2.581 2.581 0 112.581-2.581A2.584 2.584 0 0110 12.58z"
                              fill="#eb4d4b"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-sm text-secondary leading-6 font-normal">
                          SPA development
                        </p>
                      </li>
                      <li className="flex items-center mb-4">
                        <div className="icon mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                          >
                            <path
                              data-name="Icon awesome-bullseye"
                              d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm0 17.419A7.419 7.419 0 1117.419 10 7.415 7.415 0 0110 17.419zm0-12.582a5.161 5.161 0 105.161 5.161A5.161 5.161 0 0010 4.837zm0 7.742a2.581 2.581 0 112.581-2.581A2.584 2.584 0 0110 12.58z"
                              fill="#eb4d4b"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-sm text-secondary leading-6 font-normal">
                          Ongoing support
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="skills-wrapper"
              className="wrapper-fill flex flex-col md:flex-row w-full justify-between items-center mt-20 md:mt-36"
            >
              <div className="flex flex-col">
                <h3 className="text-2xl md:text-3xl xl:text-4xl font-medium text-secondary mb-8 border-l-4 border-yellow-400 pl-4">
                  Skills
                </h3>
                <div className="flex flex-col md:flex-row items-start">
                  <div className="skills-description w-full md:w-2/4">
                    <p className="text-sm text-secondary leading-6 font-normal">
                      From the beginning of my career in software development
                      until the present, I've learned and gained a good
                      understanding of software engineering standards, the
                      relevance of reusability/scalability in large enterprise
                      programs, and the relevance of user experience in large
                      enterprise applications.
                    </p>
                  </div>
                  <div className="skills-list mt-9 md:mt-0 w-full md:w-2/4 flex justify-start md:justify-center">
                    <ul className="flex flex-wrap md:justify-end w-full md:pl-20">
                      <li className="flex flex-col justify-around items-center bg-gray-100 mb-2 mr-2 pt-1 pb-1 pl-4 pr-4 rounded hover:bg-gray-200 text-sm text-secondary transition duration-500 ease-in-out">
                        <img
                          className="w-10"
                          src="images/react-icon.svg"
                          alt=""
                        />
                        React.js
                      </li>
                      <li className="flex flex-col justify-around items-center bg-gray-100 mb-2 mr-2 pt-1 pb-1 pl-4 pr-4 rounded hover:bg-gray-200 text-sm text-secondary transition duration-500 ease-in-out">
                        <img
                          className="w-10"
                          src="images/Vue.js_Logo_2.svg"
                          alt=""
                        />
                        Vue.js
                      </li>
                      <li className="flex flex-col justify-around items-center bg-gray-100 mb-2 mr-2 pt-1 pb-1 pl-4 pr-4 rounded hover:bg-gray-200 text-sm text-secondary transition duration-500 ease-in-out">
                        <img
                          className="w-10"
                          src="images/nextjs-logo.svg"
                          alt=""
                        />
                        Next.js
                      </li>
                      <li className="flex flex-col justify-around items-center bg-gray-100 mb-2 mr-2 pt-1 pb-1 pl-4 pr-4 rounded hover:bg-gray-200 text-sm text-secondary transition duration-500 ease-in-out">
                        <img
                          className="w-10"
                          src="images/tailwind-logo.svg"
                          alt=""
                        />
                        Tailwind CSS
                      </li>
                      <li className="flex flex-col justify-around items-center bg-gray-100 mb-2 mr-2 pt-1 pb-1 pl-4 pr-4 rounded hover:bg-gray-200 text-sm text-secondary transition duration-500 ease-in-out">
                        <img
                          className="w-10"
                          src="images/material-ui-logo.svg"
                          alt=""
                        />
                        Material UI
                      </li>
                      <li className="flex flex-col justify-around items-center bg-gray-100 mb-2 mr-2 pt-1 pb-1 pl-4 pr-4 rounded hover:bg-gray-200 text-sm text-secondary transition duration-500 ease-in-out">
                        <img
                          className="w-10"
                          src="images/react-bootstrap-logo.jpeg"
                          alt=""
                        />
                        React Bootstrap
                      </li>
                      <li className="flex flex-col justify-around items-center bg-gray-100 mb-2 mr-2 pt-1 pb-1 pl-4 pr-4 rounded hover:bg-gray-200 text-sm text-secondary transition duration-500 ease-in-out">
                        <img
                          className="w-20"
                          src="images/Node.js_logo.svg"
                          alt=""
                        />
                        Express/Nest.js
                      </li>
                      <li className="flex flex-col justify-around items-center bg-gray-100 mb-2 mr-2 pt-1 pb-1 pl-4 pr-4 rounded hover:bg-gray-200 text-sm text-secondary transition duration-500 ease-in-out">
                        <img
                          className="w-20"
                          src="images/python-logo.png"
                          alt=""
                        />
                        Django/Flask/FastAPI
                      </li>
                      <li className="flex flex-col justify-around items-center bg-gray-100 mb-2 mr-2 pt-1 pb-1 pl-4 pr-4 rounded hover:bg-gray-200 text-sm text-secondary transition duration-500 ease-in-out">
                        <img
                          className="w-10"
                          src="images/HTML5_logo_and_wordmark.svg"
                          alt=""
                        />
                        HTML5
                      </li>
                      <li className="flex flex-col justify-around items-center bg-gray-100 mb-2 mr-2 pt-1 pb-1 pl-4 pr-4 rounded hover:bg-gray-200 text-sm text-secondary transition duration-500 ease-in-out">
                        <img
                          className="w-20"
                          src="images/Sass_Logo_Color.svg"
                          alt=""
                        />
                        CSS3/SCSS/SASS
                      </li>
                      <li className="flex flex-col justify-around items-center bg-gray-100 mb-2 mr-2 pt-1 pb-1 pl-4 pr-4 rounded hover:bg-gray-200 text-sm text-secondary transition duration-500 ease-in-out">
                        <img
                          className="w-20"
                          src="images/Jamstack_logo.svg"
                          alt=""
                        />
                        <span>Jamstack</span>
                      </li>
                      <li className="flex flex-col justify-around items-center bg-gray-100 mb-2 mr-2 pt-1 pb-1 pl-4 pr-4 rounded hover:bg-gray-200 text-sm text-secondary transition duration-500 ease-in-out">
                        <img
                          className="w-10"
                          src="images/gatsby-seeklogo.com.svg"
                          alt=""
                        />
                        Gatsby
                      </li>
                      <li className="flex flex-col justify-around items-center bg-gray-100 mb-2 mr-2 pt-1 pb-1 pl-4 pr-4 rounded hover:bg-gray-200 text-sm text-secondary transition duration-500 ease-in-out">
                        <img
                          className="w-10"
                          src="images/Strapi-logo.svg"
                          alt=""
                        />
                        Strapi
                      </li>
                      <li className="flex flex-col justify-around items-center bg-gray-100 mb-2 mr-2 pt-1 pb-1 pl-4 pr-4 rounded hover:bg-gray-200 text-sm text-secondary transition duration-500 ease-in-out">
                        <img
                          className="w-10"
                          src="images/Postgresql_elephant.svg"
                          alt=""
                        />
                        PostgreSQL
                      </li>
                      <li className="flex flex-col justify-around items-center bg-gray-100 mb-2 mr-2 pt-1 pb-1 pl-4 pr-4 rounded hover:bg-gray-200 text-sm text-secondary transition duration-500 ease-in-out">
                        <img
                          className="w-20"
                          src="images/MongoDB_Logo.svg"
                          alt=""
                        />
                        mongoDB
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="works-wrapper"
              className="wrapper-fill flex flex-col md:flex-row w-full md:justify-between md:items-center mt-20 md:mt-36"
            >
              <div className="flex flex-col">
                <h3 className="text-2xl md:text-3xl xl:text-4xl font-medium text-secondary mb-8 border-l-4 border-yellow-400 pl-4">
                  Testimonials
                </h3>
                <ul className="flex flex-wrap w-full">
                  {shuffle(reviews)
                    .slice(3)
                    .map((review, idx) => (
                      <li
                        key={idx}
                        className="md:flex mb-5 bg-slate-100 rounded-xl px-6 py-3 dark:bg-slate-800"
                      >
                        <img
                          className="w-24 h-24 md:mt-10 relative bottom-7 md:bottom-0 rounded-full mx-auto"
                          src={`images/${review.image}`}
                          alt=""
                          width="384"
                          height="512"
                        />
                        <div className="pt-6 md:p-8 pt-0 text-center space-y-4">
                          <blockquote>
                            <p className="text-lg italic">{`“${review.text}”`}</p>
                          </blockquote>
                          <figcaption className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                              {review.name}
                            </div>
                            <div className="text-slate-700 dark:text-slate-500">
                              {review.company}
                            </div>
                          </figcaption>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div id="footer" className="wrapper-fill bg-gray-100 mt-20 md:mt-36">
          <div className="container mx-auto sm:px-6 lg:px-28 space-y-8 p-1">
            <div className="footer-wrapper flex flex-col md:flex-row w-full justify-between items-center px-4 md:px-0 my-20 md:my-10">
              <div className="flex flex-col md:flex-row w-full">
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl md:text-3xl xl:text-4xl font-medium text-secondary mb-8">
                    Have an Idea ? Let’s Talk.
                  </h3>
                  <p className="text-sm text-secondary leading-6 font-normal">
                    I am always up for interesting ideas and projects. If you
                    want to chat about any of the projects I worked on, or have
                    an interesting project, feel free to get in touch!
                  </p>
                  <div className="email mt-8">
                    <a href="mailto:sid.gamer@gmail.com">
                      <p className="text-sm text-secondary leading-6 font-medium underline">
                        Contact me
                      </p>
                    </a>
                  </div>
                  <div className="copyright mt-20">
                    <p className="text-sm text-secondary leading-6 font-normal">
                      2022 © All Rights Reserved.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="flex md:justify-end items-end pt-10 md:pt-0">
                    <ul className="flex items-center">
                      <li className="pr-4">
                        <a
                          href="https://www.upwork.com/freelancers/~01a488671704826d0e"
                          target="_blank"
                        >
                          <img
                            className="w-8 fill-current hover:fill-current hover:text-secondary transition duration-500 ease-in-out"
                            src="https://cdn2.iconfinder.com/data/icons/picons-social/57/79-upwork-512.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li className="px-4">
                        <a
                          href="https://www.linkedin.com/in/vsidorchuk-python/"
                          target="_blank"
                        >
                          <svg
                            className="fill-current hover:fill-current hover:text-secondary transition duration-500 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            width="26.993"
                            height="26.993"
                          >
                            <path
                              data-name="Icon ionic-logo-linkedin"
                              d="M24.834 0H2.306A2.2 2.2 0 000 2.1v22.58a2.375 2.375 0 002.306 2.313h22.521a2.255 2.255 0 002.166-2.313V2.1A2.07 2.07 0 0024.834 0zM8.367 22.5H4.5V10.477h3.867zm-1.8-13.852h-.028A1.985 1.985 0 014.5 6.574 2 2 0 016.588 4.5a1.992 1.992 0 012.067 2.074 2 2 0 01-2.088 2.074zM22.5 22.5h-3.867v-6.574c0-1.575-.562-2.651-1.962-2.651a2.116 2.116 0 00-1.983 1.425 2.6 2.6 0 00-.134.949V22.5h-3.867V10.477h3.867v1.673a3.915 3.915 0 013.488-1.95c2.538 0 4.458 1.669 4.458 5.276V22.5z"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li className="pl-4">
                        <a href="https://github.com/briansid" target="_blank">
                          <svg
                            className="fill-current hover:fill-current hover:text-secondary transition duration-500 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            width="31.5"
                            height="31.5"
                          >
                            <path
                              data-name="Icon ionic-logo-github"
                              d="M15.75 0A15.957 15.957 0 000 16.15a16.12 16.12 0 0010.772 15.322 1.235 1.235 0 00.267.028.762.762 0 00.809-.8c0-.387-.014-1.4-.021-2.749a7.2 7.2 0 01-1.589.19 3.659 3.659 0 01-3.72-2.355 4.265 4.265 0 00-1.751-2.362c-1.371-.963-.007-.991.1-.991h.007a3.386 3.386 0 012.412 1.673 3.092 3.092 0 002.784 1.765 4.426 4.426 0 001.8-.422 3.489 3.489 0 011-2.159c-3.495-.408-7.172-1.793-7.172-7.98a6.321 6.321 0 011.617-4.331 5.945 5.945 0 01.155-4.275 1.311 1.311 0 01.352-.035c.57 0 1.856.218 3.98 1.695a14.64 14.64 0 017.889 0c2.123-1.477 3.41-1.695 3.98-1.695a1.311 1.311 0 01.352.035 5.945 5.945 0 01.155 4.275 6.347 6.347 0 011.617 4.331c0 6.2-3.684 7.566-7.193 7.966a3.916 3.916 0 011.069 2.988c0 2.159-.021 3.9-.021 4.43a.758.758 0 00.8.809 1.361 1.361 0 00.281-.028A16.117 16.117 0 0031.5 16.15 15.957 15.957 0 0015.75 0z"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
