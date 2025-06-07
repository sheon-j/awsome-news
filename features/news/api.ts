import type {
  NewsResponse,
  TopHeadlinesOptions,
  EverythingOptions,
  SourcesOptions,
} from './types'

const NEWS_API_URL = 'https://newsapi.org/v2/'

const fetchHeadlines = async (options: TopHeadlinesOptions = {}) => {
  const config = useRuntimeConfig()
  const query = {
    ...options,
    apiKey: config.public.NEWS_API_KEY,
  }
  const queryString = new URLSearchParams(query).toString()
  const url = `${NEWS_API_URL}top-headlines?${queryString}`
  const response = await $fetch<NewsResponse>(url)
  return response
}

const fetchEverything = async (options: EverythingOptions = {}) => {
  const config = useRuntimeConfig()
  const query = {
    ...options,
    apiKey: config.public.NEWS_API_KEY,
  }
  const queryString = new URLSearchParams(query).toString()
  const url = `${NEWS_API_URL}everything?${queryString}`
  const response = await $fetch<NewsResponse>(url)
  return response
}

const fetchSources = async (options: SourcesOptions = {}) => {
  const config = useRuntimeConfig()
  const query = {
    ...options,
    apiKey: config.public.NEWS_API_KEY,
  }
  const queryString = new URLSearchParams(query).toString()
  const url = `${NEWS_API_URL}sources?${queryString}`
  const response = await $fetch<NewsResponse>(url)
  return response
}

export { fetchHeadlines, fetchEverything, fetchSources }
