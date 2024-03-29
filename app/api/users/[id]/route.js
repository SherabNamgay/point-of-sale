const knex = require('knex')({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		port: 5432,
		user: 'sherab',
		password: '1234',
		database: 'point_of_sale_db'
	}
});

export async function GET(req, {params}) {
    const data =await knex('users').where('store_id', params.id).select('*')
    // console.log(data)
    return Response.json({data})
}

export async function PUT(req, {params}){
	const body=await req.json()
	const {salary, storeId} =body;
	const data =await knex('users').where('id', params.id).update({
		salary:salary,
		store_id:storeId,
	})
	return Response.json({data})
  }