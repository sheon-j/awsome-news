export interface NewsResponse {
  status: string
  totalResults: number
  articles: Article[]
}

export interface Article {
  source: {
    id: string
    name: string
  }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface TopHeadlinesOptions {
  country?: 'us' | 'kr'
  category?:
    | 'business'
    | 'entertainment'
    | 'general'
    | 'health'
    | 'science'
    | 'sports'
    | 'technology'
  sources?: string
  q?: string
  pageSize?: string
  page?: string
}
