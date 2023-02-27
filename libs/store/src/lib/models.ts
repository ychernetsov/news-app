export interface NewsItem {
    title: string;
}

export interface Store {
    news: NewsItem[];
    loading: boolean | null;
    error: Error | null;
  }

export interface Error {
    message: string;
}