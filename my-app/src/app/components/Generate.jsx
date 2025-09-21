import React from "react";
import {
  FaChalkboardTeacher,
  FaEdit,
  FaImage,
  FaMagic,
  FaMicrophone,
  FaPersonBooth,
  FaTrain,
  FaVideo,
} from "react-icons/fa";

const Generate = () => {
  return (
    <div className="w-full py-4 px-4 sm:px-6 md:px-8">
      <div className="flex items-center justify-between w-full">
        <h5 className="font-bold dark:text-white">Generate</h5>
        <p className="text-blue-600 text-sm">Show all</p>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-y-4 gap-x-1 w-full">
        <div className="flex items-center justify-between w-full sm:w-[300px]">
          <div className="icons flex items-center gap-3 w-fit">
            <div
              className="w-[42px] h-[42px] min-w-[42px] min-h-[42px] max-w-[42px] max-h-[42px] rounded-[10px] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
              style={{
                background:
                  "linear-gradient(to bottom, #374151 0%, #ffffff 100%)",
              }}
            >
              <FaImage className="text-white text-2xl" />
            </div>
            <div>
              <h6 className="dark:text-white text-sm">Image</h6>
              <p className="text-gray-800 dark:text-gray-300 text-xs">
                Generate images with custom styles in Flux and Ideogram.
              </p>
            </div>
          </div>
          <button className="open-btn bg-gray-200 text-xs px-4 py-2 rounded-2xl cursor-pointer hover:bg-gray-300 transition-all">
            Open
          </button>
        </div>
        <div className="flex items-center justify-between w-full sm:w-[300px]">
          <div className="icons flex items-center gap-3 w-fit">
            <div
              className="w-[42px] h-[42px] min-w-[42px] min-h-[42px] max-w-[42px] max-h-[42px] rounded-[10px] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
              style={{
                background:
                  "linear-gradient(to bottom, #faaa00 0%, #faaa00 100%)",
              }}
            >
              <FaVideo className="text-white text-2xl" />
            </div>
            <div>
              <h6 className="dark:text-white text-sm">Video</h6>
              <p className="text-gray-800 dark:text-gray-300 text-xs">
                Generate videos with Haifua, Pica, Runway, Luma, and more.
              </p>
            </div>
          </div>
          <button className="open-btn bg-gray-200 text-xs px-4 py-2 rounded-2xl cursor-pointer hover:bg-gray-300 transition-all">
            Open
          </button>
        </div>
        <div className="flex items-center justify-between w-full sm:w-[300px]">
          <div className="icons flex items-center gap-3 w-fit">
            <div
              className="w-[42px] h-[42px] min-w-[42px] min-h-[42px] max-w-[42px] max-h-[42px] rounded-[10px] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
              style={{
                background:
                  "linear-gradient(to bottom, #00d2ff 0%, #ffffff 100%)",
              }}
            >
              <FaEdit className="text-white text-2xl" />
            </div>
            <div>
              <h6 className="dark:text-white text-xs">Realtime</h6>
              <p className="text-gray-800 dark:text-gray-300 text-[10px]">
                Realtime AI rendering on a canvass. Instant feedback loops.
              </p>
            </div>
          </div>
          <button className="open-btn bg-gray-200 text-xs px-4 py-2 rounded-2xl cursor-pointer hover:bg-gray-300 transition-all">
            Open
          </button>
        </div>
        <div className="flex items-center justify-between w-full sm:w-[300px]">
          <div className="icons flex items-center gap-3 w-fit">
            <div
              className="w-[42px] h-[42px] min-w-[42px] min-h-[42px] max-w-[42px] max-h-[42px] rounded-[10px] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
              style={{
                background:
                  "linear-gradient(to bottom, #000000 0%, #888888 100%)",
              }}
            >
              <FaMagic className="text-white text-2xl" />
            </div>
            <div>
              <h6 className="dark:text-white text-sm">Enhancer</h6>
              <p className="text-gray-800 dark:text-gray-300 text-xs">
                Upscale and enhance images and videos up to 22k.
              </p>
            </div>
          </div>
          <button className="open-btn bg-gray-200 text-xs px-4 py-2 rounded-2xl cursor-pointer hover:bg-gray-300 transition-all">
            Open
          </button>
        </div>
        <div className="flex items-center justify-between w-full sm:w-[300px]">
          <div className="icons flex items-center gap-3 w-fit">
            <div
              className="w-[42px] h-[42px] min-w-[42px] min-h-[42px] max-w-[42px] max-h-[42px] rounded-[10px] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
              style={{
                background:
                  "linear-gradient(to top, #AE91CA 0%, #592A85 60%, #180728 100%)",
              }}
            >
              <FaEdit className="text-white text-2xl" />
            </div>
            <div>
              <h6 className="dark:text-white text-sm">Edit</h6>
              <p className="text-gray-800 dark:text-gray-300 text-xs">
                Add objects, charge style, or expand photos and generations.
              </p>
            </div>
          </div>
          <button className="open-btn bg-gray-200 text-xs px-4 py-2 rounded-2xl cursor-pointer hover:bg-gray-300 transition-all">
            Open
          </button>
        </div>
        <div className="flex items-center justify-between w-full sm:w-[300px]">
          <div className="icons flex items-center gap-3 w-fit">
            <div
              className="w-[42px] h-[42px] min-w-[42px] min-h-[42px] max-w-[42px] max-h-[42px] rounded-[10px] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
              style={{
                background:
                  "linear-gradient(to top, #BBCA91 0%, #3C878F 60%, #07280F 100%)",
              }}
            >
              <FaMicrophone className="text-white text-2xl" />
            </div>
            <div>
              <h6 className="dark:text-white text-sm">Video Lipsync</h6>
              <p className="text-gray-800 dark:text-gray-300 text-xs">
                Lip sync any video to any audio.
              </p>
            </div>
          </div>
          <button className="open-btn bg-gray-200 text-xs px-4 py-2 rounded-2xl cursor-pointer hover:bg-gray-300 transition-all">
            Open
          </button>
        </div>
        <div className="flex items-center justify-between w-full sm:w-[300px]">
          <div className="icons flex items-center gap-3 w-fit">
            <div
              className="w-[42px] h-[42px] min-w-[42px] min-h-[42px] max-w-[42px] max-h-[42px] rounded-[10px] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
              style={{
                background:
                  "linear-gradient(to top, #0a0a0a 0%, #0a0a0a 60%, #0a0a0a 100%)",
              }}
            >
              <FaPersonBooth className="text-white text-2xl" />
            </div>
            <div>
              <h6 className="dark:text-white text-sm">Motion Transfer</h6>
              <p className="text-gray-800 dark:text-gray-300 text-xs">
                Transfer motion to images and animate characters.
              </p>
            </div>
          </div>
          <button className="open-btn bg-gray-200 text-xs px-4 py-2 rounded-2xl cursor-pointer hover:bg-gray-300 transition-all">
            Open
          </button>
        </div>
        <div className="flex items-center justify-between w-full sm:w-[300px]">
          <div className="icons flex items-center gap-3 w-fit">
            <div
              className="w-[42px] h-[42px] min-w-[42px] min-h-[42px] max-w-[42px] max-h-[42px] rounded-[10px] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
              style={{
                background:
                  "linear-gradient(to top, #0a0a0a 0%, #0a0a0a 60%, #0a0a0a 100%)",
              }}
            >
              <FaChalkboardTeacher className="text-white text-2xl" />
            </div>
            <div>
              <h6 className="dark:text-white text-sm">Train</h6>
              <p className="text-gray-800 dark:text-gray-300 text-xs">
                Teach Krea to replicate your style, products, or charcacters.
              </p>
            </div>
          </div>
          <button className="open-btn bg-gray-200 text-xs px-4 py-2 rounded-2xl cursor-pointer hover:bg-gray-300 transition-all">
            Open
          </button>
        </div>
      </div>
    </div>
  );
};

export default Generate;
