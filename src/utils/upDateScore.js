
export default async function updateScore(status,dispatch) {

    let result  = await fetch("https://gameback-end.herokuapp.com/update", {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify({status})
                    })
    let response = await result.json()

    console.log(response)
    if(response.response == 'invalid cookie'){

        dispatch({ type: 'USER_LOGOUT'})
    } 
        


}