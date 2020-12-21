const btn = document.querySelector("#button");

btn.addEventListener("click", () => {
  const word = document.querySelector("#word").textContent;
  const input = document.querySelector("#input").value;
  const lastindex = word.length - 1;
  const w = word[lastindex];
  const i = input[0];
  if (w === i) {
    document.querySelector("#word").textContent = input;
  } else {
    document.querySelector("#error").textContent = "땡";
  }
});
