import NoteList from "../components/noteList";
import Sidebar from "../components/sidebar"
import Search from "@/components/search";
import addNote from "@/components/addNote";
// import styles from '@/styles/Home.module.css'
export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="container-lg">

        <Search />
        <addNote />
        <NoteList />
      </div>

    </>
  )
}
