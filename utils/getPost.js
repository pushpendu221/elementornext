export const getPost = async(uri) =>{
    const params = {
        query:`
            query pageQuery {
            post(id: "/", idType: URI) {
                uri
                title
                elementorData
            }
            }
        `, variable:{
            uri
        }
    }
    const response = await fetch(process.env.WP_GRAPHQL_URL,{
        method: "POST",
        headers:{
            'Content-Type': "application/json"
        },
        body:JSON.stringify(params)
    });

    const {data} = await response.json();
    return data;
}