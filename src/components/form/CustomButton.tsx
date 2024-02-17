import { ButtonHTMLAttributes } from "react"
import styles from "../../styles/components/form/CustomButton.module.css"

interface customButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDarkMode: boolean
}

const CustomButton = ({ isDarkMode, ...props }: customButtonProps) => {
  const buttonStyle = isDarkMode ? styles.customButtonDark : styles.customButton

  return (
    <button {...props} className={buttonStyle} id={styles.customButtom}>{props.children}</button>
  )
}

export default CustomButton