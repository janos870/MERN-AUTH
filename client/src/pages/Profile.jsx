import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.profilePicture}
          alt="profile"
          className="h-24 w-24 rounded-full self-center object-cover cursor-pointer mt-2"
        />
        <input
          defaultValue={currentUser.username}
          type="text"
          id="username"
          placeholder="Username"
          className="bg-slate-100 rounded-lg p-3 dark:text-black"
        />
        <input
          defaultValue={currentUser.email}
          type="text"
          id="email"
          placeholder="Email Address"
          className="bg-slate-100 rounded-lg p-3 dark:text-black"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="bg-slate-100 rounded-lg p-3 dark:text-black"
        />
        <button className="bg-slate-700 p-3 rounded-lg hover:opacity-90 text-white">Update</button>
        <div className="flex justify-between mt-5">
          <span className="text-red-700 cursor-pointer hover:opacity-80">Delete Account</span>
          <span className="text-slate cursor-pointer hover:opacity-80">Sign Out</span>
        </div>
      </form>
    </div>
  );
}
