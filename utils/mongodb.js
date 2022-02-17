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
    const notes = await db.collection('notes')
    const note = await notes.findOne({ slug })
    return { viewCount: note && note.viewCount ? note.viewCount : 0 }
  } catch (error) {
    return { error }
  }
}

export async function addView(slug) {
  try {
    await init()
    const notes = await db.collection('notes')
    const result = await notes.findOneAndUpdate(
      { slug },
      { $inc: { viewCount: 1 } },
      { returnDocument: 'after', upsert: true }
    )
    if (!result.ok) {
      throw new Error(`Not able to increment view count for slug: ${slug}`)
    }
    const note = result.value
    return { viewCount: note.viewCount }
  } catch (error) {
    return { error }
  }
}
