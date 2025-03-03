async function checkToken() {
    let token = document.getElementById("tokenAddress").value;
    let response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${token}`);
    let data = await response.json();
    document.getElementById("result").innerText = JSON.stringify(data, null, 2);
}
