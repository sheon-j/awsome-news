import { defineStore } from 'pinia'
import type { NewsResponse, Category } from './types'
import { fetchHeadlines } from './api'

export const useNewsStore = defineStore('news', () => {
  const todayNews = ref<NewsResponse>()
  const categoryNews = ref<NewsResponse>()
  const category = ref<Category>('business')

  const fetchHeadlinesNews = async () => {
    const response = await fetchHeadlines({ country: 'us', pageSize: '6' })
    todayNews.value = response
  }
  fetchHeadlinesNews()

  const fetchCategoryNews = async () => {
    const response = await fetchHeadlines({
      category: category.value,
      pageSize: '6',
    })
    categoryNews.value = response
  }
  fetchCategoryNews()

  watch(category, () => fetchCategoryNews())

  return {
    todayNews,
    categoryNews,
    fetchCategoryNews,
    category,
  }
})
