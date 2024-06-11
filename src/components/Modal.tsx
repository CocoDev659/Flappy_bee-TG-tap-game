import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react"
import Close from "./svgs/Close"

interface ModalProps {
  isOpen: boolean
  close: any
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, close, children }) => {
  return (
    <Transition appear show={isOpen}>
      <Dialog
        as="div"
        className="relative z-30 focus:outline-none"
        onClose={close}
      >
        <div
          className="fixed inset-0 bg-black/30"
          aria-hidden="true"
          onClick={close}
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center">
            <TransitionChild
              enter="ease-in-out duration-150"
              enterFrom="translate-y-full"
              enterTo="translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="translate-y-0"
              leaveTo="translate-y-full"
            >
              <DialogPanel className="relative w-full bg-[#1c1f24] rounded-ss-[40px] rounded-se-[40px] border-t-2 border-[#f3ba2f] shadow-[0_-4px_64px_#fab82299] pt-6 px-4 pb-12 max-h-[calc(100vh-64px)] overflow-y-scroll">
                <button className="absolute top-0 right-0 text-[#4e4f50] hover:text-[#8b8e93] transition-all p-4">
                  <Close className="w-6 h-6" />
                </button>
                <div className="flex flex-col items-center">{children}</div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
