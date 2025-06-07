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

export type Category =
  | 'business'
  | 'entertainment'
  | 'general'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology'

export interface TopHeadlinesOptions {
  country?: 'us' | 'kr'
  category?: Category
  sources?: string
  q?: string
  pageSize?: string
  page?: string
}

export interface EverythingOptions {
  q?: string
  sources?: string
  domains?: string
  excludeDomains?: string
  from?: string
  to?: string
  language?: string
  sortBy?: string
  pageSize?: string
  page?: string
}

export interface SourcesOptions {
  category?: string
  language?:
    | 'ar'
    | 'de'
    | 'en'
    | 'es'
    | 'fr'
    | 'he'
    | 'it'
    | 'nl'
    | 'no'
    | 'pt'
    | 'ru'
    | 'sv'
    | 'ud'
    | 'zh'
  country?:
    | 'ae'
    | 'ar'
    | 'at'
    | 'au'
    | 'be'
    | 'bg'
    | 'br'
    | 'ca'
    | 'ch'
    | 'cn'
    | 'co'
    | 'cu'
    | 'cz'
    | 'de'
    | 'eg'
    | 'fr'
    | 'gb'
    | 'gr'
    | 'hk'
    | 'hu'
    | 'id'
    | 'ie'
    | 'il'
    | 'in'
    | 'it'
    | 'jp'
    | 'kr'
    | 'lt'
    | 'lv'
    | 'ma'
    | 'mx'
    | 'my'
    | 'ng'
    | 'nl'
    | 'no'
    | 'nz'
    | 'ph'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'rs'
    | 'ru'
    | 'sa'
    | 'se'
    | 'sg'
    | 'si'
    | 'sk'
    | 'th'
    | 'tr'
    | 'tw'
    | 'ua'
    | 'us'
    | 've'
    | 'za'
}
