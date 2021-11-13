
export default async function updateScore(status) {

    let result  = await fetch("https://gameback-end.herokuapp.com/update", {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify({status})
                    })
    let response = result.json()
    return response
}