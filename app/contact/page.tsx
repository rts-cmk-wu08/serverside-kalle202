"use client";

export default function page() {
  return (
    <form
      className="p-16 flex justify-center items-center flex-col w-full h-screen gap-4"
      action=""
    >
      <h1 className="font-bold text-2xl">Any Questions?</h1>
      <p>Use the form below to get in touch with us.</p>
      <div className="grid grid-cols-1 w-1/2 gap-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            className="border-b-2 border-black"
            type="text"
            placeholder="write your name here*"
          />
          <input
            className="border-b-2 border-black"
            type="text"
            placeholder="write your email here*"
          />
        </div>
        <input
          className="border-b-2 border-black"
          type="text"
          placeholder="phone number"
        />
        <input
          className="border-b-2 border-black"
          type="text"
          placeholder="write your subject here"
        />
        <input
          className="border-b-2 border-black h-16"
          type="text"
          placeholder="write your message here*"
        />
        <button
          className="bg-black rounded text-white p-2"
          type="submit"
          onSubmit={console.log("submitted")}
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
}
