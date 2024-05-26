import { useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Community = () => {
  const user = localStorage.userId ?? null;
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("//localhost:8000/api/create_post", {
        description: desc,
        user_id: user,
      })
      .then((response) => {
        toast.success("Post created");
      })
      .catch((error) => toast.error("Sorry, something went wrong."));
  };

  return (
    <main className="w-screen h-screen bg-slate-900">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header loggedIn={true} />

      <form
        className="mx-auto bg-white rounded-lg max-w-xl p-10 flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full p-2 border rounded-lg outline-none focus:border-slate-900"
          placeholder="Post Title"
        />
        <textarea
          className="w-full p-2 border rounded-lg outline-none focus:border-slate-900"
          placeholder="Add a comment..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button className="px-4 py-2 rounded-lg text-white bg-blue-950 inline-block mx-auto mt-auto">
          Add Post
        </button>
      </form>
    </main>
  );
};

export default Community;
