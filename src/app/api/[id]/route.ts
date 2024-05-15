import data from '../../../../data/data.json'

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const story = data.find((comment) => comment.id === parseInt(params.id))
  return Response.json(story)
}
