import { InputHTMLAttributes, MutableRefObject } from 'react'
import styles from "../../styles/components/form/CustomInput.module.css"

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  reference: MutableRefObject<HTMLInputElement | null>;
}

const CustomInput = ({ reference, ...props }: CustomInputProps) => {
  return (
    <input {...props} ref={reference} className={styles.customInput} />
  )
}

export default CustomInput