const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'sherab',
      password : '1234',
      database : 'point_of_sale_db'
    }
  });

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const storeID = searchParams.get('store_id')
    const data =await ( storeID=== null? knex('users').select('*') : knex('users').where('store_id', storeID ).select('*'))
    // console.log(data)
    return Response.json({data})
}

export async function POST(req){
    const body=await req.json()
    const {firstName, lastName, salary, storeID} =body;
    console.log(body)
    const data =await knex('users').insert({
        firstname: firstName,
        lastname:lastName,
        salary:salary,
        store_id:storeID
    })
    return Response.json({data})
}