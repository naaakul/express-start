const express = require('express');

function calculateSum(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans += i;
    }
    return ans;
}

const app = express();

app.get("/", (req, res) => {
    const n = req.query.n;
    const sum = calculateSum(n)
    res.send("hey there! : " + sum);
});

app.listen(3000);
