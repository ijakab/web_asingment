window.onload = function () {
    document.getElementById('mainForm').addEventListener('submit', async function (event) {
        event.preventDefault()
        const description = document.getElementById('description').value
        const mainPrice = document.getElementById('mainPrice').value

        const data = await post({description, mainPrice})
        const html = data.map(row => {
            return `<tr>
                <td>${row.description}</td>
                <td>${row.mainPrice}</td>
                <td>${row.pdvPrice}</td>
                <td>${row.fullPrice}</td>
            </tr>`
        }).join('')
        document.getElementById('tableBody').innerHTML = html
    }, false)
}

async function post(data) {
    const response = await fetch('/payments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}

