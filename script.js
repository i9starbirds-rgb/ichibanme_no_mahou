function checkInput() {
    const input = document.getElementById('userInput').value;
    const errorMessage = document.getElementById('errorMessage');
    const correctAnswer = "1番目の魔法"; // 正解キーワードを設定

    if (input === correctAnswer) {
        window.location.href = "second.html";
    } else {
        errorMessage.textContent = "往けなかった…";
        document.getElementById('userInput').value = "";
    }
}
