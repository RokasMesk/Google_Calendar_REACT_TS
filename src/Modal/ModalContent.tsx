import styles from './createEventModal.module.css';
import { useState, useEffect } from 'react';
import { generateSimpleID } from '../utils';
import { Event } from '../types';
import { formatHourMinutesForInputForm, addOneHour } from '../dateUtils';
import {
  CloseButtonProps,
  ErrorMessageProps,
  LabelInputPairProps,
  LabelTextAreaProps,
} from './ModalPropsTypes';

interface ModalContentProps {
  onClose: () => void;
  onSave: (event: Event) => void;
  initialDate?: Date | null;
}
const ModalContent = ({ onClose, onSave, initialDate }: ModalContentProps) => {
  const [eventTitle, setEventTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if (initialDate) {
      setStartDate(initialDate.toISOString().split('T')[0]);
      setEndDate(initialDate.toISOString().split('T')[0]);
      setStartTime(formatHourMinutesForInputForm(initialDate.getHours()));
      setEndTime(addOneHour(initialDate.getHours()));
    }
  }, [initialDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const startDateTime = new Date(`${startDate}T${startTime}`);
    const endDateTime = new Date(`${endDate}T${endTime}`);

    if (endDateTime < startDateTime) {
      setErrorMessage(
        '* End date and time cant be earlier than start date and time.'
      );
      return;
    }
    const event: Event = {
      id: generateSimpleID(),
      eventTitle,
      startDateTime,
      endDateTime,
      description,
    };

    onSave(event);
  };

  return (
    <div className={styles.modalContent}>
      <CloseButton onClose={onClose}></CloseButton>
      <h2>Create New Event</h2>
      <form className={styles.addEventForm} onSubmit={handleSubmit}>
        <LabelInputPair
          inputClassName={styles.eventFormInput}
          parentDivClassName={styles.datetime}
          labelText="Event Title:"
          inputType="text"
          inputName="eventTitle"
          value={eventTitle}
          onChange={setEventTitle}
        />
        <div className={styles.dateTimeGroup}>
          <LabelInputPair
            inputClassName={styles.eventFormInput}
            parentDivClassName={styles.datetime}
            labelText="Start Date:"
            inputType="date"
            inputName="startDate"
            value={startDate}
            onChange={setStartDate}
          />

          <LabelInputPair
            inputClassName={styles.eventFormInput}
            parentDivClassName={styles.datetime}
            labelText="Start Time:"
            inputType="time"
            inputName="startTime"
            value={startTime}
            onChange={setStartTime}
          />
        </div>
        <div className={styles.dateTimeGroup}>
          <LabelInputPair
            inputClassName={styles.eventFormInput}
            parentDivClassName={styles.datetime}
            labelText="End Date"
            inputType="date"
            inputName="endDate"
            value={endDate}
            onChange={setEndDate}
          />

          <LabelInputPair
            inputClassName={styles.eventFormInput}
            parentDivClassName={styles.datetime}
            labelText="End Time:"
            inputType="time"
            inputName="endTime"
            value={endTime}
            onChange={setEndTime}
          />
        </div>
        <span className={styles.errorMessage}>{errorMessage}</span>

        <LabelTextAreaPair
          labelText="Description:"
          textAreaName="eventDescription"
          value={description}
          onChange={setDescription}
          textAreaClassName={styles.eventFormInput}
        />
        <CreateEventButton />
      </form>
    </div>
  );
};
export const CloseButton = ({ onClose }: CloseButtonProps) => {
  return (
    <span className={styles.close} onClick={onClose}>
      &times;
    </span>
  );
};

export const LabelInputPair = ({
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
      <label className={styles.eventFormLabel}>{labelText}</label>
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

export const LabelTextAreaPair = ({
  labelText,
  textAreaName,
  value,
  onChange,
  textAreaClassName,
}: LabelTextAreaProps) => {
  return (
    <div className={styles.datetime}>
      <label className={styles.eventFormLabel}>{labelText}</label>
      <textarea
        className={textAreaClassName}
        id={textAreaName}
        name={textAreaName}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </div>
  );
};

export const CreateEventButton = () => {
  return (
    <button className={styles.eventSubmitButton} type="submit">
      Create Event
    </button>
  );
};

export const ErrorMessageSpan = ({ errorMessage }: ErrorMessageProps) => {
  return <span className={styles.errorMessage}>{errorMessage}</span>;
};

export default ModalContent;
