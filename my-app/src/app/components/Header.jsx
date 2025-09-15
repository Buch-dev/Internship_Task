"use client";

import Link from "next/link";
import React from "react";
import {
  FaHome,
  FaImages,
  FaVideo,
  FaMagic,
  FaEdit,
  FaRegGrinTongueWink,
  FaFolder,
  FaChevronDown,
  FaHeadset,
  FaBell,
} from "react-icons/fa";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";

const navIcons = [
  { icon: <FaHome />, label: "Home" },
  { icon: <FaImages />, label: "Gallery" },
  { icon: <FaVideo />, label: "Video" },
  { icon: <FaMagic />, label: "Enhancer" },
  { icon: <FaEdit />, label: "Edit" },
  { icon: <FaRegGrinTongueWink />, label: "Video Lipsync" },
  { icon: <FaFolder />, label: "Motion Transfer" },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`
        flex items-center justify-between w-full p-4 text-gray-900
        dark:bg-gray-900 dark:text-gray-100
        transition-colors duration-300
      `}
    >
      <div className="logo">
        <div className="flex items-center justify-between">
          <label htmlFor="logo">K</label>
          <div className="profile flex items-center gap-2">
            <div
              className="radiant-circle-purple-blue"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at 30% 30%, #a78bfa, #6366f1, #06b6d4)",
                boxShadow: "0 0 8px 2px #a78bfa88",
              }}
            ></div>
            <p className="text-gray-700 dark:text-gray-200 text-sm">
              benevolentrimblebat
            </p>
            <FaChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-300" />
          </div>
        </div>
      </div>
      {/* Nav */}
      <nav className="bg-gray-100 dark:bg-gray-800 rounded-2xl">
        <ul className="flex space-x-4 p-4">
          {navIcons.map((item) => (
            <li key={item.label}>
              <Link
                href="#"
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white flex flex-col items-center justify-center"
                title={item.label}
              >
                <span className="text-xl">{item.icon}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* alert, support & themeswitcher */}
      <div className="flex items-center gap-4">
        <Link
          href={"#"}
          className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center text-sm"
        >
          <FaImages className="inline mr-1" />
          Gallery
        </Link>
        <Link
          href={"#"}
          className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center text-sm"
        >
          <FaHeadset className="inline mr-1" />
          Support
        </Link>
        <Link
          href={"#"}
          className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center"
        >
          <FaBell />
        </Link>
        {/* themeswitcher */}
        <button
          onClick={toggleTheme}
          className="text-gray-700 dark:text-yellow-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center cursor-pointer"
          aria-label="Toggle theme"
          type="button"
        >
          {theme === "light" ? <IoSunny /> : <IoMoon />}
        </button>
      </div>
    </div>
  );
};

export default Header;
