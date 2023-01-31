import { trpc } from "../utils/trpc";
import { useState } from "react";
import { useMutation } from "react-query";

let s = "";

export default function IndexPage() {
  const hello = trpc.hello.useMutation({
    async onSuccess() {
      // refetches posts after a post is added
      s = "hello";
    },
  });

  // const hello = trpc.hello.hello.useQuery({
  //   text: "hello"
  // })

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await hello.mutateAsync({ name: "pepsi" });
          } catch (err) {
            console.log(err);
          }
        }}
      >
        <input type="submit" />
      </form>
    </div>
  );
}
