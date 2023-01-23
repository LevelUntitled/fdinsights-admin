// create a page in nextjs that fetches data from trpc prisma in t3.app and displays it

import { useQuery } from "react-query";
import { useQueryClient } from "react-query";
import { useMutation } from "react-query";
import { trpc } from "../utils/trpc";

export default function TestCreate() {
  const { data: users, isLoading, error } = trpc.superAdmin.getAll.useQuery();

  return (
    <>
      <div>
        {users?.map((user) => (
          <div key={user.id}>
            <h1>{user?.company}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
