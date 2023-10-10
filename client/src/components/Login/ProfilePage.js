import ProfilePageDetails from "./ProfilPageDetails";

const userData = [{
  name: "Name Surname",
  email: "user@user.com",
  phone: "0123456789",
  company: "Company Name",
  img: "/img/profile.png",
  role: "User",
  status: "active"
}]

function ProfilePage() {
  return (
    <>
      <h2 className="mb-14 text-2xl font-bold">Profile Page</h2>
      <div className="flex h-auto">
        {userData.map((user) => (
          <div key={user.name} className="flex flex-col justify-items-center items-center w-1/2 p-2">
            <img className="h-40 w-40 rounded-full" src={user.img} alt="profile" />
            <h6 className="pt-5">{user.name}</h6>
            <span className="text-sm my-2">{user.email}</span>
            <span>{user.company}</span>
          </div>
        ))}
        <div className="flex flex-col w-1/2">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <tbody>
                    {userData.map((user) => Object.keys(user).map((key) => <ProfilePageDetails key={key} label={key} user={user[key]} />))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
