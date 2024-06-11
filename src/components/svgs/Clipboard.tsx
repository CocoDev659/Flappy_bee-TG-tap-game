interface ClipboardProps {
  className?: string
}

const Clipboard: React.FC<ClipboardProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className={className ?? ""}
  >
    <path
      d="M23 27.8H5c-.4 0-.8-.3-.8-.8V9c0-.4.3-.8.8-.8h18c.4 0 .8.3.8.8v18c0 .4-.4.8-.8.8zM5.8 26.3h16.5V9.8H5.8v16.5z"
      fill="currentColor"
    ></path>
    <path
      d="M27 23.8c-.4 0-.8-.3-.8-.8V5.8H9c-.4 0-.8-.4-.8-.8s.4-.7.8-.7h18c.4 0 .8.3.8.8v18c0 .3-.4.7-.8.7z"
      fill="currentColor"
    ></path>
  </svg>
)

export default Clipboard
