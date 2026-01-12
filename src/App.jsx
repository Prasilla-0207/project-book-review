import './App.css'

const books = [
  { title: 'Atomic Habits', author: 'James Clear' },
  { title: 'The Alchemist', author: 'Paulo Coelho' },
  { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki' },
]

function App() {
  return (
    <div className="app-container">
      <div className="header">📚 Book Review Platform</div>

      <div className="book-list">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>

            <label>Rating:</label>
            <select>
              <option>Select</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <textarea placeholder="Write your review"></textarea>

            <p><strong>Your Rating:</strong> 0</p>
            <p><strong>Your Review:</strong></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
