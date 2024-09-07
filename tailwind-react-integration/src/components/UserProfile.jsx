// src/components/UserProfile.js
function UserProfile() {
  return (
    <div
      className="user-profile bg-gray-100 rounded-lg shadow-lg mx-auto my-20 
              p-4 sm:p-4 md:p-8 
              max-w-xs sm:max-w-sm md:max-w-sm"
    >
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full mx-auto 
                  w-24 h-24 sm:w-36 sm:h-36 md:w-36 md:h-36"
      />
      <h1 className="text-lg sm:text-xl md:text-xl text-blue-800 my-4">
        John Doe
      </h1>
      <p className="text-sm sm:text-base md:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}
export default UserProfile;