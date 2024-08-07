import { Event } from '../types';

export interface ErrorMessageProps {
  errorMessage: string;
}
export interface LabelInputPairProps {
  inputClassName: string;
  parentDivClassName: string;
  labelText: string;
  inputType: string;
  inputName: string;
  value: string;
  onChange: (value: string) => void;
}

export interface LabelTextAreaProps {
  labelText: string;
  textAreaName: string;
  value: string;
  onChange: (value: string) => void;
  textAreaClassName: string;
}

export interface CloseButtonProps {
  onClose: () => void;
}

export interface CreateEventModalProps {
  isOpen: boolean;
  closeModal: (flag: boolean) => void;
  date: Date;
}
