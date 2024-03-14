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

export async function GET() {
    const data =await knex('products').select('*')
    // console.log(data)
    return Response.json({data})
}

export async function POST(req){
    const body=await req.json()
    const {name, barcode, isPerishable, daysToPerish} =body;
    const data =await knex('products').insert({
        name: name,
        barcode:barcode,
        is_perishable:isPerishable,
        days_to_perish:daysToPerish
    })
    return Response.json({data})
}