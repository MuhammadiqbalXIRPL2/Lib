import Card from "./component/Card";
import Sidebar from "./Layout/sidebar";

function Library() {
  return (
    <>
      <div className="flex h-screen bg-gray-400">
        <Card text='ini text' title='ini title' />  
        <Card text='ini text' title='ini title'/>  
        <Card text='ini text' title='ini title'/>  
      </div>
    </>
  );
}

export default Library;
