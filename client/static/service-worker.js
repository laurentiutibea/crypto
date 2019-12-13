onmessage = e => {
    const data = e.data.split(",");
    getCurrencies(data);
}

async function getCurrencies(data){
    const bodyData = {
        cryptocurrency: data[0],
        currency: data[1]
    }
    await fetch("http://localhost:3900/api/crypto", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': data[2]
        },
        body: JSON.stringify(bodyData),
        
    }).then(res => res.json()).then(data => postMessage(data));
}