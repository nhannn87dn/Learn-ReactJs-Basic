export interface IButton {
  label: string;
  /* ? sau tên biến = ko yêu cầu truyền */
  icon?: React.ReactNode;
  type?: string;
}

export type TButton = {
  label: string;
  icon: React.ReactNode;
};
export const button = "13";
