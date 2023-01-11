import {defineCliConfig} from 'sanity/lib/exports/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
})
