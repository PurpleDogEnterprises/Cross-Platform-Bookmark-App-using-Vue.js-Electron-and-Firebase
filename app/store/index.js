import { EventEmitter } from 'events'
import Firebase from 'firebase'

const db = new Firebase("https://bookmarking-app-486da.firebaseio.com/")
const categoriesRef = db.child('categories')
const bookmarksRef = db.child('bookmarks')
const store = new EventEmitter()

let categories = {}
let bookmarks = {}
