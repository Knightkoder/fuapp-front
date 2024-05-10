"use client";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { signIn, signOut, useSession, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { sheets } from "@googleapis/sheets";

/*function listMajors(auth: any) {
  const sheets_ = sheets({
    auth: auth,
    version: "v4",
  });
  sheets_.spreadsheets.values.get(
    {
      auth: auth,
      spreadsheetId: "1Scd_JacGo4uNu7drUbgi8cWCaJPrFBsRy5bxzEKRHOM",
      range: "proveedor!A2:Q",
    },
    (err, res) => {
      if (err) {
        console.error("The API returned an error.");
        throw err;
      }
      const rows = res.data.values;
      if (rows.length === 0) {
        console.log("No data found.");
      } else {
        console.log("Name, Major:");
        for (const row of rows) {
          // Print columns A and E, which correspond to indices 0 and 4.
          console.log(`${row[0]}, ${row[4]}`);
        }
      }
    }
  );
}*/

function RegisterPage() {
  const [error, setError] = useState();
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);

  const ss = getSession();
  console.log(
    ss.then((res) => {
      console.log(res);
    })
  );

  //listMajors();

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      //TODO: add conection to strapi api
      const signupResponse = await axios.post("/api/auth/signup", {
        fullname: formData.get("fullname"),
        email: formData.get("email"),
        password: formData.get("password"),
      });

      console.log(signupResponse);
      const res = await signIn("credentials", {
        email: signupResponse.data.email,
        password: formData.get("password"),
        redirect: false,
      });
      if (res?.ok) {
        router.push("/dashboard");
      } else {
      }
      console.log(res);
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        setError(err.response?.data.message);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-zinc-900 bg-greenF">
      <form
        onSubmit={handleSumbit}
        className="flex flex-col  bg-zinc-800 border-spacing-0 border-2 border-black p-4"
      >
        {error && <div className="bg-red-600 text-white p-2 mb-2">{error}</div>}
        <h1 className="text-4xl font-bold text-white p-4 mb-4 col-auto ">
          Completar Registro
        </h1>

        <label>Name:</label>
        <div className="bg-zinc-800 px-4 py-2 block mb-2 w-full">
          {" "}
          {session?.user?.name as string}
        </div>
        <label>Email:</label>
        <div className="bg-zinc-800 px-4 py-2 block mb-2 w-full">
          {" "}
          {session?.user?.email as string}
        </div>

        <label>Teléfono / WhatsApp:</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          placeholder="+56912345678"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
        />
        <button className="bg-indigo-500 px-4 py-2">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
