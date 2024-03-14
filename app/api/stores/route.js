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
    const businessID = searchParams.get('business_id')
    const data =await ( businessID=== null? knex('stores').select('*') : knex('stores').where('business_id', businessID ).select('*'))
    // console.log(data)
    return Response.json({data})
}

export async function POST(req){
    const body=await req.json()
    const {address, phone, email, businessID} =body;
    const data =await knex('stores').insert({
        address: address,
        email:email,
        phone:phone,
        business_id:businessID
    })
    return Response.json({data})
}