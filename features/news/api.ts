import type { NewsResponse, TopHeadlinesOptions } from './types'

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

export { fetchHeadlines }
