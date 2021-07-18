# NuxtChild not waiting for parent asyncData to finish
The parent makes a request to get data in `asyncData`, and inserts the data into the `store`. The `NuxtChild` should not be mounted until the data has been loaded into the `store` due to the `v-if`.

The `asyncData` of the `NuxtChild` component does not have access to the data inserted into the `store` by the parent component, which results in an error:
> TypeError: Cannot read property 'id' of null

## Steps to Reproduce
1. Start the project
```bash
npm ci
npm run dev
```
2. Navigate to http://localhost:3000/child to see the error loading the `NuxtChild` page.