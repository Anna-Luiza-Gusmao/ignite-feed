import { Header } from "./components/Header.jsx"
import { Sidebar } from "./components/Sidebar.jsx"
import { Post } from "./components/Post.jsx"

import styles from "./App.module.css"
import "./global.css"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Anna" 
            content="lorem lorem lorem lorem"
          />
          <Post 
            author="Luiza" 
            content="Um post muito legal"
          />
        </main>
      </div>
    </div>
  )
}
