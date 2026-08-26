const form = document.getElementById("loginForm");
const output = document.getElementById("output");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    output.textContent =
      "ERROR // IDENTITY AND ACCESS KEY REQUIRED";
    return;
  }

  output.textContent =
    "CONTACTING NODE-8 CHALLENGE SERVICE...";

  try {
    const response = await fetch("challenge.json", {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error("Challenge unavailable");
    }

    const challenge = await response.json();

    output.textContent =
      "REQUEST ACCEPTED\n\n" +
      "Challenge: " + challenge.challenge + "\n" +
      "Status: " + challenge.status + "\n\n" +
      challenge.message + "\n\n" +
      challenge.hint;

  } catch (error) {
    output.textContent =
      "ERROR // NODE-8 CHALLENGE RESOURCE UNAVAILABLE";
  }
});
