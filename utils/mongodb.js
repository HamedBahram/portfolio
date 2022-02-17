import clientPromise from '../lib/mongodb'

let client
let db

async function init() {
  if (db) return
  try {
    client = await clientPromise
    db = await client.db()
  } catch (error) {
    throw new Error('Failed to stablish connection to database')
  }
}

/////////////
/// VIEWS ///
/////////////

export async function getViews(slug) {
  try {
    await init()
    const views = await db.collection('views')
    const view = await views.findOne({ slug })
    return { count: view ? view.count : 0 }
  } catch (error) {
    return { error }
  }
}

export async function addView(slug) {
  try {
    await init()
    const views = await db.collection('views')
    const view = views.findOneAndUpdate(
      { slug },
      { $inc: { count: 1 } },
      { returnDocument: 'after', upsert: true }
    )
    return { count: view ? view.count : 0 }
  } catch (error) {
    return { error }
  }
}
