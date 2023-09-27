function ProfilePage() {
  return (
    <>
      <h2 className="mb-14 text-2xl font-bold">Profile Page</h2>
      <div className="flex h-80">
        <div className="flex flex-col w-1/2">
          <img className="h-8 w-8 rounded-full" src="/img/profile.png" alt="profile" />
          <h6>Name Surname</h6>
          <span>Email</span>
          <span>Company Name</span>
        </div>
        <div className="w-1/2">
          <div>
            Profile details
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
