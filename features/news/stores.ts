import { defineStore } from 'pinia'
import type { NewsResponse } from './types'
import { fetchHeadlines } from './api'

export const useNewsStore = defineStore('news', () => {
  const todayNews = ref<NewsResponse>()

  const fetchNews = async () => {
    const response = await fetchHeadlines({ country: 'us', pageSize: '8' })
    todayNews.value = response
  }
  fetchNews()

  return {
    todayNews,
  }
})
