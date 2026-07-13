export type FileModelValue = File | FileList | null;

export interface FileIBaseInterface {
  label: string;
  icon?: string;
}

export interface SingleFileInterface extends FileIBaseInterface {
  multiple?: false;
  modelValue?: File | null;
}
export interface MultipleFileInterface extends FileIBaseInterface {
  multiple?: true;
  modelValue?: FileList | null;
}

export type FileInterface = SingleFileInterface | MultipleFileInterface;
