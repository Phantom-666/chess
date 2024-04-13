import "./Files.css"

const Files = ({ files }) => {
  return (
    <div className="files">
      {files.map((file, i) => (
        <span key={i}>{file}</span>
      ))}
    </div>
  )
}

export default Files
