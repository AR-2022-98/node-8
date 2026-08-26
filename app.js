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

  output.textContent = "AUTHENTICATING...";

  try {
    const response = await fetch(
      "./challenge.json?user=" +
      encodeURIComponent(username) +
      "&pass=" +
      encodeURIComponent(password),
      { cache: "no-store" }
    );

    const result = await response.json();

    if (result.success) {
      output.textContent =
        "AUTHENTICATION ACCEPTED\n\n" +
        result.message;
    } else {
      output.textContent =
        "AUTHENTICATION FAILED\n\n" +
        result.message;
    }

  } catch (error) {
    output.textContent =
      "NODE-8 ERROR\n\n" +
      error.message;
  }
});
