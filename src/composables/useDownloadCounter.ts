import { ref } from 'vue'

const BIN_ID = import.meta.env.VITE_JSONBIN_BIN_ID
const API_KEY = import.meta.env.VITE_JSONBIN_API_KEY
const BASE_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`

export const useDownloadCounter = () => {
  const isLoading = ref(false)

  const incrementCount = async () => {
    isLoading.value = true
    try {
      const getResponse = await fetch(BASE_URL, {
        headers: {
          'X-Master-Key': API_KEY,
        },
      })
      const getData = await getResponse.json()
      const currentCount = getData.record.downloads

      await fetch(BASE_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': API_KEY,
        },
        body: JSON.stringify({
          downloads: currentCount + 1,
        }),
      })

    } catch (e) {
      console.warn('Failed to increment download count')
    } finally {
      isLoading.value = false
    }
  }

  return { incrementCount, isLoading }
}