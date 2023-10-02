function ProfilePageDetails({label, user}) {
  return (
    <tr className="border-b bg-slate-100">
      <td className="whitespace-nowrap px-6 py-4">{[...label][0].toUpperCase() + [...label].slice(1).join('')}</td>
      <td className="whitespace-nowrap px-6 py-4">{user}</td>
    </tr>
  );
}

export default ProfilePageDetails;
