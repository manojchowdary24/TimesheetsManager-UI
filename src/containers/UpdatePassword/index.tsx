import React from "react";
import UpdatePasswordForm from "../../components/UpdatePassword";

interface Props {
  navigateToLogin: () => void;
}

const UpdatePassword: React.FC<Props> = ({ navigateToLogin }) => {
  return <UpdatePasswordForm navigateToLogin={navigateToLogin} />;
};

export default UpdatePassword;
