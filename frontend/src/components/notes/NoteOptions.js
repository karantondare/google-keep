import React from "react";
// import Button from "../../UI/Button/Button";
import { VscSymbolColor } from "react-icons/vsc";
import { FaRegBell, FaUserPlus, FaImage } from "react-icons/fa";
import { MdArchive, MdUnarchive } from "react-icons/md";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import NoteBackgroundColor from "./NoteBackgroundColor";

const NoteOptions = ({
  formOpen,
  setFormOpen,
  backgroundColor,
  setBackgroundColor,
}) => {
  return (
    <div className="flex justify-between my-2">
      <div className="flex justify-between">
        <button>
          <FaRegBell style={{ color: "#4A4A4A" }} className="mr-2" size={16} />
        </button>
        <button>
          <FaUserPlus style={{ color: "#4A4A4A" }} className="mr-2" size={16} />
        </button>

        <div className="relative mt-1 mr-2 hover-trigger">
          <VscSymbolColor
            size={16}
            color="#172B4D"
            className="cursor-pointer"
          />
          <div className="absolute bg-white border border-grey-100 px-4  py-2 hover-target">
            <NoteBackgroundColor
              backgroundColor={backgroundColor}
              setBackgroundColor={setBackgroundColor}
            />
          </div>
        </div>

        <button>
          <FaImage style={{ color: "#4A4A4A" }} className="mr-2" size={16} />
        </button>

        <button>
          <MdArchive style={{ color: "#4A4A4A" }} className="mr-2" size={16} />
        </button>

        <button>
          <MdUnarchive
            style={{ color: "#4A4A4A" }}
            className="mr-2"
            size={16}
          />
        </button>
      </div>
      <div>
        <button type="submit">
          <IoAddSharp style={{ color: "#4A4A4A" }} className="mr-2" size={16} />
        </button>
        <button>
          <IoRemoveSharp
            onClick={() => {
              setFormOpen(false);
              setBackgroundColor("");
            }}
            style={{ color: "#4A4A4A" }}
            className="mr-2"
            size={16}
          />
        </button>
      </div>
    </div>
  );
};

export default NoteOptions;
