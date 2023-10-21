"use client";

import AvatarForm from "./avatar-form";
import SignOutButton from "./signout-button";

export default function AccountPage() {
  return (
    <div>
      <h2>Account</h2>
      <AvatarForm />
      <SignOutButton />
    </div>
  );
}
