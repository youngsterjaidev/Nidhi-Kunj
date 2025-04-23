import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-white">
              Nidhi Kunj
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Experience the warmth of home in our cozy cottage. Where every
              stay becomes a memory of happiness.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-neutral-300 hover:text-secondary-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-300 hover:text-secondary-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-300 hover:text-secondary-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-300 hover:text-secondary-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-neutral-300 text-sm hover:text-secondary-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/rooms"
                  className="text-neutral-300 text-sm hover:text-secondary-600 transition-colors"
                >
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link
                  to="/amenities"
                  className="text-neutral-300 text-sm hover:text-secondary-600 transition-colors"
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-neutral-300 text-sm hover:text-secondary-600 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-neutral-300 text-sm hover:text-secondary-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white">
              Services
            </h4>
            <ul className="space-y-2">
              <li className="text-neutral-300 text-sm">Home-style Dining</li>
              <li className="text-neutral-300 text-sm">Garden Area</li>
              <li className="text-neutral-300 text-sm">Local Tours</li>
              <li className="text-neutral-300 text-sm">Concierge Service</li>
              <li className="text-neutral-300 text-sm">Event Hosting</li>
              <li className="text-neutral-300 text-sm">Airport Transfers</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  className="mt-1 mr-3 text-secondary-600 flex-shrink-0"
                  size={18}
                />
                <span className="text-neutral-300 text-sm">
                  Village P.O. Jagjitnagar .The Kasauli, Distt Solan (H.P)
                  (173225)
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  className="mr-3 text-secondary-600 flex-shrink-0"
                  size={18}
                />
                <span className="text-neutral-300 text-sm">
                  +91 98827 65551
                </span>
              </li>
              <li className="flex items-center">
                <Mail
                  className="mr-3 text-secondary-600 flex-shrink-0"
                  size={18}
                />
                <span className="text-neutral-300 text-sm">
                  info@nidhikunj.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary-950 border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-neutral-400">
              &copy; {new Date().getFullYear()} Nidhi Kunj Home Stay. All rights
              reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 hover:text-secondary-600 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 hover:text-secondary-600 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 hover:text-secondary-600 transition-colors"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
