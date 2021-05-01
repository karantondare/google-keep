import React from "react";

export const About = () => {
  return (
    <div className="my-16 mx-40 flex flex-col items-center justify-center">
      <h2 className="mb-8 text-2xl">About Notes Keeper</h2>
      <p>
        Capture ideas, add images to notes, check tasks off your to-do list, and
        much more. With Google Keep, you can create, share, and collaborate with
        people on notes and lists. Keep synchronizes across all your devices, so
        your notes and lists go with you, wherever you are.
      </p>
      <p className="bg-gray-200 m-8 px-24 py-2 text-lg">
        <strong>Version: </strong> 1.0.0
      </p>
    </div>
  );
};
