import Header from "./component/header";
import  Sidebar from "./component/sidebar";
import TaskInput from "./component/taskinput";
import Task from  "./component/task"
import type { TaskCardProps } from "./libs/types";
import Footer  from "./component/footer";


function App() {
  const Tasks:TaskCardProps[] = [
  { id: 1, title: "Read a book", description: "Vite + React + Bootstrap + TS", isDone: false },
  { id: 2, title: "Write code", description: "Finish project for class", isDone: true },
  { id: 3, title: "Deploy app", description: "Push project to GitHub Pages", isDone: false },
  ];
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      
      <Header></Header>

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
      <Sidebar userName="Pawornpruch" type="student" />
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
            <TaskInput />
            {/* Card รายการ */}
            <Task {...Tasks[0]}/>
            <Task {...Tasks[1]}/>
            <Task {...Tasks[2]}/>
            
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year="2025" fullName="Pawornpruch Sanlee" studentId={670610715}/>
    </div>
  );
}

export default App;