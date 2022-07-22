import { useToasts } from 'react-toast-notifications'

export const SuccessToast = ({ content }) => {
  const { addToast } = useToasts()
  return (
    addToast(content, {
      appearance: 'success',
      autoDismiss: true,
    })
  )
}