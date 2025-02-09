import { useModalStore } from '../store/useModalStore'

export const useModal = () => {
  const { isOpenModal, toggleModal } = useModalStore()

  return { isOpenModal, toggleModal }
}
