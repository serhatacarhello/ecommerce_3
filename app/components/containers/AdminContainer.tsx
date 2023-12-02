import { getCurrentUser } from "@/app/actions/getCurrentUser";
import WarningText from "../general/WarningText";

const AdminContainer = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN")
    return <WarningText> Unauthorized access!</WarningText>;

  return (
    <div className="flex  h-full overflow-hidden bg-slate-100">{children}</div>
  );
};

export default AdminContainer;
