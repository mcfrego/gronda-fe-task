export interface ApplicationState {
  isLoading: boolean;
}

export interface CreationState {
  id: number;
  category_id: number;
  title: string;
  img_url: string;
}

export interface CreationCountState {
  id: number;
  count: number;
}
