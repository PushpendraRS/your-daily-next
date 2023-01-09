const BASE_URL = "http://127.0.0.1:8080/api";

let token: string | null;

if (typeof window !== "undefined") {
  // Perform localStorage action
  token = sessionStorage.getItem("token");
}

export async function loginUser(loginData: any) {
  try {
    let res = await fetch(`${BASE_URL}/sm-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    return res.json();
  } catch (error) {
    // return Error(error.message)
  }
}

export async function getWorkerDetails(staffType: string) {
  try {
    let res = await fetch(
      `${BASE_URL}/store-manager/dashboard/staff/${staffType}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    return res.json();
  } catch (error) {
    // return Error(error.message)
  }
}
