export type HeaderBgProps = {
  HighlightTitle?: string;
  title?: string;
  url: string;
};

export type IframeProps = {
  isInModal?: boolean;
  openModal?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type IframeModalProps = {
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
