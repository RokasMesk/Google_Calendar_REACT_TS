import { LabelInputPairProps } from './modalPropsTypes';
import styles from './createEventModal.module.css';
const LabelInputPair = ({
  parentDivClassName,
  labelText,
  inputType,
  inputName,
  value,
  onChange,
  inputClassName,
}: LabelInputPairProps) => {
  return (
    <div className={parentDivClassName}>
      <label htmlFor={inputName} className={styles.eventFormLabel}>{labelText}</label>
      <input
        className={inputClassName}
        type={inputType}
        id={inputName}
        name={inputType}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default LabelInputPair;
