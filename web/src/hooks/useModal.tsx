import { useStore } from '../store'

export const useModal = () => {
  const { isOpenModal, toggleModal } = useStore()

  return { isOpenModal, toggleModal }
}
