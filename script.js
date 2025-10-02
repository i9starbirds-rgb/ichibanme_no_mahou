document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("passwordForm");
  const input = document.getElementById("password");
  const errorMessage = document.getElementById("error-message");

  // 正解の文字列
  const correctAnswer = "1番目の魔法";

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // ページリロード防止
    if (input.value === correctAnswer) {
      window.location.href = "second.html";
    } else {
      errorMessage.textContent = "往けなかった…";
      input.value = "";
    }
  });
});