
export default async function handleUserRankings() {

    let result  = await fetch("https://gameback-end.herokuapp.com/rankings", {
                        method: "GET",
                        credentials: "include",
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                    })
    let response = await result.json()

    return response
        


}