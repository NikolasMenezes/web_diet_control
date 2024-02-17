import CustomInput from './CustomInput'
import styles from '../../styles/components/form/LabelInputGroup.module.css'
import { MutableRefObject } from 'react'

interface LabelInputGroupProps {
  labelText: string
  inputType: string
  icon: JSX.Element
  reference: MutableRefObject<HTMLInputElement | null>
}

const LabelInputGroup = ({ icon, inputType, labelText, reference }: LabelInputGroupProps) => {
  return (
    <label className={styles.groupContainer}>
      <span >{icon} {labelText}</span>
      <CustomInput className={styles.input} type={inputType} reference={reference} />
    </label>
  )
}

export default LabelInputGroup