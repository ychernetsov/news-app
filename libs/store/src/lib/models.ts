export interface NewsItemInterface {
    id: string;
    timestamp: string;
    title: string;
    popularity: number;
}

export interface Store {
    news: NewsItemInterface[];
    loading: boolean | null;
    error: Error | null;
  }

export interface Error {
    message: string;
}