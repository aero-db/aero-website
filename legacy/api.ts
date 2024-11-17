import { createClient } from '@aerodb/js'

export const aero = createClient('', import.meta.env.VITE_API_URL)
