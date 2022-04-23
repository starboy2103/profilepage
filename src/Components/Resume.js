import Pdf from '../Resume.pdf';
import {saveAs} from 'file-saver'


export default function Resume() {
  const title="Resume";
  const handleDownload = () => {
    saveAs(Pdf,"Kowshal Resume")
  }
  return (
    <div>
        <h2 className="title">{title}</h2>
        <button onClick={handleDownload}>Download Resume here</button>
    </div>
  )
}
