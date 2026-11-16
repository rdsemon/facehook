import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../hooks/useAuth";
import { useAxios } from "../hooks/useAxios";
import { getMe } from "../services/apiService";

function ProfilePage() {
  const { auth } = useAuth();
  const api = useAxios();

  const id = auth.user.id;

  const { data, isPending, error } = useQuery({
    queryKey: ["me", id],

    queryFn: () => getMe(id),
  });

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h1>This is profile page</h1>
    </div>
  );
}

export default ProfilePage;
