import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import React from "react";


import { BsLinkedin, BsGithub } from "react-icons/bs";


export default function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-400">
      <div className="w-full mx-auto max-w-7xl">
        <div className="grid justify-between w-full sm:flex sm:justify-between md:flex md:grid-cols-1">


          {/* for logo */}
          <div className="mt-5">
            <Link
              to="/"
              className="self-center text-lg font-semibold whitespace-nowrap sm:text-xl dark:text-white"
            >
              <span className="px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                DailyPen
              </span>
            </Link>
          </div>

          {/* for columns */}
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                
                <div>                
                    <Footer.Title title="About" />
                    <Footer.LinkGroup col>
                        <Footer.Link
                            href = 'https://github.com/Yash-codeAndDev'
                            target='_blank'
                            rel="noopener noreferrer"
                        />
                        DailyPen
                    </Footer.LinkGroup>
                </div>

                <div>                
                    <Footer.Title title="Follow Us" />
                    <Footer.LinkGroup col>
                        <Footer.Link
                            href = 'https://github.com/Yash-codeAndDev'
                            target='_blank'
                            rel="noopener noreferrer"
                        />
                        Github
                        <Footer.Link
                            href = 'https://github.com/Yash-codeAndDev'
                            target='_blank'
                            rel="noopener noreferrer"
                        />
                        Linkdin
                    </Footer.LinkGroup>
                </div>

                <div>                
                    <Footer.Title title="Legal" />
                    <Footer.LinkGroup col>
                        <Footer.Link
                            href = '#'
                            target='_blank'
                            rel="noopener noreferrer"
                        />
                        Privacy Policy
                        <Footer.Link
                            href = '#'
                            target='_blank'
                            rel="noopener noreferrer"
                        />
                        Terms &amp; Condition
                    </Footer.LinkGroup>
                </div>
            </div>

        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="yash-codeAndDev™" year={new Date().getFullYear()} />
          <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
            
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
