import fetch from 'node-fetch';
const converter = require('json-2-csv');
// JWT Token V2
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNkOWM3ZDdiODQ5OTdmMWU0MjcyZjFhMTQ4YzZjZjE1ZjgwZTczNDMwYTgwNWRjM2RmMjNhOWYxNWNlNzk2OWM1ZDU1ZTQ1NDE4MGJjZGFmIn0.eyJhdWQiOiI0IiwianRpIjoiM2Q5YzdkN2I4NDk5N2YxZTQyNzJmMWExNDhjNmNmMTVmODBlNzM0MzBhODA1ZGMzZGYyM2E5ZjE1Y2U3OTY5YzVkNTVlNDU0MTgwYmNkYWYiLCJpYXQiOjE1OTc2NzIwNTIsIm5iZiI6MTU5NzY3MjA1MiwiZXhwIjoxNjI5MjA4MDUyLCJzdWIiOiIyNTkiLCJzY29wZXMiOltdfQ.xcIdcqtHhgHAtUZeOpEsjAaZRDHQHLn5u6UsNhpOsmM8FSlSIpLTIFZWA-ZKB2rYNKkG7GSIVqOLN75LtfxvZ_n9C_NYEOTrxesbAFVT7hmFCJ3kFyEimhkjDaH0z2oHr-YMzeOAAFa2zMowTfFmqIxsA5lMCLqQ_elCs8YLiGlhxxLN7Q2I3ou-P-EfQAXdxCri9UI7E_B9N-dh_darWp30dvbi_4rP04UY4Z0XAIYE501l94LYBGkGNA9OzIKlG0IAJUEawJMqgVomG_6wA-tVm5GUwagXta3MCOoBnb9wreCrnOZbxH-VlNxkUy9r_P-c8OfB50aFD1UX9Ny781WUNzib4SKtsaL3wp1waLAoIM74m2mhx5meTSt3wwJO46zhh5R2I35M-LA_W_FT6HYD2bMxaTbyrUf84ciSLRGDMW36mTQKYABRvZEtJ6bfUiNF4qJaWrl3JRbWL-pW97C7lUERvRNuFkdN7T1uTXYdnoaGkkeDSSFzTiQE1Ln_jE29muywkz4r3-SGqNKGVzO-tjwb1KLxLMBLGauRMhMgmjnVpIrA4xHWYhA5LVhMPGsmaqLLlqsniA4wxLSkNWgnz1Zbsv4-udL_3QEekfuTn9XoUg5IV7mgWsuQcKXdhYZZUd1RSrWYLqEGJMp3VyyQyKFC735uVFdbk71F9ks";
// need to add the JWT auth headers
const auth_headers = {
    'Authorization': 'Bearer ' + token, 
    'Content-Type': 'application/json'
};
const options = { 
    method: "Get",
    headers: auth_headers
};
const apiUrl = 'https://api.simongjewelry.com/products';
const itemsPerPage = 100;

export async function handler(event, context) {
    // get all the products in format needed for CSV conversion
    const products = await getAllProducts();

    // convert the json to a CSV format
    const csv = await convertToCSV(products);
    return {
        statusCode: 200,
        body: csv
    };
    
};

async function convertToCSV(jsonData) {

    const csv = await converter.json2csvAsync(jsonData);
    return await csv;

}
function mapToCSVModel(jsonData) {
    // mapping API model to the model that corresponds to the CSV format
    var data = jsonData.map(x => ({
        handle: x.id,
        title: x.name
    }));
    return data;
}

async function getAllProducts() {

    let urls = []

    const initialResponse = await getAllUrls([`${apiUrl}?display=${itemsPerPage}`]);
    console.log(`Total pages: ${initialResponse[0].meta.last_page}; Total Products: ${initialResponse[0].meta.total}`);

    for (let pageNum = 1; pageNum <= initialResponse[0].meta.last_page; pageNum++) {
        urls.push(`${apiUrl}?display=${itemsPerPage}&page=${pageNum}`);
    }

    const start = Date.now();
    const productsResponses = await getAllUrls(urls);
    const stop = Date.now();
    console.log (`API Calls took: ${(stop - start) / 1000} seconds`)

    console.log(`Received ${productsResponses.length} HTTP Responses.`);
    // 1. convert the API response to the new format and add to final array
    var products = productsResponses.map(response => response.data);
    products = [].concat.apply([], products);
    console.log(`Received ${products.length} products from AP`);

    // create the final array products will be merged into
    var data = [];
    data = mapToCSVModel(products);
    return data;
}

async function getAllUrls(urls) {
    console.log(urls);
    
    try {
        var data = await Promise.all(
            urls.map(
                url =>
                    fetch(url, options).then(
                        (response) => response.json()
                    )));
        return (data)

    } catch (error) {
        console.log(error)

        throw (error)
    }
}