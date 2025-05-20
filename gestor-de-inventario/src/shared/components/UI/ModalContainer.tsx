interface Props {
  children: React.ReactNode
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  isOpenModal ?: boolean
} 

export default function ModalContainer({...props}: Props) {
  return (
    <div
    className="fixed inset-0 bg-black border-white bg-opacity-50 z-50 items-center justify-center flex" style={{backdropFilter : 'blur(5px)'}}
    onClick={() => props.setIsOpenModal(false)} // Cerrar modal al hacer clic fuera
    >
      {props.children}
  </div>
  )
}