function ProfilePage() {
  return (
    <>
      <h2 className="mb-14 text-2xl font-bold">Profile Page</h2>
      <div className="flex h-auto">
        <div className="flex flex-col justify-items-center items-center w-1/2 p-2">
          <img className="h-40 w-40 rounded-full" src="/img/profile.png" alt="profile" />
          <h6 className="pt-5">Name Surname</h6>
          <span className="text-sm my-2">user@user.com</span>
          <span>Company Name</span>
        </div>
        <div className="w-1/2">
          <table>
            <tr>
              <td>Name</td>
              <td>Name Surname</td>
            </tr>
            <tr>
              <td>Role</td>
              <td>User</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>user@user.com</td>
            </tr>
            <tr>
              <td>Contact</td>
              <td>0123456789</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>Active</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
