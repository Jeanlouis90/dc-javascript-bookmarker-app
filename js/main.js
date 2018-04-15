// Listen for Form Submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark (e) {
  //   Get form values
  var siteName = document.getElementById('siteName').value
  var siteURL = document.getElementById('siteUrl').value

  var bookmark = {
    name: siteName,
    url: siteURL
  }

  // Local Storage test
  // localStorage.setItem('test', 'Hello World')
  // console.log(localStorage.getItem('test'))
  // localStorage.removeItem('test')
  // console.log(localStorage.getItem('test'))



  // Test if bookmarks is null  
  if (localStorage.getItem('bookmarks') === null) {
    // Init Array
    var bookmarks = []
    // Add to array
    bookmarks.push(bookmark)
    // Set to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  } else {
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    // Add bookmark to array
    bookmarks.push(bookmark)
    // Re-set back onto localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }

  //   Prevent form from submitting
  e.preventDefault()
}

  // Fetch Bookmarks
  function fetchBookmarks () {
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    // Get output ID
    var bookmarksResults = document.getElementById('bookmarksResults')

    // Build output
    bookmarksResults.innerHTML = ''
  }  