import React, { useState, useEffect } from 'react';

// Define the key for local storage
const localStorageKey = 'userProfileData';

// Initial account details
const initialAccount = {
  fullName: 'William Smith',
  avatar: '/public/assets/image/ava-big-author.jpg',
  email: 'smith@email.com',
  phone: '0123456789',
  gender: 'Male',
  job: 'Assistant Teacher',
};

export default function Profile() {
  // Initialize state from local storage or fallback to initial data
  const [account, setAccount] = useState(() => {
    const savedProfile = localStorage.getItem(localStorageKey);
    return savedProfile ? JSON.parse(savedProfile) : initialAccount;
  });

  // Track whether we are in edit mode or not
  const [editMode, setEditMode] = useState(false);

  // Update local storage when account state changes
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(account));
  }, [account]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setAccount({ ...account, avatar: e.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const saveChanges = () => {
    setEditMode(false);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <>
      <div
        className="pt-64 pb-28"
        style={{
          backgroundImage: `url('/public/assets/image/header-banner.jpg')`,
        }}
      >
        <p className="text-2xl md:text-4xl font-bold text-black text-center pb-3">
          Profile
        </p>
        <p className="text-base text-center">Home / Profile</p>
      </div>
      <div className="container max-w-[1340px] mx-auto px-4 py-28 flex gap-8">
        <div className="w-1/3 bg-white shadow p-10 flex flex-col items-center gap-4">
          <img src={account.avatar} className="max-w-[150px] rounded-full" alt="Avatar" />
          {editMode ? (
            <>
              <input
                type="text"
                name="fullName"
                value={account.fullName}
                onChange={handleInputChange}
                className="text-2xl font-bold text-black text-center"
              />
              <input
                type="text"
                name="job"
                value={account.job}
                onChange={handleInputChange}
                className="text-lg text-center"
              />
            </>
          ) : (
            <>
              <p className="text-2xl font-bold text-black">{account.fullName}</p>
              <p className="text-lg">{account.job}</p>
            </>
          )}
        </div>
        <div className="flex-1 bg-white shadow p-10">
          <div className="flex gap-48 border-b p-4 pl-0">
            <p className="text-black font-bold w-1/5">Full Name</p>
            {editMode ? (
              <input
                type="text"
                name="fullName"
                value={account.fullName}
                onChange={handleInputChange}
                className="font-bold"
              />
            ) : (
              <p className="font-bold">{account.fullName}</p>
            )}
          </div>
          <div className="flex gap-48 border-b p-4 pl-0">
            <p className="text-black font-bold w-1/5">Email</p>
            {editMode ? (
              <input
                type="email"
                name="email"
                value={account.email}
                onChange={handleInputChange}
                className="font-bold"
              />
            ) : (
              <p className="font-bold">{account.email}</p>
            )}
          </div>
          <div className="flex gap-48 border-b p-4 pl-0">
            <p className="text-black font-bold w-1/5">Phone number</p>
            {editMode ? (
              <input
                type="tel"
                name="phone"
                value={account.phone}
                onChange={handleInputChange}
                className="font-bold"
              />
            ) : (
              <p className="font-bold">{account.phone}</p>
            )}
          </div>
          <div className="flex gap-48 p-4 pl-0">
            <p className="text-black font-bold w-1/5">Gender</p>
            {editMode ? (
              <select
                name="gender"
                value={account.gender}
                onChange={handleInputChange}
                className="font-bold"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                {/* Add other gender options as needed */}
              </select>
            ) : (
              <p className="font-bold">{account.gender}</p>
            )}
          </div>
          {editMode && (
            <div className="flex gap-48 p-4 pl-0">
              <p className="text-black font-bold w-1/5">Avatar</p>
              <input
                type="file"
                onChange={handleAvatarChange}
                className="font-bold"
              />
            </div>
          )}
        </div>
      </div>
      <div className="container mx-auto text-center py-5">
        {editMode ? (
          <>
            <button onClick={saveChanges} className="px-4 py-2 bg-green-500 text-white rounded">Save Changes</button>
            <button onClick={() => setEditMode(false)} className="px-4 py-2 bg-red-500 text-white rounded">Cancel</button>
          </>
        ) : (
          <button onClick={toggleEditMode} className="px-4 py-2 bg-blue-500 text-white rounded">Edit Profile</button>
        )}
      </div>
    </>
  );
}
